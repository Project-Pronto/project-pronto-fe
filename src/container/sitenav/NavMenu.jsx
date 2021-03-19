import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import LoginButton from '../../components/auth0/LoginButton'
import LogOutButton from '../../components/auth0/LogOutButton'
import {useAuth0} from '@auth0/auth0-react'
import styles from './NavMenu.module.css'

export default function NavMenu()  {
    
      const { isAuthenticated } = useAuth0();
        return (
            <Navbar className={styles.Nav} collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand className={styles.NavText} href="/">FINI</Navbar.Brand>
    <Nav>
    {isAuthenticated ? <LogOutButton/> :<LoginButton/>}
    </Nav>
  
</Navbar>
        )
    }

