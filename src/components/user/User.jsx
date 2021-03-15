import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row } from 'react-bootstrap';
import styles from './User.module.css';

const  User = () => {

        const { user } = useAuth0()
       

        return (
            <Container className={styles.userContainer}>
                <Row className={styles.profile_pic_Row}>
                    <img className={styles.profile_pic}src={user.picture} alt='profile'/>
                </Row>          
                <Row className={styles.intros}>
                    <p>Welcome back {user.name}!
                    <br></br>
                    You have pending tasks
                    </p> 
                </Row>
                
                    
            </Container>
        )
    }

    export default User;

