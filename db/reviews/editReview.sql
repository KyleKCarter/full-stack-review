UPDATE reviews
SET review = $2, rating = $3
WHERE review_id = $1