package handler

import (
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/helper"
	"salurin-backend/services"

	"github.com/gin-gonic/gin"
)

type userHandler struct {
	userService services.UserService
}

func NewUserHandler(userService services.UserService) *userHandler {
	return &userHandler{userService}
}

func (h *userHandler) Login(c *gin.Context) {
	//get request login
	var request entity.LoginRequest
	err := c.ShouldBindJSON(request)
	if err != nil {
		errMessage := gin.H{"errors": err.Error()}
		errResponse := helper.ResponseHandler("Login Validation Failed", http.StatusBadRequest, "failed", errMessage)
		c.JSON(http.StatusUnprocessableEntity, errResponse)
		return
	}
	userLogged, err := h.userService.Login(request)
	if err != nil {
		errMessage := gin.H{"errors": err.Error()}
		errResponse := helper.ResponseHandler("Login Failed", http.StatusBadRequest, "failed", errMessage)
		c.JSON(http.StatusUnprocessableEntity, errResponse)
		return
	}
	res := helper.ResponseHandler("Login Successful", http.StatusOK, "success", userLogged)
	c.JSON(http.StatusOK, res)
}
