package repository

import (
	"database/sql"
	"salurin-backend/entity"
)

type TransactionRepository interface {
	Save(form entity.Trasaction) (entity.Trasaction, error)
	Update(form entity.Trasaction) (entity.Trasaction, error)
	FindByID(id int) (entity.Trasaction, error)
}

type transactionRepository struct {
	db *sql.DB
}

func NewTransactionRepository(db *sql.DB) *transactionRepository {
	return &transactionRepository{db}
}

func (r *transactionRepository) Save(form entity.Trasaction) (entity.Trasaction, error) {
	return entity.Trasaction{}, nil
}
func (r *transactionRepository) Update(form entity.Trasaction) (entity.Trasaction, error) {
	return entity.Trasaction{}, nil
}
func (r *transactionRepository) FindByID(id int) (entity.Trasaction, error) {
	return entity.Trasaction{}, nil
}
