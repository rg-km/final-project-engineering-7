package repository

import (
	"database/sql"
	"salurin-backend/entity"
)

type StoryRepository interface {
	FindAll() ([]entity.Story, error)
}
type storyRepository struct {
	db *sql.DB
}

func NewStoryRepository(db *sql.DB) *storyRepository {
	return &storyRepository{db}
}

func (r *storyRepository) FindAll() ([]entity.Story, error) {
	sqlSmt := `SELECT s.user_id,s.description, u.name, u.avatar 
	FROM stories s 
	JOIN users u ON s.user_id = s.id`

	var storyes []entity.Story
	rows, err := r.db.Query(sqlSmt)
	if err != nil {
		return storyes, err
	}
	for rows.Next() {
		var story entity.Story
		err := rows.Scan(&story.UserID, &story.Description, &story.User.Name, &story.User.Avatar)
		if err != nil {
			return storyes, err
		}
		storyes = append(storyes, story)
	}
	return storyes, nil
}
