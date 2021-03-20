import React from 'react';
import styles from './HomePage.module.css';
import User from '../../components/user/User';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, } from 'react-bootstrap';
import TaskPage from '../landingpage/Taskpage';
import logo from '../../assets/main_logo.png'
import LoginButton from '../../components/auth0/LoginButton';
import Loading from '../../assets/loading.gif';


export default function HomePage() {
    const { isLoading } = useAuth0()
    
    const { isAuthenticated } = useAuth0();

    if (isLoading) return <img  src={Loading} alt="loading" width="100%"/>;

    return (
        
        <Container>
            <Row className={styles.row_user_logo}>
                {isAuthenticated ? <User/> : <>
                    <img className={styles.heading} src={logo} alt="logo"/>
                    <LoginButton />
                    </>}
            </Row>
            <Row>
                {isAuthenticated? <Container><TaskPage/> </Container>: <br></br> }
            </Row>
            
        </Container>
        
    )
}
