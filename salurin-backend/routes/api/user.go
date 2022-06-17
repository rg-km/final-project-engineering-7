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

	//service
	userService := services.NewUserService(userRepository)
	authService := config.NewAuthService()

	//handler
	userHandler := handler.NewUserHandler(userService, authService)

	//routes
	api.POST("/login", userHandler.Login)
	api.POST("/register", userHandler.RegisterUser)
}
