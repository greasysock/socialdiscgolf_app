import {combineReducers} from 'redux'
import CoursesReducer from './CoursesReducer'
import CurrentUserReducer from './CurrentUserReducer'

export default combineReducers({
    courses: CoursesReducer,
    currentUser: CurrentUserReducer
})