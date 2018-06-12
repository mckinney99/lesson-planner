import React from 'react';

const LessonCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="lesson-card">
          {<p>{props.lesson.title}</p>}
          {<footer><cite title="Body">{props.lesson.body}</cite></footer>}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={()=>props.upvoteLesson(props.lesson.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={()=>props.downvoteLesson(props.lesson.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={()=>props.removeLesson(props.lesson.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {<div>Votes: {props.lesson.votes}</div>}
      </div>
    </div>
  </div>;

export default LessonCard;
