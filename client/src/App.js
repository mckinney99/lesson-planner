import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';

import Lessons from './components/Lessons';
import LessonForm from './components/Lessonform';
import NotFound from './components/NotFound';

import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Lessons} />
            <Route path='/' exact component={LessonForm} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
    );
  }
}

export default App
