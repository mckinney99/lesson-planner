import React, { Component } from 'react';
import {connect} from 'react-redux';
import { lessonsAddData } from '../actions/lessons';
import {lesson} from './Lesson';

class LessonForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_LESSON',
      addlesson: this.state,
    });
    this.setState({
      name: '',
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleSubmit(event)}>
                  <div className="form-group" >
                    <label htmlFor="content" className="col-md-4 control-label">Title</label>
                    <div className="col-md-5">
                      <input
                        required type="text"
                        value={this.state.text}
                        onChange={(event) => this.handleChange(event)} />
                    </div>
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="description" className="col-md-4 control-label">Description</label>
                    <div className="col-md-5">
                      <input
												required rows="5" onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="body" className="col-md-4 control-label">Body</label>
                    <div className="col-md-5">
                      <textarea
												required rows="5" onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="source" className="col-md-4 control-label">Source</label>
                    <div className="col-md-5">
                      <input
												required rows="5" onChange={this.handleInputChange}
                      />
                    </div>
                  </div> */}

                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { lessonsAddData })(LessonForm);
