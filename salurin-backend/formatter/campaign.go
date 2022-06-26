package formatter

import (
	"fmt"
	"salurin-backend/entity"
)

func FormatterDetailCampaign(campaign entity.Campaign) entity.CampaignDetailResponse {
	formater := entity.CampaignDetailResponse{
		ID:            campaign.ID,
		UserID:        campaign.UserID,
		Title:         campaign.Title,
		Description:   campaign.Description,
		CurrentAmount: campaign.CurrentAmount,
		TargetAmount:  campaign.TargetAmount,
	}
	formater.ImageUrl = ""
	if len(campaign.CampaignImages) != 0 {
		formater.ImageUrl = campaign.CampaignImages[0].Image
	}
	user := campaign.User
	formater.User.Name = user.Name
	formater.User.ImageUrl = user.Avatar

	campaignImages := []entity.CampaignImagesResponse{}
	for _, v := range campaign.CampaignImages {
		campaignImage := entity.CampaignImagesResponse{
			ImageUrl: v.Image,
		}
		campaignImages = append(campaignImages, campaignImage)
	}
	formater.Images = campaignImages
	return formater
}

func FormatterCampaign(campaign entity.Campaign) entity.CampaignResponse {
	formatter := entity.CampaignResponse{
		ID:            campaign.ID,
		UserID:        campaign.UserID,
		Title:         campaign.Title,
		Description:   campaign.Description,
		TargetAmount:  campaign.TargetAmount,
		CurrentAmount: campaign.CurrentAmount,
	}
	formatter.ImageUrl = ""

	if len(campaign.CampaignImages) > 0 {
		formatter.ImageUrl = campaign.CampaignImages[0].Image
		fmt.Println(*&campaign.CampaignImages)
	}

	return formatter
}
func CampaignsAdapter(campaigns []entity.Campaign) []entity.CampaignResponse {
	campaignsAdapter := []entity.CampaignResponse{}
	for _, campaign := range campaigns {
		campaignAdapter := FormatterCampaign(campaign)
		campaignsAdapter = append(campaignsAdapter, campaignAdapter)
	}
	return campaignsAdapter
}
