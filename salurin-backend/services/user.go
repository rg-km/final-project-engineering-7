package services

import (
	"errors"
	"salurin-backend/entity"
	"salurin-backend/repository"

	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	Login(form entity.LoginRequest) (entity.User, error)
	RegisterUser(form entity.RegisterRequest) (entity.User, error)
	GetUserByID(id int) (entity.User, error)
	CheckEmailAvailability(form entity.CheckEmailAvailableRequest) (bool, error)
	SaveAvatarImage(id int, fileLocation string) (entity.User, error)
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

func (s *userService) GetUserByID(id int) (entity.User, error) {
	//Find
	model, err := s.repository.FindByID(id)
	if err != nil {
		return model, err
	}
	//Is Found?
	if model.ID == 0 {
		return model, errors.New("User not found")
	}
	return model, nil
}

func (s *userService) CheckEmailAvailability(form entity.CheckEmailAvailableRequest) (bool, error) {
	email := form.Email
	user, err := s.repository.FindByEmail(email)
	if err != nil {
		return false, err
	}
	if user.ID == 0 {
		return true, nil
	}
	return false, err
}

func (s *userService) SaveAvatarImage(id int, fileLocation string) (entity.User, error) {
	user, err := s.repository.FindByID(id)
	if err != nil {
		return user, err
	}
	user.Avatar = fileLocation
	userUpdated, err := s.repository.Update(user)
	if err != nil {
		return user, err
	}
	return userUpdated, nil
}
