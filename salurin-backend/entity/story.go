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

type StoryResponse struct {
	Description string `json:"description"`
	Username    string `json:"username"`
	Avatar      string `json:"avatar"`
}

type StoryRequest struct {
	Description string `json:"description"`

	User User
}

type StoryCreateResponse struct {
	ID          int       `json:"id"`
	UserID      int       `json:"user_id"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
}
