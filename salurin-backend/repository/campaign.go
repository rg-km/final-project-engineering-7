package repository

import "gorm.io/gorm"

type CampaignRepository interface {
}

type campaignRepository struct {
	db *gorm.DB
}

func NewCampaignRepository(db *gorm.DB) *campaignRepository {
	return &campaignRepository{db}
}
