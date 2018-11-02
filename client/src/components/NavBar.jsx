import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    <Segment >
      <Menu inverted secondary>
        <Menu.Item name='home' />
        <Menu.Item
          name='messages'
          active
        />
        <Menu.Item
          name='friends'
        />
      </Menu>
    </Segment>
  }
}

export default NavBar;
