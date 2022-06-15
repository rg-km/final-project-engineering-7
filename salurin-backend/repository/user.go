package repository

import (
	"salurin-backend/entity"

	"gorm.io/gorm"
)

type UserRespository interface {
	// Insert user
	Save(user entity.User) (entity.User, error)
}

func NewUserRepository(db *gorm.DB) *userRepository {
	return &userRepository{db}
}

type userRepository struct {
	db *gorm.DB
}

func (r *userRepository) Save(user entity.User) (entity.User, error) {
	err := r.db.Create(&user).Error
	if err != nil {
		return user, err
	}

	return user, nil
}
