package entity

import "time"

// entity Users
type User struct {
	ID           int    `gorm:"size:36;not null;uniqueIndex;primary_key" gorm:"AUTO_INCREMENT"`
	Name         string `gorm:"size:100;not null"`
	Email        string `gorm:"size:100;not null;uniqueIndex"`
	PasswordHash string `gorm:"size:100;not null"`
	Avatar       string `gorm:"size:100"`
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
	Password string `json:"password"  binding:"email"`
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
