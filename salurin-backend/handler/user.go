package handler

import (
	"fmt"
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

func (u *userHandler) CheckEmailAvailable(c *gin.Context) {
	var request entity.CheckEmailAvailableRequest

	err := c.ShouldBindJSON(&request)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorsMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Email user validation failed", http.StatusUnprocessableEntity, "failed", errorsMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}
	userEmail, err := u.userService.CheckEmailAvailability(request)
	if err != nil {
		errorsMessage := gin.H{"errors": err.Error()}
		response := helper.APIResponse("Email is not valid", http.StatusUnprocessableEntity, "failed", errorsMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}
	data := gin.H{"is_avaiable": userEmail}
	message := "Email Address Is Already Used By Another User"
	if userEmail {
		message = "Email is avaiable"
	}

	response := helper.APIResponse(message, http.StatusOK, "success", data)
	c.JSON(http.StatusOK, response)
}

func (h *userHandler) UploadAvatar(c *gin.Context) {
	file, err := c.FormFile("avatar")
	if err != nil {
		data := gin.H{"is_uploaded": false}
		response := helper.APIResponse("Failed to upload avatar image", http.StatusBadRequest, "error", data)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	currentUser := c.MustGet("currentUser").(entity.User)
	userId := currentUser.ID

	path := fmt.Sprintf("images/%d-%s", userId, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {

		data := gin.H{"is_uploaded": false}
		response := helper.APIResponse("Failed to upload avatar image", http.StatusBadRequest, "failed", data)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	_, err = h.userService.SaveAvatarImage(userId, file.Filename)
	if err != nil {
		data := gin.H{"is_uploaded": false}
		response := helper.APIResponse("Failed to upload avatar image", http.StatusBadRequest, "failed", data)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	data := gin.H{"is_uploaded": true}
	response := helper.APIResponse("Avatar successfully uploaded", http.StatusOK, "success", data)
	c.JSON(http.StatusOK, response)

}
