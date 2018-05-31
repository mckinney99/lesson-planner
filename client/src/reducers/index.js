import { combineReducers } from 'redux';
import lessonReducer  from './lessonReducer';
import { connect } from 'react-redux'

export default combineReducers({
  lessons: lessonReducer
});
