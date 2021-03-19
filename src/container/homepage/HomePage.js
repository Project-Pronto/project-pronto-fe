import React from 'react';
import styles from './HomePage.module.css';
import User from '../../components/user/User';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskPage from '../landingpage/Taskpage';


export default function HomePage() {
    
    const { isAuthenticated } = useAuth0();
    return (
        
        <Container>
            <Row>
                <Col>{isAuthenticated ? <User/> : <Container className={styles.heading_container}><h2 className={styles.heading}>FINI</h2></Container>}</Col>
            </Row>
            <Row>
                {isAuthenticated? <TaskPage/> : <br></br> }
            </Row>
            
        </Container>
        
    )
}
