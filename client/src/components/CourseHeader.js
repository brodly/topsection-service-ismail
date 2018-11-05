import React from 'react';
import { label, Rating } from 'semantic-ui-react';

const CourseHeader  = (props) => {
  const title = props.courseData && props.courseData.title || '';
  const subtitle = props.courseData && props.courseData.subtitle || '';
  const rating = props.courseData && props.courseData.avg_rating || '';
  return (
    <div style={styles.headerContainerStyle}>
      <div style={styles.leftContainerStyle}>
        <h1>{title || ''}</h1>
        <h4>{subtitle || ''}</h4>
        <div style={styles.ratingContainerStyle}>
          <Rating icon='star' defaultRating={rating} maxRating={5} />
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
    height: '52%',
    width: '100%',
    backgroundColor: '#505763',
    display: 'flex',
    flexDirection: 'row'
  },
  leftContainerStyle:{
    backgroundColor: 'blue',
    flex: 3.5,
    paddingTop: '4.5%',
    paddingLeft: '5%'
  },
  rightContainerStyle: {
    backgroundColor: 'red',
    paddingTop: '4.5%',
    flex: 2
  },
  ratingContainerStyle: {
    display: 'flex',
    flexDirection: 'row'
  }

}
export default CourseHeader;

