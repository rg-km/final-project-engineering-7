package helper

import "github.com/go-playground/validator/v10"

type response struct {
	Meta meta        `json:"meta"`
	Data interface{} `json:"data"`
}
type meta struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
	Status  string `json:"status"`
}

func APIResponse(message string, code int, status string, data interface{}) response {
	meta := meta{
		Message: message,
		Code:    code,
		Status:  status,
	}
	jsonResponse := response{
		Meta: meta,
		Data: data,
	}

	return jsonResponse

}

func FormatValidationError(err error) []string {
	var errors []string
	for _, v := range err.(validator.ValidationErrors) {
		errors = append(errors, v.Error())
	}
	return errors
}
