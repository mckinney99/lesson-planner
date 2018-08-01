import React, { Component } from 'react';
import {connect} from 'react-redux';
import { lessonsAddData } from '../actions/lessons';

// export class LessonForm extends Component {
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const title = this.getTitle.value;
//     const body =  this.getBody.value;
//     const description = this.getDescription.value;
//
//     const lesson = {
//         title,
//         body
//     }
//     this.props.lessonsAddData(lesson)
//     this.getTitle.value = '';
//     this.getDescription.value = '';
//     this.getBody.value = '';
//     this.getSource.value = '';
//   }

export class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      source: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="form-group" >
                    <label htmlFor="content" className="col-md-4 control-label">Title</label>
                    <div className="col-md-5">
                      <input
                        required type="text" onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
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
                  </div>

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
