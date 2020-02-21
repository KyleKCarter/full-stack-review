import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateState, postReview, getReviews, findMovie, resetFields, addPoster} from '../redux/reducers/reviewsReducer'
import NavBar from './navBar'
import {Link} from 'react-router-dom'

class Reviews extends Component {

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    handleClick = () => {
        this.props.postReview(this.props.movie_title, this.props.rating, this.props.review)
            .then(() => {
                this.props.addPoster(this.props.movie_title, this.props.poster)
                    .then(() => {
                        this.props.getReviews()
                            .then(() => {
                                this.props.resetFields()
                            })
                    })
            })
    }

    findMovie = () => {
        this.props.findMovie(this.props.movie_title)
    }

    render() {
        return (
            <div>
                <header>
                    <NavBar />
                    <h1>Post Review</h1>
                </header>
                <main>
                    <p>Movie Title</p>
                    <section>
                        <img src={this.props.poster} alt={this.props.movie_title}/>
                        <input type="text" name='movie_title' onChange={this.handleChange}/>
                        <button onClick={this.findMovie}>Find Movie</button>
                    </section>
                    <p>Rating</p>
                    <input type="number" name="rating" onChange={this.handleChange}/>
                    <p>Review:</p>
                    <textarea name="review" cols="30" rows="10" onChange={this.handleChange}></textarea>
                    <Link to='/home'><button onClick={this.handleClick}>Post Review</button></Link>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movie_title: state.reviewsReducer.movie_title,
        rating: state.reviewsReducer.rating,
        review: state.reviewsReducer.review,
        poster: state.reviewsReducer.poster
    }
}


export default connect(mapStateToProps, {
    updateState,
    postReview,
    getReviews,
    findMovie,
    resetFields,
    addPoster
})(Reviews);