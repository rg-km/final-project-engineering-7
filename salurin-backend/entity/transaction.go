package entity

import "time"

type Trasaction struct {
	ID         int  `gorm:"size:36;not null;uniqueIndex;primary_key;AUTO_INCREMENT"`
	UserID     int  `gorm:"size:100"`
	CampaignID int  `gorm:"size:100"`
	Amount     int  `gorm:"size:100"`
	Status     bool `gorm:"default:true"`
	CreatedAt  time.Time
	UpdatedAt  time.Time

	User     User
	Campaign Campaign
}
