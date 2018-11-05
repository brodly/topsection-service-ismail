import React, { Component } from 'react';
class CourseHeader extends Component {

  render() {
    return (
      <div style={styles.headerContainerStyle}>
        <div style={styles.leftContainerStyle}>
          <h1>{'Learn This Now'}</h1>
          <h4>{'This course is all about honing your experience to become whatever you want to be.'}</h4>
          <div style={styles.ratingContainerStyle}>
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

