import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from './reducers/authReducer'
import reviewsReducer from './reducers/reviewsReducer'

const combineReducer = combineReducers({
    authReducer,
    reviewsReducer
})

export default createStore(combineReducer, applyMiddleware(promise))