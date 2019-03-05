import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import LessonShow from './containers/LessonShow'
import LessonForm from './LessonForm'
import SubjectPage from './SubjectPage'
import Lessons from './Lessons'
import Navbar from './Navbar'
import GradePage from './GradePage'
import NotFound from './NotFound'
import { getLessons} from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getLessons()
 }
  render () {
    return <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/grades/:grade' component={GradePage} />
          <Route path='/lessons/new' component={LessonForm} />
          <Route path='/lessons/:subject' component={SubjectPage} />
          <Route path='/lessons/:id' component={LessonShow} />
          <Route path='/lessons' component={Lessons} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  }
}

export default connect(null, {getLessons})(App)
