package api

import (
	"database/sql"
	"salurin-backend/config"
	"salurin-backend/handler"
	"salurin-backend/middleware"
	"salurin-backend/repository"
	"salurin-backend/services"

	"github.com/gin-gonic/gin"
)

func APIRoute(api *gin.RouterGroup, db *sql.DB) {
	//repository
	userRepository := repository.NewUserRepository(db)
	campaignRepository := repository.NewCampaignRepository(db)
	storyRepository := repository.NewStoryRepository(db)
	transactionRepository := repository.NewTransactionRepository(db)

	//service
	userService := services.NewUserService(userRepository)
	authService := config.NewAuthService()
	campaignService := services.NewCampaignService(campaignRepository)
	storyService := services.NewStoryService(storyRepository)
	paymentService := services.NewPaymentService(transactionRepository, campaignRepository)
	transactionService := services.NewTransactionService(transactionRepository, paymentService)

	//handler
	userHandler := handler.NewUserHandler(userService, authService)
	campaignHandler := handler.NewCampaignHandler(campaignService)
	storyHandler := handler.NewStoryHandler(storyService)
	transactionHandler := handler.NewTransactionHandler(transactionService, paymentService)
	//routes

	//users
	api.POST("/login", userHandler.Login)
	api.POST("/register", userHandler.RegisterUser)
	api.POST("/email-check", userHandler.CheckEmailAvailable)
	api.POST("/avatar", middleware.APIAuthMiddleware(authService, userService), userHandler.UploadAvatar)
	//campaign
	api.GET("/campaigns/:id", campaignHandler.GetCampaignDetail)
	api.GET("/campaigns", campaignHandler.GetCampaigns)

	api.POST("/campaigns", middleware.APIAuthMiddleware(authService, userService), campaignHandler.CreateCampaign)
	api.PATCH("/campaigns/:id", middleware.APIAuthMiddleware(authService, userService), campaignHandler.EditCampaign)
	api.POST("/campaign-images", middleware.APIAuthMiddleware(authService, userService), campaignHandler.UploadImage)

	//story
	api.GET("/storyes", storyHandler.GetAllStoryes)
	api.POST("/storyes", middleware.APIAuthMiddleware(authService, userService), storyHandler.CreateAStory)
	api.PATCH("/storyes/:id", middleware.APIAuthMiddleware(authService, userService), storyHandler.UpdateAStory)
	api.GET("/storyes/:id", storyHandler.GetStory)
	//transaction
	api.POST("/transaction", middleware.APIAuthMiddleware(authService, userService), transactionHandler.CreateTransaction)
	api.POST("/transaction/notification", transactionHandler.GetNotification)
	api.PATCH("/transaction/:id", middleware.APIAuthMiddleware(authService, userService), transactionHandler.CreateTransaction)
}
