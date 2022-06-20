package entity

import "time"

// entity Users
type User struct {
	ID           int    `db:"id"`
	Name         string `db:"name"`
	Email        string `db:"email"`
	PasswordHash string `db:"password_hash"`
	Avatar       string `db:"avatar"`
	CreatedAt    time.Time
	UpdatedAt    time.Time
}

/*REQUEST*/

//RegisterRequest : Mapping Register Request
type RegisterRequest struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

// Check Email available : email request
type CheckEmailAvailableRequest struct {
	Email string `json:"email" binding:"required,email"`
}

//LOGINRequest: Login Request
type LoginRequest struct {
	Email    string `json:"email"  binding:"required,email"`
	Password string `json:"password"  binding:"required"`
}

/*RESPONSE*/

type RegisterResponse struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Token string `json:"token"`
}
type LoginResponse struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Token string `json:"token"`
}
