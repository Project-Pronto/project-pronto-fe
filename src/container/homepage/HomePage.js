import React from 'react';
import styles from './HomePage.module.css';
import User from '../../components/user/User';
import { useAuth0 } from '@auth0/auth0-react';
import TaskPage from '../landingpage/Taskpage';
import logo from '../../assets/Voltooi_logo.png'
import LoginButton from '../../components/auth0/LoginButton';
import Loading from '../../assets/voltooi_loading.gif';


export default function HomePage() {
    const { isLoading } = useAuth0();
    
    const { isAuthenticated } = useAuth0();

    if (isLoading) return <img  src={Loading} alt="loading" width="100%"/>;

    return (
        
        <div className={styles.HomePage_Container}>
            <div className={styles.row_user_logo}>
                {isAuthenticated ? <User/> : <>
                    <div className={styles.heading}>
                        <img className={styles.heading_logo} src={logo} alt="logo"/>
                        <p className={styles.heading_text}>Welcome to Voltooi, a platform that helps you manage your tasks and get stuff done... on time! </p>
                        <br></br>
                        <LoginButton />
                    </div>
                    
                    </>}
            </div>
            <div>
                {isAuthenticated? <div className={styles.TaskPage_Container}><TaskPage/> </div>: <br></br> }
            </div>
            
        </div>
        
    )
}
