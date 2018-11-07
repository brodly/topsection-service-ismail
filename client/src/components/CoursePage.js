import React, { Component } from 'react';
import CourseHeader from './CourseHeader.js';

class CoursePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      course: {}
    };
  }

  componentDidMount(){
    const courseId = Math.floor(Math.random() * 20000);
    fetch(`/course/${courseId}`)
    .then((raw) => raw.json())
    .then((course) => {
      console.log('course', course);
      this.setState({ course });
    });
  }

  render() {
    return (
      <div>
        <CourseHeader courseData={this.props.courseData}/>
      </div>
    );
  }
}

export default CoursePage;
