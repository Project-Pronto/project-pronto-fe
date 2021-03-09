import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LoginButton from '../../components/auth0/LoginButton'

export default class NavMenu extends Component {
    render() {
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
      <LoginButton></LoginButton>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}
