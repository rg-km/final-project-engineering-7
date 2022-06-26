package repository

import (
	"database/sql"
	"salurin-backend/entity"
)

type TransactionRepository interface {
	Save(transaction entity.Trasaction) (entity.Trasaction, error)
	Update(form entity.Trasaction) (entity.Trasaction, error)
	FindByID(id int) (entity.Trasaction, error)
}

type transactionRepository struct {
	db *sql.DB
}

func NewTransactionRepository(db *sql.DB) *transactionRepository {
	return &transactionRepository{db}
}

func (r *transactionRepository) Save(transaction entity.Trasaction) (entity.Trasaction, error) {
	sqlStmt := `INSERT INTO transactions(user_id,campaign_id,amount,status,payment_url) VALUES (?,?,?,?,?) `
	rows, err := r.db.Exec(sqlStmt, transaction.User.ID, transaction.Campaign.ID, transaction.Amount, transaction.Status, transaction.PaymentURl)
	if err != nil {
		return transaction, err
	}
	id, err := rows.LastInsertId()
	if err != nil {
		return transaction, err
	}
	transaction.ID = int(id)
	return transaction, nil
}
func (r *transactionRepository) Update(form entity.Trasaction) (entity.Trasaction, error) {
	sqlStmt := `UPDATE transactions SET amount=?, status=?, payment_url=? WHERE id=?`
	_, err := r.db.Exec(sqlStmt, form.Amount, form.Status, form.PaymentURl, form.ID)
	if err != nil {
		return form, err
	}
	return form, nil
}
func (r *transactionRepository) FindByID(id int) (entity.Trasaction, error) {
	sqlStmt := `SELECT t.id,t.user_id,t.campaign_id,t.amount,t.status,t.payment_url
    FROM transaction t 
	WHERE t.user_id =?
    `

	var model entity.Trasaction

	rows, err := r.db.Query(sqlStmt, id)
	if err != nil {
		return model, err
	}
	if rows.Next() {
		err := rows.Scan(&model.ID, &model.Amount, &model.Status, &model.UserID, &model.CampaignID, &model.PaymentURl)
		if err != nil {
			return model, err
		}
		defer rows.Close()
	}
	return model, nil
}
