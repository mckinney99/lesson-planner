import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lessonTitle: '',
      lessonDescription: '',
      lessonBody: '',
      lessonSource: ''
    }
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

  handleOnLessonTitleChange(i){
    console.log(i.target.value)
    this.setState({
      lessonTitle: i.target.value
    })
  }

  handleOnLessonDescriptionChange(i){
    console.log(i.target.value)
    this.setState({
      lessonDescription: i.target.value
    })
  }

  handleOnLessonBodyChange(i){
    console.log(i.target.value)
    this.setState({
      lessonBody: i.target.value
    })
  }

  handleOnLessonSourceChange(i){
    console.log(i.target.value)
    this.setState({
      lessonSource: i.target.value
    })
  }

  handleLessonSubmit(){
    const lesson = JSON.stringify({lesson: { title: this.state.lessonTitle, description: this.state.lessonDescription, body: this.state.lessonBody, source: this.state.lessonSource}})
    fetch('http://localhost:3001/api/lessons',{
      method: 'POST',
      headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
      },
      body: lesson
    }).then(this.handleErrors)
    .then(response => response.json())
    .catch(error => this.setState({
      error:true
    })}




  render () {
    let {lessons, lesson} = this.state
    return lessons
      ?
      <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            List of Lessons
          </Header.Content>
        </Header>

        <Divider section />
        {lesson &&
          <Container>
            <Header as='h2'>{lesson.title}</Header>
            {lesson.description && <p>{lesson.description}</p>}
            {lesson.source && <Button basic size='tiny' color='teal' href={lesson.source}>Source</Button>}
          </Container>}

          <form className='new-lesson-form'>
            <div className='form-group'>
              <input type='text' placeholder='Lesson Name' ref='lesson-title' onChange={(i)=> this.handleOnLessonTitleChange(i)} value={this.state.lessonTitle}></input>
            </div>
            <div className='form-group'>
              <input type='text' placeholder='Lesson Description' onChange={(i)=> this.handleOnLessonDescriptionChange(i)} value={this.state.lessonDescription}></input>
            </div>
            <div className='form-group'>
              <input type='text' placeholder='Lesson Body' onChange={(i)=> this.handleOnLessonBodyChange(i)} value={this.state.lessonBody}></input>
            </div>
            <div className='form-group'>
              <input type='text' placeholder='Lesson Source' onChange={(i)=> this.handleOnLessonSourceChange(i)} value={this.state.lessonSource}></input>
            </div>
            <div className='button' onClick={()=> this.handleLessonSubmit()}>
              <Button basic size='tiny' color='black'>Submit</Button>
            </div>
          </form>

      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default Home
