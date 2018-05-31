import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import '../index.css';
import '../App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard';
import MyLesson from '../components/MyLesson';
import MyLessons from '../components/MyLessons';
import MySchedule from '../components/MySchedule';
import Navbar from '../components/layout/Navbar';
import NotFound from '../components/NotFound';
import Login from '../components/users/login';
import Signup from '../components/users/signup';

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route exact path="/mylessons" component={MyLessons}/>
          <Route exact path="/mylessons/:lessonId" component={MyLesson}/>
          <Route exact path="/myschedule" component={MySchedule}/>
          <Route path="*" component={NotFound}/>
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
