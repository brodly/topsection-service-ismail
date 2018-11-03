import React, { Component } from 'react';
import CourseHeader from './CourseHeader.js';

class CoursePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={styles.pageContainerStyle}>
        <CourseHeader courseData={this.props.courseData}/>
      </div>
    );
  }
}

const styles = {
  pageContainerStyle: { marginTop: '50px' }
}

export default CoursePage;
