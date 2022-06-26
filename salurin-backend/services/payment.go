package services

import (
	"errors"
	"salurin-backend/entity"
	"salurin-backend/repository"
	"strconv"

	midtrans "github.com/veritrans/go-midtrans"
)

// PaymentInteractor Contract
type PaymentInteractor interface {
	GeneratePaymentURL(transaction entity.Trasaction, user entity.User) (string, error)
	ProcessPayment(form entity.TransactionNotificationRequest) error
}

type paymentService struct {
	transactionRepository repository.TransactionRepository
	campaignRepository    repository.CampaignRepository
}

// NewPaymentService Initiation
func NewPaymentService(transactionRepository repository.TransactionRepository, campaignRepository repository.CampaignRepository) *paymentService {
	return &paymentService{transactionRepository, campaignRepository}
}

func (s *paymentService) GeneratePaymentURL(transaction entity.Trasaction, user entity.User) (string, error) {
	midclient := midtrans.NewClient()
	midclient.ServerKey = "SB-Mid-server-IdPo_UYyvKPvXWLYwI5lCfot"
	midclient.ClientKey = "SB-Mid-client-qTbU3a_hwbkZYOMk"
	midclient.APIEnvType = midtrans.Sandbox
	snapGateway := midtrans.SnapGateway{
		Client: midclient,
	}

	snapReq := &midtrans.SnapReq{
		TransactionDetails: midtrans.TransactionDetails{
			OrderID:  strconv.Itoa(transaction.ID),
			GrossAmt: int64(transaction.Amount),
		},
		CustomerDetail: &midtrans.CustDetail{
			Email: user.Email,
			FName: user.Name,
		},
	}

	snapTokenResp, err := snapGateway.GetToken(snapReq)
	if err != nil {
		return "", err
	}
	return snapTokenResp.RedirectURL, nil
}

func (s *paymentService) ProcessPayment(form entity.TransactionNotificationRequest) error {
	transaction_id, _ := strconv.Atoi(form.OrderID)
	transaction, err := s.transactionRepository.FindByID(transaction_id)

	if err != nil {
		return err
	}
	if transaction.ID == 0 {
		return errors.New("Transaction not found")
	}
	//IF Credit Card
	if form.PaymentType == "credit_card" && form.TransactionStatus == "capture" && form.FraudStatus == "accept" {
		transaction.Status = "paid"
	} else if form.TransactionStatus == "settlement" {
		transaction.Status = "paid"
	} else if form.TransactionStatus == "deny" || form.TransactionStatus == "expire" || form.TransactionStatus == "cancel" {
		transaction.Status = "cancelled"
	}

	updatedTransaction, err := s.transactionRepository.Update(transaction)
	if err != nil {
		return err
	}

	campaign, err := s.campaignRepository.FindByID(updatedTransaction.CampaignID)
	if err != nil {
		return err
	}
	if campaign.ID == 0 {
		return errors.New("Campaign not found")
	}
	if updatedTransaction.Status == "paid" {
		campaign.CurrentAmount = campaign.CurrentAmount + updatedTransaction.Amount
		_, err := s.campaignRepository.Update(campaign)
		if err != nil {
			return err
		}
	}
	return nil
}
