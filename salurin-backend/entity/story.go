package entity

import "time"

type Story struct {
	ID          int    `db:"id"`
	UserID      int    `db:"user_id"`
	Description string `db:"description"`
	CreatedAt   time.Time
	UpdatedAt   time.Time

	User User
}
