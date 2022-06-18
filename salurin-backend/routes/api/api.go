package api

import (
	"salurin-backend/config"
	"salurin-backend/handler"
	"salurin-backend/repository"
	"salurin-backend/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func APIRoute(api *gin.RouterGroup, db *gorm.DB) {
	//repository
	userRepository := repository.NewUserRepository(db)
	campaignRepository := repository.NewCampaignRepository(db)

	//service
	userService := services.NewUserService(userRepository)
	authService := config.NewAuthService()
	campaignService := services.NewCampaignService(campaignRepository)

	//handler
	userHandler := handler.NewUserHandler(userService, authService)
	campaignHandler := handler.NewCampaignHandler(campaignService)
	//routes
	api.POST("/login", userHandler.Login)
	api.POST("/register", userHandler.RegisterUser)
	api.POST("/email-check", userHandler.CheckEmailAvailable)
	api.GET("/campaigns/:id", campaignHandler.GetCampaignDetail)
}
