package repository

import (
	"salurin-backend/entity"

	"gorm.io/gorm"
)

type CampaignRepository interface {
	//FindBYID
	FindByID(ID int) (entity.Campaign, error)
}

type campaignRepository struct {
	db *gorm.DB
}

func NewCampaignRepository(db *gorm.DB) *campaignRepository {
	return &campaignRepository{db}
}

func (r *campaignRepository) FindByID(ID int) (entity.Campaign, error) {
	var model entity.Campaign
	err := r.db.Preload("User").Preload("CampaignImages").Where("id = ?", ID).Find(&model).Error
	if err != nil {
		return model, err
	}
	return model, nil
}
