package repository

import (
	"database/sql"
	"fmt"
	"salurin-backend/entity"
)

type UserRepository interface {
	FindByEmail(email string) (entity.User, error)
	FindByID(id int) (entity.User, error)
	Save(user entity.User) (entity.User, error)
	Update(user entity.User) (entity.User, error)
}

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *userRepository {
	return &userRepository{db}
}

func (r *userRepository) FindByEmail(email string) (entity.User, error) {
	sqlSmt := `SELECT id,name,email,password_hash,avatar FROM users WHERE email = ?`
	fmt.Println(email)
	var model entity.User
	row, err := r.db.Query(sqlSmt, email)
	if err != nil {
		return model, err
	}
	if row.Next() {
		err := row.Scan(&model.ID, &model.Name, &model.Email, &model.PasswordHash, &model.Avatar)
		if err != nil {
			return model, err
		}
	}

	return model, nil
}

func (r *userRepository) Save(user entity.User) (entity.User, error) {
	sqlSmt := `INSERT INTO users(name,email,password_hash,avatar) VALUES(?,?,?,?)`
	row, err := r.db.Exec(sqlSmt, user.Name, user.Email, user.PasswordHash, user.Avatar)
	if err != nil {
		return user, err
	}
	id, err := row.LastInsertId()
	if err != nil {
		return user, err
	}
	user.ID = int(id)

	return user, nil
}
func (r *userRepository) FindByID(id int) (entity.User, error) {
	sqlSmt := `SELECT id,name,email,password_hash,avatar FROM users WHERE id = ?`
	var model entity.User
	rows, err := r.db.Query(sqlSmt, id)
	if err != nil {
		return model, err
	}
	if rows.Next() {
		err := rows.Scan(&model.ID, &model.Name, &model.Email, &model.PasswordHash, &model.Avatar)
		if err != nil {
			return model, err
		}
	}

	return model, nil
}

func (r *userRepository) Update(user entity.User) (entity.User, error) {
	sqlSmt := `UPDATE users SET name=?,email=?,password_hash=?,avatar=? WHERE id = ?`
	_, err := r.db.Exec(sqlSmt, user.Name, user.Email, user.PasswordHash, user.Avatar, user.ID)
	if err != nil {
		return user, err
	}
	return user, nil
}
