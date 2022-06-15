package main

import (
	"github.com/gin-gonic/gin"
	"salurin-backend/db"

	handler "salurin-backend/routes/api"
)

func main() {
	db, err := db.Run()
	if err != nil {
		panic(err)
	}
	router := gin.Default()
	api := router.Group("/api")
	handler.APIRoute(api, db)
	router.Run()

}
