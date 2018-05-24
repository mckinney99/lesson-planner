import { combineReducers } from 'redux';
import lessonReducer  from './lessonReducer';

export default combineReducers({
  lessons: lessonReducer
});
