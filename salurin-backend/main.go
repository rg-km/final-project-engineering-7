package main

import (
	"salurin-backend/config"
	"salurin-backend/db"
	handler "salurin-backend/routes/api"

	"github.com/gin-gonic/gin"
)

func main() {
	db, err := db.Run()
	if err != nil {
		panic(err)
	}
	router := gin.Default()
	router.Use(config.NewCORS())

	router.Static("/images", "assets/images")
	api := router.Group("/api")
	handler.APIRoute(api, db)
	router.Run()

}
