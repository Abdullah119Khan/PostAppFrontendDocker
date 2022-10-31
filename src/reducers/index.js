import { combineReducers } from 'redux'
import auth from './auth';
import posts from './post'

const rootReducer = combineReducers({ posts, auth })

export default rootReducer;