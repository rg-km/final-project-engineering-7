package services

import (
	"errors"
	"salurin-backend/entity"
	"salurin-backend/repository"

	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	Login(form entity.LoginRequest) (entity.User, error)
}

type userService struct {
	repository repository.UserRepository
}

func NewUserService(repository repository.UserRepository) *userService {
	return &userService{repository}
}

func (s *userService) Login(form entity.LoginRequest) (entity.User, error) {
	model, err := s.repository.FindByEmail(form.Email)
	if err != nil {
		return model, err
	}
	if model.ID == 0 {
		return model, errors.New("User not found")
	}
	err = bcrypt.CompareHashAndPassword([]byte(model.PasswordHash), []byte(form.Password))
	if err != nil {
		return model, errors.New("Password inccorect")
	}
	return model, nil
}
