const apiLink = "http://localhost:3001";

export const getLessons = () => dispatch => {
  //fetch from the rails server
  fetch(apiLink + '/api/lessons')
    .then(res => res.json())
    .then(lessonsArrayFromServer => {
      //console.log(lessonsArrayFromServer)
      dispatch({type: 'GET_LESSONS', payload: lessonsArrayFromServer})
    })

  //when data is received, dispatch a new type to the reducer to update the redux store
}

export const createLesson = (lesson) => dispatch => {
  fetch('http://localhost:3001/api/lessons',{
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: lesson
  }).then(this.handleErrors)
  .then(response => response.json())
  .then(newLessonFromServer => {
    dispatch({type: 'CREATE_LESSON', payload: newLessonFromServer})
  })
}

export const deleteLesson = (id) => dispatch => {
  fetch(`http://localhost:3001/api/lessons/${id}`, {
    method: 'DELETE'
  }).then(this.handleErrors)
  .then(response => response.json())
  .then(lesson => {
    dispatch({type: 'DELETE_LESSON', payload: lesson})
    console.log(lesson)
  })
}
