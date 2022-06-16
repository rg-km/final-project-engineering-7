package api

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"salurin-backend/handler"
	"salurin-backend/repository"
	"salurin-backend/services"
)

func APIRoute(api *gin.RouterGroup, db *gorm.DB) {
	//repository
	userRepository := repository.NewUserRepository(db)

	//service
	userService := services.NewUserService(userRepository)

	//handler
	userHandler := handler.NewUserHandler(userService)

	//routes
	api.POST("/login", userHandler.Login)
}
