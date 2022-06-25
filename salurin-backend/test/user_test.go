package test

import (
	"bytes"
	"database/sql"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	handler "salurin-backend/routes/api"
	"strings"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

var _ = Describe("Api", func() {

	Context("Test Data", func() {
		var router *gin.Engine
		BeforeEach(func() {
			db, err := sql.Open("sqlite3", "../salurin.db")
			if err != nil {
				panic(err)
			}
			fmt.Println(db)

			router = gin.Default()
			api := router.Group("/api")
			handler.APIRoute(api, db)
		})

		Describe("/user/login", func() {
			When("the username and password are correct", func() {
				It("should return a successful login response", func() {
					var jsonStr = []byte(`{"email": "user1@test.com", "password": "123user"}`)
					request := httptest.NewRequest(http.MethodPost, "/api/login", bytes.NewBuffer(jsonStr))
					recoder := httptest.NewRecorder()
					router.Handler().ServeHTTP(recoder, request)

					Expect(recoder.Result().StatusCode).To(Equal(http.StatusOK))
					response := recoder.Result()
					body, _ := io.ReadAll(response.Body)
					data := strings.Contains(string(body), "user1test")
					Expect(data).To(Equal(true))
				})
			})
			When("the username and password are incorrect", func() {
				It("should return badrequest", func() {

					var jsonStr = []byte(`{"email": "user1@test.com", "password": "123user1"}`)
					request := httptest.NewRequest(http.MethodPost, "/api/login", bytes.NewBuffer(jsonStr))
					recoder := httptest.NewRecorder()
					router.Handler().ServeHTTP(recoder, request)

					Expect(recoder.Result().StatusCode).To(Equal(http.StatusBadRequest))
					response := recoder.Result()
					body, _ := io.ReadAll(response.Body)
					data := strings.Contains(string(body), "user1test")
					Expect(data).To(Equal(false))

				})
			})
		})
		Describe("/user/register", func() {
			When("the username email and password correct validation", func() {
				It("should return a successful login response", func() {
					var jsonStr = []byte(`{"email": "user7@test.com", "password": "123user","name":"user7test"}`)
					request := httptest.NewRequest(http.MethodPost, "/api/register", bytes.NewBuffer(jsonStr))
					recoder := httptest.NewRecorder()
					router.Handler().ServeHTTP(recoder, request)

					Expect(recoder.Result().StatusCode).To(Equal(http.StatusOK))
					response := recoder.Result()
					body, _ := io.ReadAll(response.Body)
					data := strings.Contains(string(body), "user7test")
					Expect(data).To(Equal(true))
				})
			})
			When("the username and email validation email", func() {
				It("should return email is not available", func() {
					var jsonStr = []byte(`{"email": "user1@test.com"}`)
					request := httptest.NewRequest(http.MethodPost, "/api/email-check", bytes.NewBuffer(jsonStr))
					recoder := httptest.NewRecorder()
					router.Handler().ServeHTTP(recoder, request)

					Expect(recoder.Result().StatusCode).To(Equal(http.StatusOK))
					response := recoder.Result()
					body, _ := io.ReadAll(response.Body)
					data := strings.Contains(string(body), "user1test")
					Expect(data).To(Equal(false))
				})
			})
		})
	})
})
