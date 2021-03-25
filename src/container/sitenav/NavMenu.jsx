import React from 'react';
import LogOutButton from '../../components/auth0/LogOutButton'
import {useAuth0} from '@auth0/auth0-react'
import styles from './NavMenu.module.css'
import logo from '../../assets/Voltooi_logo.png'

export default function NavMenu()  {
    
      const { isAuthenticated } = useAuth0();
        return (
<>


          { isAuthenticated ? <div className={styles.Nav} >
              
              <img className={styles.logo} src={logo} alt="logo"/><LogOutButton/>
             
  
            </div> : <></>}

            </>
            
        )
    }

