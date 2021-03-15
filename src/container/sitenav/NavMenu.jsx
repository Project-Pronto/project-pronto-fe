import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import LoginButton from '../../components/auth0/LoginButton'
import LogOutButton from '../../components/auth0/LogOutButton'
import {useAuth0} from '@auth0/auth0-react'

export default function NavMenu()  {
    
      const { isAuthenticated } = useAuth0();
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">PROJECT PRONTO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/task">Task</Nav.Link>
    </Nav>
    <Nav>
    {isAuthenticated ? <LogOutButton/> :<LoginButton/>}
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }

