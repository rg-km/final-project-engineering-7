package repository

import (
	"salurin-backend/entity"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindByEmail(email string) (entity.User, error)
	FindByID(id int) (entity.User, error)
	Save(user entity.User) (entity.User, error)
}

type userRepository struct {
	db *gorm.DB
}

type UserRespository interface {
	// Insert user
	Save(user entity.User) (entity.User, error)
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

func (r *userRepository) Save(user entity.User) (entity.User, error) {
	err := r.db.Create(&user).Error
	if err != nil {
		return user, err
	}

	return user, nil
}
func (r *userRepository) FindByID(id int) (entity.User, error) {
	var model entity.User
	err := r.db.Where("id = ?", id).Find(&model).Error
	if err != nil {
		return model, err
	}
	return model, nil
}
