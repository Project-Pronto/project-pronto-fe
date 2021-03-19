import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LogOutButton.module.css'

const LogOutButton = () => {
    const { logout } = useAuth0();
    return(
        <button className={styles.LogOutButton}onClick={() => logout()}>
            Log Out
        </button>
    )
}

export default LogOutButton;