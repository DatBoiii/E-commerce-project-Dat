import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class BootstrapNavbar extends React.Component {
    render() {
      return(
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand to='/' style={{ fontSize: '32px'}}>￥</Navbar.Brand>
        <Link to='/home' className='nav-link'>Home</Link>
        <Link to='/store' className='nav-link'>Store</Link>
      </Navbar>
      );
    }
  }

export default BootstrapNavbar;