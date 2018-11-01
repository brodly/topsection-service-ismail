import React, { Component } from 'react';
import CourseHeader from './CourseHeader.js';

class CoursePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <CourseHeader courseData={this.props.courseData}/>
      </div>
    );
  }
}
