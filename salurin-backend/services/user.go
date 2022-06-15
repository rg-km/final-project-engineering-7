package services

import (
	"salurin-backend/entity"
	"salurin-backend/repository"

	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	// Register user
	RegisterUser(register entity.RegisterRequest) (entity.User, error)
}

type userService struct {
	repository repository.UserRespository
}

func NewUserService(repository repository.UserRespository) *userService {
	return &userService{repository}
}

func (s *userService) RegisterUser(register entity.RegisterRequest) (entity.User, error) {
	var user entity.User
	user.Name = register.Name
	user.Email = register.Email
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(register.Password), bcrypt.MinCost)
	if err != nil {
		return user, err
	}
	user.PasswordHash = string(passwordHash)
	newUser, err := s.repository.Save(user)
	if err != nil {
		return newUser, err
	}

	return newUser, nil

}
