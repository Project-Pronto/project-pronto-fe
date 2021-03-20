import React from 'react';
import styles from './HomePage.module.css';
import User from '../../components/user/User';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, } from 'react-bootstrap';
import TaskPage from '../landingpage/Taskpage';
import logo from '../../assets/main_logo.png'


export default function HomePage() {
    
    const { isAuthenticated } = useAuth0();
    return (
        
        <Container>
            <Row className={styles.row_user_logo}>
                {isAuthenticated ? <User/> : <img className={styles.heading} src={logo} alt="logo"/>}
            </Row>
            <Row>
                {isAuthenticated? <Container><TaskPage/> </Container>: <br></br> }
            </Row>
            
        </Container>
        
    )
}
