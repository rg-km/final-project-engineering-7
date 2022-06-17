package handler

import (
	"net/http"
	"salurin-backend/config"
	"salurin-backend/entity"
	"salurin-backend/formatter"
	"salurin-backend/helper"
	"salurin-backend/services"

	"github.com/gin-gonic/gin"
)

type userHandler struct {
	userService services.UserService
	authService config.AuthService
}

func NewUserHandler(userService services.UserService, authService config.AuthService) *userHandler {
	return &userHandler{userService, authService}
}

func (h *userHandler) Login(c *gin.Context) {
	//get request login
	var request entity.LoginRequest
	err := c.ShouldBindJSON(&request)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errMessage := gin.H{"errors": errors}
		errResponse := helper.APIResponse("Login Validation Failed", http.StatusUnprocessableEntity, "failed", errMessage)
		c.JSON(http.StatusUnprocessableEntity, errResponse)
		return
	}
	userLogged, err := h.userService.Login(request)
	if err != nil {
		errMessage := gin.H{"errors": err.Error()}
		errResponse := helper.APIResponse("Login Failed", http.StatusBadRequest, "failed", errMessage)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	token, err := h.authService.GenerateToken(userLogged.ID)
	if err != nil {
		errMessage := gin.H{"errors": err.Error()}
		errResponse := helper.APIResponse("Generate Token Failed", http.StatusBadRequest, "failed", errMessage)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}

	formatRespon := formatter.UserFormater(userLogged, token)
	res := helper.APIResponse("Login Successful", http.StatusOK, "success", formatRespon)
	c.JSON(http.StatusOK, res)
}
func (u *userHandler) RegisterUser(c *gin.Context) {
	var input entity.RegisterRequest

	err := c.ShouldBindJSON(&input)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorsMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Register user validation failed", http.StatusUnprocessableEntity, "failed", errorsMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	user, err := u.userService.RegisterUser(input)
	if err != nil {
		response := helper.APIResponse("Register user failed", http.StatusBadRequest, "failed", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	token, err := u.authService.GenerateToken(user.ID)
	if err != nil {
		errMessage := gin.H{"errors": err.Error()}
		errResponse := helper.APIResponse("Generate Token Failed", http.StatusBadRequest, "failed", errMessage)
		c.JSON(http.StatusBadRequest, errResponse)
		return
	}
	//jwt token
	formatRespon := formatter.UserFormater(user, token)

	response := helper.APIResponse("Your user has been created", http.StatusOK, "success", formatRespon)
	c.JSON(http.StatusOK, response)

}
