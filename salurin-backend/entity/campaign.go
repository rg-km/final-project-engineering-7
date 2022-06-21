package entity

import (
	"time"
)

type Campaign struct {
	ID            int    `db:"id"`
	UserID        int    `db:"user_id"`
	Title         string `db:"title"`
	Description   string `db:"description"`
	TargetAmount  int    `db:"target_amount"`
	CurrentAmount int    `db:"current_amount"`
	TimeStart     time.Time
	TimeEnd       time.Time
	CreatedAt     time.Time
	UpdatedAt     time.Time

	CampaignImages []CampaignImage
	User           User
}

type CampaignImage struct {
	Id         int    `db:"id"`
	Image      string `db:"image"`
	CampaignID int    `db:"campaign_id"`
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

/*Request*/
// request campaign detail
type CampaignDetailRequest struct {
	ID int `uri:"id" binding:"required"`
}

// request create campaign
type CreateCampaignRequest struct {
	Title        string `json:"title" binding:"required"`
	Description  string `json:"description" binding:"required"`
	TargetAmount int    `json:"target_amount" binding:"required"`

	User User
}

// request image upload
type CampaignImageUploadRequest struct {
	CampaignId int `form:"campaign_id" binding:"required"`
	User       User
}

/*Response*/
//campaign response
type CampaignResponse struct {
	ID            int    `json:"id"`
	UserID        int    `json:"user_id"`
	Title         string `json:"title"`
	Description   string `json:"description"`
	ImageUrl      string `json:"image_url"`
	TargetAmount  int    `json:"target_amount"`
	CurrentAmount int    `json:"current_amount"`
}

// campaign detail response
type CampaignDetailResponse struct {
	ID            int                      `json:"id"`
	UserID        int                      `json:"user_id"`
	Title         string                   `json:"title"`
	ImageUrl      string                   `json:"image_url"`
	TargetAmount  int                      `json:"target_amount"`
	CurrentAmount int                      `json:"current_amount"`
	Description   string                   `json:"description"`
	User          CampaignUserResponse     `json:"user"`
	Images        []CampaignImagesResponse `json:"images"`
}

// user campaign response
type CampaignUserResponse struct {
	Name     string `json:"name"`
	ImageUrl string `json:"image_url"`
}

// campaign images response
type CampaignImagesResponse struct {
	ImageUrl string `json:"image_url"`
}
