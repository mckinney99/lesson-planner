import { combineReducers } from 'redux'
import { lessons, lessonsHasErrored } from './lessonReducer'

export default combineReducers({
  lessons,
  lessonsHasErrored 
})
