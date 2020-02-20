CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(51) NOT NULL,
    profile_img VARCHAR(255)
)

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    movie_title VARCHAR(100) NOT NULL,
    movie_poster VARCHAR(255),
    rating INT NOT NULL,
    review TEXT NOT NULL
)