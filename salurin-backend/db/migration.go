package db

import (
	"database/sql"
	"errors"
	"fmt"
	"os"

	_ "github.com/mattn/go-sqlite3"
)

//entity Users
type Model struct {
	Model interface{}
}

type database struct {
	DB *sql.DB
}

func (d *database) initializeDB() error {
	db, err := sql.Open("sqlite3", "/salurin.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
CREATE TABLE IF NOT EXISTS users (
	id integer not null primary key AUTOINCREMENT,
    name varchar(255) not null,
    password_hash varchar(255) not null,
	email varchar(255) not null,
	avatar varchar(255),
    created_at Time.time,
    updated_at Time.time
);
CREATE TABLE IF NOT EXISTS campaigns (
  id integer not null primary key AUTOINCREMENT,
  user_id integer not null,
  title varchar(255) not null,
  target_amount integer not null,
  current_amount integer not null,
  description varchar(255) not null,
  time_start Time.time,
  time_end Time.time,
  created_at Time.time,
  updated_at Time.time  
);
CREATE TABLE IF NOT EXISTS campaign_images (
	id integer not null primary key AUTOINCREMENT,
	image varchar(255),
	campaign_id integer not null,
	created_at Time.time,
	updated_at Time.time  
);
CREATE TABLE IF NOT EXISTS stories (
	id integer not null primary key AUTOINCREMENT,
	description varchar(255),
	user_id integer not null,
	created_at Time.time,
	updated_at Time.time  
);
CREATE TABLE IF NOT EXISTS transactions (
  	  id integer not null primary key AUTOINCREMENT,
  	  amount integer not null,
  	  status boolean not null
);
`)
	if err != nil {
		panic(err)
	}

	fmt.Println("Database migrated successfully.")
	return nil
}

func (d *database) connectionDB() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "./salurin.db")
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
func Run() (*sql.DB, error) {

	var db database

	isExist, err := exists("./salurin.db")
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
