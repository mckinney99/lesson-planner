import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  lessons: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'GET_LESSONS':
      return {...state, lessons: action.payload}
    case 'DELETE_LESSON':
      return {...state, lessons: state.lessons.filter(lesson => lesson.id !== action.payload.id)}
    default:
      return state
  }
}


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
