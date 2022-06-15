package main

import (
	"salurin-backend/db"
	"salurin-backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	db, err := db.Run()
	if err != nil {
		panic(err)
	}
	router := gin.Default()
	api := router.Group("/api")
	routes.APIRoute(api, db)
	router.Run()

}
