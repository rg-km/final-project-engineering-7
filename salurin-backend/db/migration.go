package db

import (
	"errors"
	"fmt"
	"log"
	"os"
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
		{Model: entity.Campaign{}},
		{Model: entity.CampaignImage{}},
		{Model: entity.Trasaction{}},
		{Model: entity.Story{}},
	}
}

func (d *database) initializeDB() error {
	var err error
	d.DB, err = gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		fmt.Println("Failed on connecting to the database server")
		return err
	}

	for _, model := range RegisterModels() {
		err = d.DB.Debug().AutoMigrate(model.Model)

		if err != nil {
			fmt.Println("error migration")
			log.Fatal(err)
			return err
		}
	}

	fmt.Println("Database migrated successfully.")
	return nil
}

func (d *database) connectionDB() (*gorm.DB, error) {
	db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		fmt.Println(errors.New("Failed on connecting to the database server"))
		return db, err
	}

	fmt.Println("Connection DB succesfully")
	return db, nil
}
func exists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}
func Run() (*gorm.DB, error) {

	var db database

	isExist, err := exists("./gorm.db")
	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}
	if !isExist {
		err := db.initializeDB()
		if err != nil {
			fmt.Println(err.Error())
		}
	}
	database, err := db.connectionDB()
	if err != nil {
		return database, err
	}
	return database, nil

}
