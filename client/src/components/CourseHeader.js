import React from 'react';
import { Label, Rating } from 'semantic-ui-react';

const CourseHeader  = (props) => {
  const courseData = props.courseData || {};
  // const title = props.courseData.title;
  // const subtitle = props.courseData.subtitle;
  // const avg_rating = props.courseData.avg_rating;
  // const rating_count = props.courseData.rating_count;
  // const student_count = props.courseData.student_count;
  const {
    title, subtitle, avg_rating, rating_count, student_count, hasTag, tag
  } = courseData;

  const addCommaToNum = (num) => {
    if (num > 1000){
      let arr = String(num).split('');
      arr.splice(arr.length-3, 0, ',');
      console.log(arr.join(''));
      return arr.join('');
    } else return num;
  }

  const renderTag = () => hasTag ?
    <Label color="yellow" style={styles.labelStyle} horizontal>
      <span style={styles.labelTextStyle}>{tag}</span>
    </Label> : '';

  return (
    <div style={styles.headerContainerStyle}>
      <div style={styles.leftContainerStyle}>
        <h1 style={styles.titleStyle}>{title}</h1>
        <p style={styles.subtitleStyle}>{subtitle}</p>
        <div style={styles.ratingContainerStyle}>
          {renderTag()}
          <Rating  defaultRating={avg_rating} icon='star' maxRating={5} disabled/>
          <span style={styles.countsTextStyle}>{avg_rating + ` (${addCommaToNum(rating_count)} ratings)`}</span>
          <span style={styles.countsTextStyle}>{addCommaToNum(student_count) + ' students enrolled'}</span>
        </div>
        <div style={styles.otherInfoContainerStyle}>
        </div>
      </div>
      <div style={styles.rightContainerStyle}>
        {'section 2'}
      </div>
    </div>
  );

}

const styles = {
  headerContainerStyle: {
    position: 'absolute',
    height: '60%',
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
    backgroundColor: 'red',
    paddingTop: '4.1%',
    flex: 2
  },
  ratingContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  }
}
export default CourseHeader;

