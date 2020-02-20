CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(51) NOT NULL,
    profile_img VARCHAR(255)
)

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    movie_title VARCHAR(100) NOT NULL,
    rating INT NOT NULL,
    review TEXT NOT NULL
)

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    movie_title VARCHAR(100) REFERENCES reviews(movie_title),
    movie_poster TEXT
)

DELETE FROM users
WHERE user_id = $1