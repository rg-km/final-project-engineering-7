package repository

import (
	"database/sql"
	"fmt"
	"salurin-backend/entity"
)

type CampaignRepository interface {
	FindByID(ID int) (entity.Campaign, error)
	FindAll() ([]entity.Campaign, error)
	FindByUserID(userID int) ([]entity.Campaign, error)

	Save(campaign entity.Campaign) (entity.Campaign, error)
	Update(campaign entity.Campaign) (entity.Campaign, error)
}

type campaignRepository struct {
	db *sql.DB
}

func NewCampaignRepository(db *sql.DB) *campaignRepository {
	return &campaignRepository{db}
}

func (r *campaignRepository) FindByID(ID int) (entity.Campaign, error) {
	fmt.Println(ID)
	sqlSmt := `SELECT 
	campaigns.id,campaigns.user_id,campaigns.title,campaigns.description,campaigns.target_amount,campaigns.current_amount,campaigns.time_start,campaigns.time_end,
	users.name,users.avatar
	FROM campaigns
	JOIN users ON campaigns.user_id=users.id
	JOIN campaign_images ON campaigns.id=campaign_images.campaign_id
	WHERE campaigns.id = ?`

	sqlImageStmt := `SELECT
	image 
	FROM campaign_images
	WHERE campaign_id = ?`
	var model entity.Campaign
	var campaignImages []entity.CampaignImage

	rows, err := r.db.Query(sqlSmt, ID)
	image, _ := r.db.Query(sqlImageStmt, ID)
	for image.Next() {
		var campaignImage entity.CampaignImage
		err := image.Scan(&campaignImage.Image)
		if err != nil {
			return model, err
		}
		campaignImages = append(campaignImages, campaignImage)
		fmt.Println(len(campaignImages))
	}
	if err != nil {
		return model, err
	}

	model.CampaignImages = campaignImages
	if rows.Next() {

		err := rows.Scan(&model.ID, &model.UserID, &model.Title, &model.Description, &model.TargetAmount, &model.CurrentAmount, &model.TimeStart, &model.TimeEnd, &model.User.Name, &model.User.Avatar)
		if err != nil {
			return model, err
		}

	}

	return model, nil
}

func (r *campaignRepository) FindAll() ([]entity.Campaign, error) {
	sqlSmt := `SELECT c.id,c.user_id,c.title,c.description,c.target_amount,c.current_amount,c.time_start,c.time_end
	FROM campaigns c
	JOIN campaign_images ci ON c.id=ci.campaign_id`

	sqlSmtImg := `SELECT image from campaign_images where campaign_id =?`

	var models []entity.Campaign
	var campaignImages []entity.CampaignImage

	rows, err := r.db.Query(sqlSmt)
	if err != nil {
		return models, err
	}
	for rows.Next() {
		var model entity.Campaign
		err := rows.Scan(&model.ID, &model.UserID, &model.Title, &model.Description, &model.TargetAmount, &model.CurrentAmount, &model.TimeStart, &model.TimeEnd)
		if err != nil {
			return models, err
		}
		image, _ := r.db.Query(sqlSmtImg, &model.ID)
		for image.Next() {
			var campaignsImages entity.CampaignImage
			err := image.Scan(&campaignsImages.Image)
			if err != nil {
				return models, err
			}
			campaignImages = append(campaignImages, campaignsImages)
		}
		defer image.Close()
		model.CampaignImages = campaignImages
	}
	defer rows.Close()

	return models, err
}
func (r *campaignRepository) FindByUserID(UserID int) ([]entity.Campaign, error) {
	sqlSmt := `SELECT c.id,c.user_id,c.title,c.description,c.target_amount,c.current_amount,c.time_start,c.time_end
	FROM campaigns c
	JOIN campaign_images ci ON c.id=ci.campaign_id
	WHERE c.user_id = ?
	`

	sqlSmtImg := `SELECT image from campaign_images where campaign_id =?`

	var models []entity.Campaign
	var campaignImages []entity.CampaignImage

	rows, err := r.db.Query(sqlSmt, UserID)
	if err != nil {
		return models, err
	}
	for rows.Next() {
		var model entity.Campaign
		err := rows.Scan(&model.ID, &model.UserID, &model.Title, &model.Description, &model.TargetAmount, &model.CurrentAmount, &model.TimeStart, &model.TimeEnd)
		if err != nil {
			return models, err
		}
		image, _ := r.db.Query(sqlSmtImg, &model.ID)
		for image.Next() {
			var campaignsImages entity.CampaignImage
			err := image.Scan(&campaignsImages.Image)
			if err != nil {
				return models, err
			}
			campaignImages = append(campaignImages, campaignsImages)
		}
		defer image.Close()
		model.CampaignImages = campaignImages
	}
	defer rows.Close()

	return models, err
}

func (r *campaignRepository) Save(campaign entity.Campaign) (entity.Campaign, error) {
	sqlSmt := `INSERT INTO campaigns(user_id,title,description,target_amount,current_amount,time_start,time_end) VALUES(?,?,?,?,?,?,?)`
	row, err := r.db.Exec(sqlSmt, campaign.UserID, campaign.Title, campaign.Description, campaign.TargetAmount, campaign.CurrentAmount, campaign.TimeStart, campaign.TimeEnd)
	if err != nil {
		return campaign, err
	}
	id, err := row.LastInsertId()
	if err != nil {
		return campaign, err
	}
	campaign.ID = int(id)
	return campaign, nil
}

func (r *campaignRepository) Update(campaign entity.Campaign) (entity.Campaign, error) {
	sqlSmt := `UPDATE users SET title=?,description=?,target_amount=?,current_amount=?,time_start=?,time_end=? WHERE id = ?`
	_, err := r.db.Exec(sqlSmt, campaign.Title, campaign.Description, campaign.TargetAmount, campaign.CurrentAmount, campaign.TimeStart, campaign.TimeEnd, campaign.ID)
	if err != nil {
		return campaign, err
	}
	return campaign, nil
}
