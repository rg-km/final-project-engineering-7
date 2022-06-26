package services

import (
	"errors"
	"fmt"
	"salurin-backend/entity"
	"salurin-backend/repository"
	"time"
)

type StoryService interface {
	GetAllStoryes() ([]entity.Story, error)
	CreateStory(form entity.StoryRequest) (entity.Story, error)
	UpdatedStory(id entity.StoryIdUpdated, form entity.StoryRequest) (entity.Story, error)
}
type storyService struct {
	repository repository.StoryRepository
}

func NewStoryService(repository repository.StoryRepository) *storyService {
	return &storyService{repository}
}

func (s *storyService) GetAllStoryes() ([]entity.Story, error) {
	storyes, err := s.repository.FindAll()
	if err != nil {
		return storyes, err
	}

	return storyes, nil
}

func (s *storyService) CreateStory(form entity.StoryRequest) (entity.Story, error) {
	currentTime := time.Now()
	stori := entity.Story{
		Description: form.Description,
		UserID:      form.User.ID,
		CreatedAt:   currentTime,
		UpdatedAt:   currentTime,
		User:        form.User,
	}
	newStori, err := s.repository.Save(stori)
	if err != nil {
		fmt.Println(err)
		return newStori, err
	}
	return newStori, nil

}

func (s *storyService) UpdatedStory(id entity.StoryIdUpdated, form entity.StoryRequest) (entity.Story, error) {
	currentTime := time.Now()
	stori, err := s.repository.FindByID(id.ID)
	if err != nil {
		return stori, err
	}
	if stori.UserID != form.User.ID {
		return stori, errors.New("Not owned this Story")
	}
	stori.UpdatedAt = currentTime
	stori.Description = form.Description

	newStori, err := s.repository.Update(stori)
	if err != nil {
		return newStori, err
	}
	return newStori, nil
}
