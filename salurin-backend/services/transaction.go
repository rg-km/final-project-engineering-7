package services

import (
	"salurin-backend/entity"
	"salurin-backend/repository"
)

type TransactionService interface {
	CreateTransaction(form entity.TransactionRequest) (entity.Trasaction, error)
}

type transactionService struct {
	repository     repository.TransactionRepository
	paymentService PaymentInteractor
}

func NewTransactionService(repository repository.TransactionRepository, paymentService PaymentInteractor) *transactionService {
	return &transactionService{repository, paymentService}
}

func (s *transactionService) CreateTransaction(form entity.TransactionRequest) (entity.Trasaction, error) {
	model := entity.Trasaction{
		Amount:     form.Amount,
		CampaignID: form.CampaignID,
		User:       form.User,
		UserID:     form.User.ID,
		Status:     "pending",
	}
	newTransaction, err := s.repository.Save(model)
	if err != nil {

		return newTransaction, err
	}
	paymentURL, err := s.paymentService.GeneratePaymentURL(newTransaction, newTransaction.User)
	if err != nil {

		return newTransaction, err
	}

	newTransaction.PaymentURl = paymentURL
	newTransaction, err = s.repository.Update(newTransaction)
	if err != nil {

		return newTransaction, err
	}

	return newTransaction, nil
}
