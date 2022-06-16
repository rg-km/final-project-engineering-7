package services

import "salurin-backend/repository"

type CampaignService interface {
}
type campaignService struct {
	repository repository.CampaignRepository
}

func NewCampaignService(repository repository.CampaignRepository) *campaignService {
	return &campaignService{repository}
}
