import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
    this.getLessons = this.getLessons.bind(this)
    this.getLesson = this.getLesson.bind(this)
  }

  componentDidMount () {
    this.getLessons()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getLessons () {
    this.fetch('/api/lessons')
      .then(lessons => {
        if (lessons.length) {
          this.setState({lessons: lessons})
          this.getLesson(lessons[0].id)
        } else {
          this.setState({lessons: []})
        }
      })
  }

  getLesson (id) {
    this.fetch(`/api/lessons/${id}`)
      .then(lesson => this.setState({lesson: lesson}))
  }

  render () {
    let {lessons, lesson} = this.state
    return lessons
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            List of Ingredients
          </Header.Content>
        </Header>
        <Divider hidden section />
        {lessons && lessons.length
          ? <Button.Group color='teal' fluid widths={lessons.length}>
            {Object.keys(lessons).map((key) => {
              return <Button active={lesson && lesson.id === lessons[key].id} fluid key={key} onClick={() => this.getLesson(lessons[key].id)}>
                {lessons[key].title}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No lessons found.</Container>
        }
        <Divider section />
        {lesson &&
          <Container>
            <Header as='h2'>{lesson.title}</Header>
            {lesson.description && <p>{lesson.description}</p>}
            {lesson.ingredients &&
              <Segment.Group>
                {lesson.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
              </Segment.Group>
            }
            {lesson.steps && <p>{lesson.steps}</p>}
            {lesson.source && <Button basic size='tiny' color='teal' href={lesson.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default Home
