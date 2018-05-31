import baseURL from '../url'


function fetchingLessons() {
  return {
    type: "FETCHING_LESSONS"
  }
}

export function fetchedLessons(lessons) {
  return {
    type: "FETCHED_LESSONS",
    payload: lessons
  }
}

export function fetchLessons() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_LESSONS_REQUEST' });
    return fetch('http://localhost:3001/api/lessons')
      .then(response => response.json())
      .then(lessons => dispatch({ type: 'NEW_LESSON', lessons }));
  };
}

export function removeLesson(id) {
  return function (dispatch) {
    const body = JSON.stringify(id)
    dispatch(fetchingLessons())
    return fetch(`${baseURL}/mylessons`, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        'body': body
    })
      .then(res => res.json())
        .then((json) => {
          dispatch(fetchedLessons(json))
        })
  }
}
