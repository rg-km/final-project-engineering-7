package handler

import "salurin-backend/services"

type campaignHandler struct {
	service services.CampaignService
}

func NewCampaignHandler(service *services.CampaignService) *campaignHandler {
	return &campaignHandler{service}
}
