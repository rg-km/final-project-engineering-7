package formatter

import "salurin-backend/entity"

func LoginFormatter(user entity.User, token string) entity.LoginResponse {
	return entity.LoginResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
		Token: token,
	}
}
