import React, { Component } from 'react';
import { Menu, Segment, Icon, Input, Breadcrumb, Button } from 'semantic-ui-react';

class NavBar extends Component {

  render() {
    return (
      <div>
        <Segment  style={styles.segmentStyle}>
          <Menu stackable secondary>
            <Menu.Item name='logo'>
              <img style={styles.logoStyle} src='https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg' />
            </Menu.Item>
            <Menu.Item
              style={{ color:'#505763', fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: '13px', fontWeight: 400 }}
              name='categories'
            >
              <Icon name='th' /> {'Categories'}
            </Menu.Item>
            <Menu.Item name='searchBar' style={styles.inputContainerStyle}>
              <Input style={styles.inputStyle} action={{ icon: 'search' }} placeholder='Search for Courses'/>
            </Menu.Item>
            <Menu.Item
              style={styles.navBtnStyle}
              name='Udemy For Business'
              active
            />
            <Menu.Item
              name='Become an Instructor'
              style={styles.navBtnStyle}
            />
            <Menu.Item
              style={styles.cardItemStyle}
            >
              <Icon size='large' name='shopping cart' />
            </Menu.Item>
            <Menu.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <Button style={styles.logInBtnStyle} basic> {'Log In'}</Button>
              <Button style={styles.signUpBtnStyle}> {'Sign Up'}</Button>
            </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  }
}
  const styles= {
    segmentStyle: {
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingRight: '60px',
      boxShadow: '0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)'
    },
    logoStyle: { zoom: 3 },
    inputContainerStyle: { width: '32%', marginLeft: '1%', marginRight: '2%'},
    inputStyle: {
      width: '100%',
      height: '40px',
      borderRadius: 0
    },
    navBtnStyle: {
      fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif' ,
      fontSize: '13px',
      fontFamily: 400,
      lineHeight: '20px',
      color: '#505763',
    },
    cardItemStyle: {
      paddingLeft: '2px',
      paddingRight: '2px'
    },
    logInBtnStyle: {
      borderRadius: '2px',
      marginRight: '5px',
      border: '1px solid #686f7a',
      fontSize: 15,
      fontWeight: 600
    },
    signUpBtnStyle: {
      backgroundColor: '#ec5252',
      color: '#fff',
      fontSize: 15,
      fontWeight: 600,
      borderRadius: '2px',
      border: '1px solid #ec5252'
    }
  }

export default NavBar;

