package handler

import (
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/formatter"
	"salurin-backend/helper"
	"salurin-backend/services"
	"strconv"

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

func (h *campaignHandler) GetCampaigns(c *gin.Context) {
	userID, _ := strconv.Atoi(c.Query("user_id"))
	campaigns, err := h.service.GetCampaign(userID)
	if err != nil {
		errResponse := helper.APIResponse("Failed to get a campaign", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	formatter := formatter.CampaignsAdapter(campaigns)
	reponse := helper.APIResponse("List of campaign", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, reponse)
}

func (h *campaignHandler) CreateCampaign(c *gin.Context) {
	currentUser := c.MustGet("currentUser").(entity.User)

	var request entity.CreateCampaignRequest
	err := c.ShouldBindJSON(&request)
	if err != nil {
		errResponse := helper.APIResponse("Create Campaign Failed", http.StatusUnprocessableEntity, "failed", nil)
		c.JSON(http.StatusUnprocessableEntity, errResponse)
	}

	request.User = currentUser

	newCampaign, err := h.service.CreateCampaign(request)
	if err != nil {
		errResponse := helper.APIResponse("Create Campaign Failed", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	formatter := formatter.FormatterCampaign(newCampaign)
	res := helper.APIResponse("CreateCampaign Successful", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, res)
}

func (h *campaignHandler) EditCampaign(c *gin.Context) {
	//Get User Logged
	currentUser := c.MustGet("currentUser").(entity.User)
	var uri entity.CampaignDetailRequest

	//GET ID CAMPAIGN
	err := c.ShouldBindUri(&uri)
	if err != nil {
		errorMessage := gin.H{"errors": err.Error()}
		errResponse := helper.APIResponse("EditCampaign Failed", http.StatusBadRequest, "failed", errorMessage)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	//GET REQUEST CAMPAIGN
	var request entity.CreateCampaignRequest
	err = c.ShouldBindJSON(&request)
	if err != nil {
		errResponse := helper.APIResponse("EditCampaign Validation Failed", http.StatusUnprocessableEntity, "failed", nil)
		c.JSON(http.StatusUnprocessableEntity, errResponse)
		return
	}
	//SET CAMPAIGNER OWNER
	request.UserID = currentUser.ID
	//UPDATE CAMPAIGN DB
	updateCampaign, err := h.service.EditCampaign(uri, request)
	if err != nil {
		errorMessage := gin.H{"errors": err.Error()}
		errResponse := helper.APIResponse("EditCampaign Failed Created", http.StatusBadRequest, "failed", errorMessage)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	//RESPONSE
	data := formatter.FormatterCampaign(updateCampaign)
	res := helper.APIResponse("EditCampaign Successful Created", http.StatusOK, "success", data)
	c.JSON(http.StatusOK, res)
}
