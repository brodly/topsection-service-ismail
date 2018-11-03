import React, { Component } from 'react';
import CourseHeader from './CourseHeader.js';
import { Breadcrumb } from 'semantic-ui-react';

class CoursePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={styles.pageContainerStyle}>
        <Breadcrumb style={styles.breadcrumbStyle} size='small'>
          <Breadcrumb.Section style={styles.crumbStyle}>{'Business'}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section style={styles.crumbStyle}>{'Entrepreneurship'}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active style={styles.crumbStyle}>{'One Day MVP'}</Breadcrumb.Section>
        </Breadcrumb>
        <CourseHeader courseData={this.props.courseData}/>
      </div>
    );
  }
}

const styles = {
  pageContainerStyle: {},
  breadcrumbStyle: { paddingLeft: '4%', marginBottom: '1%', width:'100%' },
  crumbStyle: { marginLeft: '1%', marginRight: '1%' }
}
export default CoursePage;
