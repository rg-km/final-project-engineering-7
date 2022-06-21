package main

import (
	"github.com/gin-contrib/cors"
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
	router.Use(cors.Default())
	api := router.Group("/api")
	handler.APIRoute(api, db)
	router.Run()

}
