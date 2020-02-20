const getPosters = (req, res) => {
    const db = req.app.get('db')
    db.movies.getPoster()
        .then(posters => {
            res.status(200).json(posters)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json('There is an error')
        })
}

const addPoster = (req, res) => {
    const db = req.app.get('db')
    const {movie_title, movie_poster} = req.body;
    db.movies.addPoster([movie_title, movie_poster])
        .then(poster => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("Wasn't able to add poster")
        })
}

module.exports = {
    getPosters,
    addPoster
}