package handler

import (
	"net/http"
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
