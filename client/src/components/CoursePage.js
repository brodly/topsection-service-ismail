import React, { Component } from 'react';
import CourseHeader from './CourseHeader.js';
import { Breadcrumb } from 'semantic-ui-react';

class CoursePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let tempCourseData = {
      title: 'Cognitive Behavioural Therapy (CBT) Practitioner Certificate',
      subtitle: 'Becoming a Cognitive Behavioural Therapy Practitioner with this Achology Accredited CBT Practitioner Certificate course',
      avg_rating: 4,
      hasTag: true,
      tag: 'BESTSELLER',
      rating_count: 3458,
      student_count: 94834
    }
    return (
      <div style={styles.pageContainerStyle}>
        <Breadcrumb style={styles.breadcrumbStyle} size='small'>
          <Breadcrumb.Section style={styles.crumbStyle}>{'Business'}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section style={styles.crumbStyle}>{'Entrepreneurship'}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active style={styles.crumbStyle}>{'One Day MVP'}</Breadcrumb.Section>
        </Breadcrumb>
        <CourseHeader courseData={tempCourseData}/>
      </div>
    );
  }
}

const styles = {
  pageContainerStyle: {},
  breadcrumbStyle: { marginTop:'1%', paddingLeft: '4%', marginBottom: '1%', width:'100%' },
  crumbStyle: { marginLeft: '1%', marginRight: '1%' }
}
export default CoursePage;
