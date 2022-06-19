package repository

import (
	"salurin-backend/entity"

	"gorm.io/gorm"
)

type CampaignRepository interface {
	//FindBYID
	FindByID(ID int) (entity.Campaign, error)
	FindAll() (entity.Campaign, error)
	FindByUserID(userID int) (entity.Campaign, error)

	Save(campaign entity.Campaign) (entity.Campaign, error)
	Update(campaign entity.Campaign) (entity.Campaign, error)
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

func (r *campaignRepository) FindAll() (entity.Campaign, error) {
	var model entity.Campaign
	err := r.db.Preload("CampaignImages", "campaign_images.is_primary = 1").Find(&model).Error
	if err != nil {
		return model, err
	}
	return model, nil
}
func (r *campaignRepository) FindByUserID(UserID int) (entity.Campaign, error) {
	var model entity.Campaign
	err := r.db.Where("user_id = ?", UserID).
		Preload("CampaignImages", "campaign_images.is_primary = 1").
		Find(&model).Error
	if err != nil {
		return model, err
	}
	return model, nil
}

func (r *campaignRepository) Save(campaign entity.Campaign) (entity.Campaign, error) {
	err := r.db.Create(&campaign).Error
	if err != nil {
		return campaign, err
	}
	return campaign, nil
}

func (r *campaignRepository) Update(campaign entity.Campaign) (entity.Campaign, error) {
	err := r.db.Save(&campaign).Error
	if err != nil {
		return campaign, err
	}
	return campaign, nil
}
