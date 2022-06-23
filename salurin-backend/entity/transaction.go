package entity

import "time"

type Trasaction struct {
	ID         int  `db:"id"`
	UserID     int  `db:"user_id"`
	CampaignID int  `db:"campaign_id"`
	Amount     int  `db:"amount"`
	Status     bool `db:"status"`
	CreatedAt  time.Time
	UpdatedAt  time.Time

	User     User
	Campaign Campaign
}

type TransactionRequest struct {
	Amount int `json:"amount"`
}

type TransactionResponse struct {
}
