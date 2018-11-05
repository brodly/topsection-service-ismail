import React, { Component } from 'react';
import { Menu, Segment, Icon, Input, Breadcrumb } from 'semantic-ui-react';

class NavBar extends Component {

  render() {
    return (
      <div>
        <Segment  style={styles.segmentStyle}>
          <Menu stackable secondary>
            <Menu.Item name='logo'>
              <img style={styles.logoStyle} src='https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg' />
            </Menu.Item>
            <Menu.Item name='categories'>
              <Icon name='th' /> {'Categories'}
            </Menu.Item>
            <Menu.Item name='searchBar' style={styles.inputContainerStyle}>
              <Input style={styles.inputStyle} action={{ icon: 'search' }} placeholder='Search for Courses'/>
            </Menu.Item>
            <Menu.Item
              name='Udemy For Business'
              active
            />
            <Menu.Item
              name='Become an Instructor'
            />
            <Menu.Item
              style={styles.cardItemStyle}
              name='Become an Instructor'
            >
              <Icon size='large' name='shopping cart' />
            </Menu.Item>

          </Menu>
        </Segment>
      </div>
    );
  }
}
  const styles= {
    logoStyle: { zoom: 3 },
    segmentStyle: { paddingTop: '5px', paddingBottom: '5px'},
    inputContainerStyle: { width: '35%', marginLeft: '1%', marginRight: '3%'},
    inputStyle: {
      width: '100%',
      height: '40px',
      borderRadius: 0
    },
    cartItemStyle: {
      borderRadius: 1000
    },
    cartIconStyle: {
      borderRadius: 1000
    }
  }
  // <Breadcrumb size='small'>
  //   <Breadcrumb.Section link>Home</Breadcrumb.Section>
  //   <Breadcrumb.Divider icon='right chevron' />
  //   <Breadcrumb.Section link>Registration</Breadcrumb.Section>
  //   <Breadcrumb.Divider icon='right chevron' />
  //   <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
  // </Breadcrumb>
export default NavBar;
