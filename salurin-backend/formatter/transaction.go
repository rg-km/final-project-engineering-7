package formatter

import "salurin-backend/entity"

func FormatterTransaction(trasaction entity.Trasaction) entity.TransactionResponse {
	return entity.TransactionResponse{
		ID:         trasaction.ID,
		CampaignId: trasaction.CampaignID,
		UserID:     trasaction.UserID,
		Amount:     trasaction.Amount,
		Status:     trasaction.Status,
		PaymentURL: trasaction.PaymentURl,
	}
}
