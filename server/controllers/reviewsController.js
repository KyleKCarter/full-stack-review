const getReviews = (req, res) => {
    const db = req.app.get('db')
    db.reviews.getReviews().then(reviews => {
        res.status(200).json(reviews)
    })
}

const postReview = (req, res) => {
    const db = req.app.get('db')
    const {movie_title, review, rating} = req.body
    const id = req.session.user.id
    db.reviews.postReview([id, movie_title, rating, review])
        .then(post => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json("internal server error")
        })
}

const editReview = (req, res) => {
    const db = req.app.get('db')
    const {review, rating} = req.body;
    const {id} = req.params;
    db.reviews.editReview([id, review, rating])
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.log(error)
            res.status(500).json("Don't forget to PUSH your .env")
        })
}

const deleteReview = (req, res) => {
    const db = req.app.get('db')
    const review_id = req.params.id;
    db.reviews.deleteReview(review_id)
        .then(deleted => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.status(409).json("you've deleted spaghetti...GET TO DA CHOPPA")
        })
}

module.exports = {
    getReviews,
    postReview,
    editReview,
    deleteReview
}