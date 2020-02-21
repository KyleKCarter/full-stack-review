SELECT r.*, m.movie_poster, u.username
FROM reviews AS r
JOIN movies AS m
ON r.movie_title = m.movie_title
JOIN users as u
ON r.user_id = u.user_id