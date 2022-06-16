package helper

import "github.com/go-playground/validator/v10"

type Response struct {
	Meta Meta        `json:"meta"`
	Data interface{} `json:"data"`
}
type Meta struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
	Status  string `json:"status"`
}

func ResponseHandler(message string, code int, status string, data interface{}) Response {
	meta := Meta{
		Message: message,
		Code:    code,
		Status:  status,
	}
	res := Response{
		Meta: meta,
		Data: data,
	}
	return res
}
func FormatValidationError(err error) []string {
	var errors []string
	for _, v := range err.(validator.ValidationErrors) {
		errors = append(errors, v.Error())
	}
	return errors
}
