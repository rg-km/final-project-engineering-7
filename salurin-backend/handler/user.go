package handler

import (
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/formatter"
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
	formatRespon := formatter.UserFormater(userLogged, "tokentestingcommingjwt")
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
	//jwt token
	formatRespon := formatter.UserFormater(user, "tokentestingcommingjwt")

	response := helper.APIResponse("Your user has been created", http.StatusOK, "success", formatRespon)
	c.JSON(http.StatusOK, response)

}
