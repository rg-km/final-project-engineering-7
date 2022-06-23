package entity

import "time"

type Trasaction struct {
	ID         int    `db:"id"`
	UserID     int    `db:"user_id"`
	CampaignID int    `db:"campaign_id"`
	Amount     int    `db:"amount"`
	Status     string `db:"status"`
	PaymentURl string `db:"payment_url"`
	CreatedAt  time.Time
	UpdatedAt  time.Time

	User     User
	Campaign Campaign
}

type TransactionRequest struct {
	Amount     int `json:"amount"`
	CampaignID int `json:"campaignID"`
	User       User
}

type TransactionResponse struct {
	ID         int    `json:"id"`
	CampaignId int    `json:"campaign_id"`
	UserID     int    `json:"user_id"`
	Amount     int    `json:"amount"`
	Status     string `json:"status"`
	PaymentURL string `json:"payment_url"`
}

type TransactionNotificationRequest struct {
	TransactionStatus string `json:"transaction_status"`
	OrderID           string `json:"order_id"`
	PaymentType       string `json:"payment_type"`
	FraudStatus       string `json:"fraud_status"`
}
