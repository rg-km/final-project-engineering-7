package handler

import (
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/formatter"
	"salurin-backend/helper"
	"salurin-backend/services"

	"github.com/gin-gonic/gin"
)

type storyHandler struct {
	storyService services.StoryService
}

func NewStoryHandler(storyService services.StoryService) *storyHandler {
	return &storyHandler{storyService}
}

func (h *storyHandler) GetAllStoryes(c *gin.Context) {
	storyes, err := h.storyService.GetAllStoryes()
	if err != nil {
		response := helper.APIResponse("Failed to get a storys", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := formatter.FormatterStoryes(storyes)
	reponse := helper.APIResponse("Get All Storyes", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, reponse)
}

func (h *storyHandler) CreateAStory(c *gin.Context) {
	var request entity.StoryRequest
	currentUser := c.MustGet("currentUser").(entity.User)
	err := c.ShouldBindJSON(&request)
	if err != nil {
		response := helper.APIResponse("Failed to create a story", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	request.User = currentUser

	stori, err := h.storyService.CreateStory(request)
	if err != nil {
		response := helper.APIResponse("Failed to create a story", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	reponse := helper.APIResponse("Succesfully created story", http.StatusOK, "success", formatter.FormatterCreateStory(stori))
	c.JSON(http.StatusOK, reponse)

}

func (h *storyHandler) UpdateAStory(c *gin.Context) {
	var request entity.StoryIdUpdated
	var form entity.StoryRequest
	currentUser := c.MustGet("currentUser").(entity.User)
	err := c.ShouldBindUri(&request)

	if err != nil {
		response := helper.APIResponse("Failed to update a story1", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	err = c.ShouldBindJSON(&form)
	form.User = currentUser
	if err != nil {
		response := helper.APIResponse("Failed to update a story2", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	stori, err := h.storyService.UpdatedStory(request, form)
	if err != nil {
		errorMessage := gin.H{"errors": err.Error()}
		response := helper.APIResponse("Failed to update a story3", http.StatusUnauthorized, "failed", errorMessage)
		c.JSON(http.StatusUnauthorized, response)
		return
	}

	reponse := helper.APIResponse("Succesfully update story", http.StatusOK, "success", formatter.FormatterUpdateStory(stori))
	c.JSON(http.StatusOK, reponse)
}
