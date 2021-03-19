import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './User.module.css';

const  User = () => {

        const { user } = useAuth0()
       

        return (
            <Container className={styles.userContainer}>
                <Container className={styles.profile_pic_Row}>
                    <Col className={styles.intros}>
                        <p>
                            Welcome {user.given_name}!
                       <br></br>
                        You have pending tasks
                        </p> 
                    </Col>
                    
                    
                </Container>          
                <Container className={styles.task_Row}>
                        <Row className={styles.metricContainer}>
                            <Col className={styles.col_task_tracker}>
                            <p>Task Tracker</p>
                            
                            </Col>
                            <Col className={styles.col_task_points}>
                            
                            <p>0pts</p>                            
                            </Col>
                        </Row>
                        <Row>
                            <Col className={styles.col_active}>
                                <p>Active</p>
                                <p>2</p>
                            </Col>
                            <Col className={styles.col_done}>
                                <p>Done</p>
                                <p>2</p>
                            </Col>
                            <Col className={styles.col_missed}>
                                <p>Missed</p>
                                <p>1</p>
                            </Col>
                        </Row>                    
                </Container>
                
                    
            </Container>
        )
    }

    export default User;

