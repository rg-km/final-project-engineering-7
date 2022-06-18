package handler

import (
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/formatter"
	"salurin-backend/helper"
	"salurin-backend/services"

	"github.com/gin-gonic/gin"
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
