package handler

import (
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/formatter"
	"salurin-backend/helper"
	"salurin-backend/services"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mitchellh/mapstructure"
)

type campaignHandler struct {
	service services.CampaignService
}

func NewCampaignHandler(service services.CampaignService) *campaignHandler {
	return &campaignHandler{service}
}

func (h *campaignHandler) GetCampaignDetail(c *gin.Context) {
	var request entity.CampaignDetailRequest
	err := c.ShouldBindUri(&request)

	if err != nil {
		response := helper.APIResponse("Failed to get a campaign", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	campaignDetail, err := h.service.GetDetailCampaign(request)
	if err != nil {
		response := helper.APIResponse("Failed to get a campaign", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := formatter.FormatterDetailCampaign(campaignDetail)
	reponse := helper.APIResponse("Campaign Detail", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, reponse)
}

func (h *campaignHandler) GetCampaigns(c *gin.Context) {
	userID, _ := strconv.Atoi(c.Query("user_id"))
	campaigns, err := h.service.GetCampaign(userID)
	if err != nil {
		errResponse := helper.APIResponse("Failed to get a campaign", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	models := []entity.Campaign{}
	mapstructure.Decode(campaigns, &models)
	formatter := formatter.CampaignsAdapter(models)
	c.JSON(http.StatusOK, formatter)
}
