package services

import (
	"salurin-backend/entity"
	"salurin-backend/repository"
)

type StoryService interface {
	GetAllStoryes() ([]entity.Story, error)
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
