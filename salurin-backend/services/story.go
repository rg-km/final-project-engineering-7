package services

import (
	"salurin-backend/entity"
	"salurin-backend/repository"
	"time"
)

type StoryService interface {
	GetAllStoryes() ([]entity.Story, error)
	CreateStory(form entity.StoryRequest) (entity.Story, error)
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
	var stori entity.Story = entity.Story{
		Description: form.Description,
		UserID:      form.User.ID,
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
		User:        form.User,
	}
	newStori, err := s.repository.Save(stori)
	if err != nil {
		return newStori, err
	}
	return newStori, nil

}
