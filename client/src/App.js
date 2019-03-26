import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import LessonShow from './containers/LessonShow'
import LessonForm from './containers/LessonForm'
import SubjectPage from './containers/SubjectPage'
import Lessons from './containers/Lessons'
import Navbar from './components/Navbar'
import GradePage from './containers/GradePage'
import TeacherPage from './containers/TeacherPage'
import NotFound from './components/NotFound'
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

          <Route path='/subjects/:subject' component={SubjectPage} />
          <Route path='/lessons/:id' component={LessonShow} />

          <Route path='/lessons' component={Lessons} />
          <Route path='/teachers/:teacher' component={TeacherPage} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  }
}

export default connect(null, {getLessons})(App)
