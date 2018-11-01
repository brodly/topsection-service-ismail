import React, { Component } from 'react';
import CoursePage from './components/CoursePage.js';

class App extends Component {
  constructor() {
    this.state = {
      course: null
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <CoursePage courseData={this.state.course}/>;
      </div>
    );
  }

}

export default App;
