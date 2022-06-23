package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"salurin-backend/entity"
	"salurin-backend/formatter"
	"salurin-backend/helper"
	"salurin-backend/services"
)

type transactionHandler struct {
	service services.TransactionService
	payment services.PaymentInteractor
}

func NewTransactionHandler(service services.TransactionService, payment services.PaymentInteractor) *transactionHandler {
	return &transactionHandler{service, payment}
}

func (t *transactionHandler) CreateTransaction(c *gin.Context) {
	var request entity.TransactionRequest
	err := c.ShouldBindJSON(&request)
	if err != nil {

		response := helper.APIResponse("Failed to transaction", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	currentUser := c.MustGet("currentUser").(entity.User)
	request.User = currentUser
	newTransaction, err := t.service.CreateTransaction(request)
	if err != nil {

		response := helper.APIResponse("Failed to transaction", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	response := helper.APIResponse("Detail of transaction", http.StatusOK, "success", formatter.FormatterTransaction(newTransaction))
	c.JSON(http.StatusOK, response)
}
func (t *transactionHandler) GetNotification(c *gin.Context) {
	var request entity.TransactionNotificationRequest
	err := c.ShouldBindJSON(&request)
	if err != nil {
		response := helper.APIResponse("Failed process notification", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	err = t.payment.ProcessPayment(request)
	if err != nil {
		response := helper.APIResponse("Failed process notification", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	c.JSON(http.StatusOK, request)
}
