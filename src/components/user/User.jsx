import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './User.module.css';

const  User = () => {

        const { user } = useAuth0()
       

        return (
            <Container className={styles.userContainer}>
                <Row className={styles.profile_pic_Row}>
                    <Col className={styles.intros}><p>Welcome {user.given_name}!
                    <br></br>
                    You have pending tasks
                    </p> </Col>
                    
                    
                </Row>          
                <Row >
                    
                </Row>
                
                    
            </Container>
        )
    }

    export default User;

