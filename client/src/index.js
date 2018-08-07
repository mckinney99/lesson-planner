import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import createStore from './store.js';

// import combineReducers from '../reducers/index';
import lessons from './reducers/lessonReducer';

let store = createStore();

export function render(){
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
  registerServiceWorker();
}

store.dispatch({type: '@@INIT'})
