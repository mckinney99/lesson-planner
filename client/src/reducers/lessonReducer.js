export function lessonsHasErrored(state = {
}, action) {
  switch (action.type) {
    case 'LESSONS_HAS_ERRORED':
      return action.hasErrored;
    case 'LESSON_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function lessons(state = {
  lessons: [],
},
  action) {
  switch (action.type) {
    case 'LESSONS_FETCH_DATA_SUCCESS':
      return action.lessons;
    case 'ADD_LESSON':
      return state.concat([action.data])
    default:
      return state;
  }
}
