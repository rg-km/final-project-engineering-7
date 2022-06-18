package services

import (
	"salurin-backend/entity"
	"salurin-backend/repository"
)

type CampaignService interface {
	//GetDetailCampaign
	GetDetailCampaign(form entity.CampaignDetailRequest) (entity.Campaign, error)
	//GetAllCampaign
	GetCampaign(userID int) (entity.Campaign, error)
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

func (s *campaignService) GetCampaign(userID int) (entity.Campaign, error) {
	if userID != 0 {
		campaigns, err := s.repository.FindByUserID(userID)
		if err != nil {
			return campaigns, err
		}
		return campaigns, nil
	}
	campaings, err := s.repository.FindAll()
	if err != nil {
		return campaings, err
	}
	return campaings, nil
}
