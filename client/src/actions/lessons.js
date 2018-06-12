export function addLesson(lesson) {
  return {
    type:'ADD_LESSON',
    lesson
  }
}

export function lessonHasErrored(bool) {
  return {
    type: 'LESSON_HAS_ERRORED',
    hasErrored: bool
  }
}

export function lessonsIsLoading(bool) {
  return {
    type: 'LESSON_IS_LOADING',
    isLoading: bool
  }
}

export function lessonsFetchDataSuccess(lessons) {
  return {
    type: 'LESSONS_FETCH_DATA_SUCCESS',
    lessons
  }
}

export function lessonsAddDataSuccess(lessons) {
  return {
    type: 'LESSONS_ADD_DATA_SUCCESS',
    lessons
  }
}

export function lessonsFetchData(url) {
  return dispatch => {
    dispatch(lessonsIsLoading(true))
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        dispatch(lessonsIsLoading(false))
        return resp
      })
      .then(resp => resp.json())
      .then(lessons => dispatch(lessonsFetchDataSuccess(lessons)))
      .catch(() => dispatch(lessonHasErrored(true)))
  }
}

export function lessonsAddData(data) {
  return dispatch => {
    dispatch(lessonsIsLoading(true))
    fetch(`http://localhost:3001/api/lessons`, {method: "post", body: JSON.stringify({'lesson': data})})
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        // dispatch(lessonsIsLoading(false))
        return resp
      })
      .then(resp => resp.json())
      .then(lessons => dispatch(lessonsFetchDataSuccess(lessons)))
      .catch(() => dispatch(lessonHasErrored(true)))
  }
}
