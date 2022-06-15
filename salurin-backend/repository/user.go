package repository

import (
	"gorm.io/gorm"
	"salurin-backend/entity"
)

type UserRepository interface {
	FindByEmail(email string) (entity.User, error)
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) *userRepository {
	return &userRepository{db}
}

func (r *userRepository) FindByEmail(email string) (entity.User, error) {
	var model entity.User
	err := r.db.Where("email = ?", email).Find(&model).Error
	if err != nil {
		return model, err
	}
	return model, err
}
