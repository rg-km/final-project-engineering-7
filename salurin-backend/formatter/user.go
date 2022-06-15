package formatter

import "salurin-backend/entity"

func UserFormater(user entity.User, token string) entity.RegisterResponse {
	formater := entity.RegisterResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
		Token: token,
	}
	return formater
}
