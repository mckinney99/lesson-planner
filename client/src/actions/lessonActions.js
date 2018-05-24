import { FETCH_LESSONS, NEW_LESSON } from './types';

export const fetchLessons = () => dispatch => {
  fetch('http://localhost:3001/api/lessons')
    .then(res => res.json())
    .then(lessons => dispatch({
        type: FETCH_LESSONS,
        payload: lessons
      })
    );
};

export const createLesson = lessonData => dispatch => {
  fetch('http://localhost:3001/api/lessons', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(lessonData)
  })
    .then(res => res.json())
    .then(lesson => dispatch({
        type: NEW_LESSON,
        payload: lesson
      })
    );
};
