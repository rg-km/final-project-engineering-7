package entity

import "time"

type Story struct {
	ID          int    `gorm:"size:36;not null;uniqueIndex;primary_key;AUTO_INCREMENT"`
	UserID      int    `gorm:"size:100"`
	Description string `gorm:"type:text"`
	CreatedAt   time.Time
	UpdatedAt   time.Time

	User User
}
