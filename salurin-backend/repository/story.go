package repository

import (
	"database/sql"
	"salurin-backend/entity"
)

type StoryRepository interface {
	FindAll() ([]entity.Story, error)
	Save(story entity.Story) (entity.Story, error)
	FindByID(id int) (entity.Story, error)
	Update(stori entity.Story) (entity.Story, error)
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
	JOIN users u ON s.user_id = u.id`

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
	defer rows.Close()
	return storyes, nil
}
func (r *storyRepository) Save(stori entity.Story) (entity.Story, error) {
	sqlSmt := `INSERT INTO stories(user_id,description,created_at,updated_at) VALUES(?,?,?,?)`
	row, err := r.db.Exec(sqlSmt, stori.UserID, stori.Description, stori.CreatedAt, stori.UpdatedAt)
	if err != nil {
		return stori, err
	}
	id, err := row.LastInsertId()
	if err != nil {
		return stori, err
	}
	stori.ID = int(id)

	return stori, nil
}

func (r *storyRepository) FindByID(id int) (entity.Story, error) {
	sqlSmt := `SELECT id,user_id,description FROM stories WHERE id = ?`
	var model entity.Story
	rows, err := r.db.Query(sqlSmt, id)
	if err != nil {
		return model, err
	}
	if rows.Next() {
		err := rows.Scan(&model.ID, &model.UserID, &model.Description)
		if err != nil {
			return model, err
		}
	}
	defer rows.Close()
	return model, nil
}

func (r *storyRepository) Update(stori entity.Story) (entity.Story, error) {
	sqlSmt := `UPDATE stories SET description=?,updated_at=? WHERE id = ?`
	_, err := r.db.Exec(sqlSmt, stori.Description, stori.UpdatedAt, stori.ID)
	if err != nil {
		return stori, err
	}
	return stori, nil
}
