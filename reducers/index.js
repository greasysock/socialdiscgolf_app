import {combineReducers} from 'redux'
import CoursesReducer from './CoursesReducer'

export default combineReducers({
    courses: CoursesReducer
})