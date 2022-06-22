package services

import (
	"errors"
	"salurin-backend/entity"
	"salurin-backend/repository"
	"time"
)

type CampaignService interface {
	//GetDetailCampaign
	GetDetailCampaign(form entity.CampaignDetailRequest) (entity.Campaign, error)
	//GetAllCampaign
	GetCampaign(userID int) ([]entity.Campaign, error)

	CreateCampaign(form entity.CreateCampaignRequest) (entity.Campaign, error)
	EditCampaign(uri entity.CampaignDetailRequest, form entity.CreateCampaignRequest) (entity.Campaign, error)

	CreateImageCampaign(campaignImage entity.CampaignImageUploadRequest, fileLocation string) (entity.CampaignImage, error)
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

func (s *campaignService) GetCampaign(userID int) ([]entity.Campaign, error) {
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
func (s *campaignService) CreateCampaign(form entity.CreateCampaignRequest) (entity.Campaign, error) {
	currentTimeStamp := time.Now()
	model := entity.Campaign{
		Title:        form.Title,
		Description:  form.Description,
		TargetAmount: form.TargetAmount,
		User:         form.User,
		UserID:       form.User.ID,
		TimeStart:    currentTimeStamp,
		TimeEnd:      currentTimeStamp,
		UpdatedAt:    currentTimeStamp,
	}

	newCampaign, err := s.repository.Save(model)
	if err != nil {
		return newCampaign, err
	}
	return newCampaign, nil
}
func (s *campaignService) EditCampaign(uri entity.CampaignDetailRequest, form entity.CreateCampaignRequest) (entity.Campaign, error) {
	model, err := s.repository.FindByID(uri.ID)
	if err != nil {
		return model, err
	}

	if model.ID == 0 {
		return model, errors.New("Campaign not found")
	}
	if model.UserID != form.User.ID {
		return model, errors.New("User not Authorize for this action")
	}

	model.Title = form.Title
	model.TargetAmount = form.TargetAmount
	model.Description = form.Description
	model.UpdatedAt = time.Now()

	updateCampaign, err := s.repository.Update(model)
	if err != nil {
		return updateCampaign, err
	}
	return updateCampaign, nil
}

func (s *campaignService) CreateImageCampaign(campaignImage entity.CampaignImageUploadRequest, fileLocation string) (entity.CampaignImage, error) {
	campaign, err := s.repository.FindByID(campaignImage.CampaignId)
	if err != nil {
		return entity.CampaignImage{}, err
	}

	if campaign.UserID != campaignImage.User.ID {
		return entity.CampaignImage{}, errors.New("Not owned a campaign")
	}
	imageCampaign := entity.CampaignImage{
		CampaignID: campaignImage.CampaignId,
		Image:      fileLocation,
	}

	newCampaign, err := s.repository.SaveImage(imageCampaign)
	if err != nil {
		return newCampaign, err
	}
	return newCampaign, nil

}
