package formatter

import "salurin-backend/entity"

func FormaterStory(story entity.Story) entity.StoryResponse {

	formatter := entity.StoryResponse{
		Description: story.Description,
		Username:    story.User.Name,
	}
	formatter.Avatar = ""

	if len(story.User.Avatar) != 0 {
		formatter.Avatar = story.User.Avatar
	}
	return formatter
}

func FormatterStoryes(storyes []entity.Story) []entity.StoryResponse {
	storyesFormatter := []entity.StoryResponse{}

	for _, v := range storyes {
		storyFormatter := FormaterStory(v)
		storyesFormatter = append(storyesFormatter, storyFormatter)
	}
	return storyesFormatter
}

func FormatterCreateStory(story entity.Story) entity.StoryCreateResponse {
	return entity.StoryCreateResponse{
		ID:          story.ID,
		Description: story.Description,
		UserID:      story.UserID,
		CreatedAt:   story.CreatedAt,
	}
}

func FormatterUpdateStory(story entity.Story) entity.StoryUodateResponse {
	return entity.StoryUodateResponse{
		ID:          story.ID,
		Description: story.Description,
		UserID:      story.UserID,
		UpdatedAt:   story.UpdatedAt,
	}
}
