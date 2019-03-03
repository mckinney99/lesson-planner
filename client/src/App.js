import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import LessonShow from './containers/LessonShow'
import LessonForm from './LessonForm'
import SciencePage from './SciencePage'
import MathPage from './MathPage'
import ArtPage from './ArtPage'
import HistoryPage from './HistoryPage'
import EnglishPage from './EnglishPage'
import MusicPage from './MusicPage'
import SubjectPage from './SubjectPage'
import Navbar from './Navbar'
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
          <Route path="/lessons/new" component={LessonForm} />
          <Route path="/lessons/:subject" component={SubjectPage} />
          {/* <Route path="/lessons/science" component={SciencePage} />
          <Route path="/lessons/math" component={MathPage} />
          <Route path="/lessons/art" component={ArtPage} />
          <Route path="/lessons/history" component={HistoryPage} />
          <Route path="/lessons/english" component={EnglishPage} />
          <Route path="/lessons/music" component={MusicPage} /> */}

          <Route path="/lessons/:id" component={LessonShow} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  }
}

export default connect(null, {getLessons})(App)
