package repository

import (
	"database/sql"
	"salurin-backend/entity"
)

type TransactionRepository interface {
	Save() (entity.Trasaction, error)
	Update() (entity.Trasaction, error)
}

type transactionRepository struct {
	db *sql.DB
}

func NewTransactionRepository(db *sql.DB) *transactionRepository {
	return &transactionRepository{db}
}
