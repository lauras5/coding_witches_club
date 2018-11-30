import React, { Component, Fragment } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';


class NavHome extends Component {
  render() {
    return (
      <Navbar id='coding-nav' right>
        <Link to='#home'><NavItem>HOME</NavItem></Link>
        <Link to='#events'><NavItem>EVENTS</NavItem></Link>
      </Navbar>
    )
  }
}

export default NavHome;