import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import {combineReducers, createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
