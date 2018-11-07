import React from 'react';
import { Label, Rating } from 'semantic-ui-react';
import CourseCtaCard from './CourseCtaCard';

const CourseHeader  = (props) => {
  const courseData = props.courseData || {};
  const {
    title, subtitle, avg_rating,
    rating_count, student_count, hasTag,
    tag, teacher_names, lang
  } = courseData;

  const addCommaToNum = (num) => {
    if (num > 1000){
      let arr = String(num).split('');
      arr.splice(arr.length-3, 0, ',');
      return arr.join('');
    } else return num;
  }

  const parseTeacherNames = (nameStr = '') => {
    return nameStr.split('_').join(', ');
  };

  const renderTag = () => {
    const tagColor = tag.includes('BESTSELLER') ?
      'yellow'
    : tag.includes('HOT') ?
      'red'
    : tag.includes('NEW') ?
      'orange'
    : '';
    return hasTag ?
      <Label color={tagColor} style={styles.labelStyle} horizontal>
        <span style={styles.labelTextStyle}>{tag}</span>
      </Label>
    : '';
  }
  return (
    <div style={styles.headerContainerStyle}>
      <div style={styles.leftContainerStyle}>
        <h1 style={styles.titleStyle}>{title}</h1>
        <p style={styles.subtitleStyle}>{subtitle}</p>
        <div style={styles.ratingContainerStyle}>
          {renderTag()}
          <Rating  defaultRating={avg_rating} icon='star' maxRating={5}  disabled/>
          <span style={styles.countsTextStyle}>{avg_rating + ` (${addCommaToNum(rating_count)} ratings)`}</span>
          <span style={styles.countsTextStyle}>{addCommaToNum(student_count) + ' students enrolled'}</span>
        </div>
        <div style={styles.otherInfoContainerStyle}>
          <span>{`Created By ${parseTeacherNames(teacher_names)}`}</span>
          <span style={{ marginLeft: '15px', marginRight: '15px' }}> {'Last updated 8/12'}</span>
          <span> <i className='far fa-comment' /> {lang}</span>
        </div>
      </div>
      <div style={styles.rightContainerStyle}>
        <CourseCtaCard courseData={courseData}/>
      </div>
    </div>
  );

}

const styles = {
  headerContainerStyle: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    backgroundColor: '#29303A',
    fontFamily:'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
  },
  leftContainerStyle:{
    flex: 3.5,
    paddingTop: '4.1%',
    paddingLeft: '5%',
    paddingRight: '2%'
  },
  rightContainerStyle: {
    paddingTop: '4.1%',
    flex: 2
  },
  ratingContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStyle: {
    backgroundColor: '#fff'
  },
  titleStyle: {
    paddingRight: '3%',
    fontSize: '36px',
    lineHeight:'41px',
    fontWeight: 600
  },
  subtitleStyle: {
    fontSize: '21px',
    lineHeight: '27px',
    marginBottom: '5px'
  },
  labelStyle: {
    marginLeft: 0,
    marginRight: '2.5%'
  },
  labelTextStyle: {
    color: 'black',
    fontWeight: 700,
    fontSize: '9px'
  },
  countsTextStyle: {
    fontSize: '15px',
    lineHeight: 1.43,
    marginLeft: '10px'
  },
  otherInfoContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: '15px',
    fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: '#fff',
    paddingTop: '10px'
  }
}
export default CourseHeader;

