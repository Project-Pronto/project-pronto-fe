import React, {useState} from 'react'
import { Container, Button, Collapse, Modal, Row} from 'react-bootstrap';
import Tasks from '../../data/Data';
import styles from './Task.module.css';

export default function TaskPage() {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    // const [points, setPoints] = useState(0);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        
        
      <Container className={styles.myTask_container}>
            <Container className={styles.task_heading}>
                <Row className={styles.myTask_heading}>My Tasks</Row> 
                <Row><button className={styles.taskButton} onClick={handleShow}>
                  New +
                </button></Row>
            </Container>
            
            <Container className={styles.allTasks}>
                {Tasks.map(task =>
                <Container className={styles.task_container} key={task.goal}>
                    <Row >
                      <div className={styles.goal_deadline}>
                        <p>{task.goal}</p>
                        <p>{task.deadline}</p>
                      </div>
                    </Row>
                    <Row className={styles.steps_button}>
                      <p className={styles.stepsComplete}>
                        {task.steps.filter(step => step.completed === true).length}/3 complete
                      </p>
                      <Button
                        onClick={() => setOpen(!open)}
                        aria-controls={`task ${task.goal}`}
                        aria-expanded={open}>
                        ^
                      </Button>
                    </Row>
                    
                    
                    <Collapse in={open}>
                        <ul id={`task ${task.goal}`}>
                            { task.steps.map(step => 
                            <div className={styles.steps}>
                              <input 
                       type="checkbox" 
                       checked={(step.completed)}>
                       </input><p>{step.task}</p>
                            </div>)}
                        </ul>
                    </Collapse>
                    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          </Modal.Footer>
          </Modal> 
                </Container>
                
                )}
                    
                </Container>
            
            
            

            
      </Container>            
        
        
    )
}