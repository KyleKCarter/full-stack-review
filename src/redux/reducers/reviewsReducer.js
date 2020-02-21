import axios from 'axios'
require('dotenv').config()

const initialState = {
    rating: 0,
    review: '',
    movie_title: '',
    poster: '',
    reviews: [],
    loading: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const FIND_MOVIE = 'FIND_MOVIE';
const RESET_FIELDS = 'RESET_FIELDS';
const GET_REVIEWS = 'GET_REVIEWS';
const POST_REVIEWS = 'POST_REVIEWS';
const EDIT_REVIEWS = 'EDIT_REVIEWS';
const DELETE_REVIEWS = 'DELETE_REVIEWS';
const ADD_POSTER = 'ADD_POSTER';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const resetFields = () => {
    return {
        type: RESET_FIELDS
    }
}

export const findMovie = (movie_title) => {
    return {
        type: FIND_MOVIE,
        payload: axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${movie_title}`)
    }
}

export const addPoster = (movie_title, poster) => {
    return {
        type: ADD_POSTER,
        payload: axios.post('/api/poster', {
            movie_title: movie_title,
            movie_poster: poster
        })
    }
}

export const getReviews = () => {
    return {
        type: GET_REVIEWS,
        payload: axios.get('/api/reviews')
    }
}

export const postReview = (movie_title, review, rating) => {
    return {
        type: POST_REVIEWS,
        payload: axios.post('/api/reviews', {
            movie_title: movie_title,
            review: review,
            rating: rating
        })
    }
}

export default function reviewsReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_STATE: 
            return {
                ...state,
                ...payload
            }
        case RESET_FIELDS:
            return {
                ...state
            }
        case `${GET_REVIEWS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_REVIEWS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                reviews: payload.data
            }
        case `${POST_REVIEWS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${POST_REVIEWS}_FULFILLED`:
            return {
                ...state,
                loading: false
            }
        case `${FIND_MOVIE}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${FIND_MOVIE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                poster: payload.data.Poster
            }
        case `${ADD_POSTER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${ADD_POSTER}_FULFILLED`:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}