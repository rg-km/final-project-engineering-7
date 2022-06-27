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
func UserFormater(user entity.User, token string) entity.RegisterResponse {
	formater := entity.RegisterResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
		Token: token,
	}
	return formater
}

func FormatterUserFetc(user entity.User, token string) entity.FetchUserResponse {
	formater := entity.FetchUserResponse{
		ID:     user.ID,
		Name:   user.Name,
		Email:  user.Email,
		Token:  token,
		Avatar: user.Avatar,
	}
	return formater
}
