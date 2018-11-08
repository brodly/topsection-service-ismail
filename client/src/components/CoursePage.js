import React, { Component } from 'react';
import CourseHeader from './CourseHeader.js';
import { Breadcrumb, Button } from 'semantic-ui-react';

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
    .then((courseData) => {
      console.log('courseData', courseData);
      this.setState({ course: courseData[0] });
    });
  }

  render() {
    let tempCourseData = {
      title: 'Cognitive Behavioural Therapy (CBT) Practitioner Certificate',
      subtitle: 'Becoming a Cognitive Behavioural Therapy Practitioner with tempCourseData Achology Accredited CBT Practitioner Certificate course',
      avg_rating: 4.2,
      hasTag: true,
      tag: 'BESTSELLER',
      rating_count: 3458,
      student_count: 94834,
      isOnDiscount: true,
      price: 199.99,
      current_price: 19.99,
      discount: 0.94,
      course_len: 24.5,
      num_of_articles: 84,
      dwl_resources_count: 122,
      discountCountdown: '3 days',
      teacher_names: 'Vitor Belfort_Anderson Silva',
      lang: 'English'
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
        <CourseHeader courseData={this.state.course}/>
      </div>
    );
  }
}

const styles = {
  pageContainerStyle: {},
  breadcrumbStyle: {
    marginTop:'1%',
    paddingLeft: '4%',
    marginBottom: '1%',
    width:'100%' ,
    paddingTop: '3px',
    paddingBottom: '3px',
  },
  crumbStyle: { marginLeft: '1%', marginRight: '1%' }
}
export default CoursePage;
