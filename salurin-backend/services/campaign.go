package services

import (
	"salurin-backend/entity"
	"salurin-backend/repository"
)

type CampaignService interface {
	//GetDetailCampaign
	GetDetailCampaign(form entity.CampaignDetailRequest) (entity.Campaign, error)
}
type campaignService struct {
	repository repository.CampaignRepository
}

func NewCampaignService(repository repository.CampaignRepository) *campaignService {
	return &campaignService{repository}
}

func (s *campaignService) GetDetailCampaign(form entity.CampaignDetailRequest) (entity.Campaign, error) {
	campaign, err := s.repository.FindByID(form.ID)
	if err != nil {
		return campaign, err
	}
	return campaign, nil
}
