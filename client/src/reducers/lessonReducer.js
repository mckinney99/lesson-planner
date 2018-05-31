function lessonReducer(state = { lessons: []}, action) {
  switch (action.type) {

    case "REMOVE_LESSON":
      return Object.assign({}, state, {myLessons: state.myLessons.filter((lesson) => lesson.id !== action.payload)})

    case "FETCHED_LESSONS":
      return Object.assign({}, state, {myLessons: action.payload, isFetching: false} )

    case "FETCHING_LESSONS":
      return Object.assign({}, state, { isFetching: true})

    default:
      return state
  }
}


export default lessonReducer
