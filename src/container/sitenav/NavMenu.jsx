import React from 'react';
import { Navbar } from 'react-bootstrap'
import LogOutButton from '../../components/auth0/LogOutButton'
import {useAuth0} from '@auth0/auth0-react'
import styles from './NavMenu.module.css'
import logo from '../../assets/main_logo.png'

export default function NavMenu()  {
    
      const { isAuthenticated } = useAuth0();
        return (
<>


          { isAuthenticated ? <Navbar className={styles.Nav} collapseOnSelect expand="lg"  variant="dark">
              <Navbar.Brand className={styles.NavText} href="/">
              <img className={styles.logo} src={logo} alt="logo"/><LogOutButton/>
              </Navbar.Brand>
  
            </Navbar> : <></>}

            </>
            
        )
    }

