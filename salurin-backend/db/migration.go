package db

import (
	"fmt"
	"log"
	"salurin-backend/entity"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

//entity Users
type Model struct {
	Model interface{}
}

type database struct {
	DB *gorm.DB
}

func RegisterModels() []Model {
	return []Model{
		{Model: entity.User{}},
		// {Model: entity.Campaign{}},
		// {Model: entity.CampaignImage{}},
		// {Model: entity.Trasaction{}},
		// {Model: entity.Story{}},
	}
}

func (d *database) initializeDB() {

	_, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		panic("Failed on connecting to the database server")
	}

	for _, model := range RegisterModels() {
		err = d.DB.Debug().AutoMigrate(model.Model)

		if err != nil {
			fmt.Println("error migration")
			log.Fatal(err)
		}
	}

	fmt.Println("Database migrated successfully.")
}
func Run() {

	var db database
	db.initializeDB()
}
