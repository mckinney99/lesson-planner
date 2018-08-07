import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { render } from './index.js'

export default function createStore(reducer) {
  let state;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )

  function dispatch(action){
    state = reducer(state, action)
    console.log(`the action is`)
    console.log(action)
    console.log(`the state is`)
    console.log(state)
    render()
  }

  function getState(){
    return state;
  }

  return {dispatch: dispatch, getState: getState}
}
