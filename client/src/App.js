import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import LessonShow from './LessonShow'
import LessonForm from './LessonForm'
import NotFound from './NotFound'
import { getLessons} from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getLessons()
 }
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/lessons/new" component={LessonForm} />
        <Route path="/lessons/:id" component={LessonShow} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  }
}

export default connect(null, {getLessons})(App)
