import React, {useState} from 'react'
import { Container, Button, Collapse, Modal } from 'react-bootstrap'
import Tasks from '../../data/Data'
import styles from './Task.module.css'

export default function TaskPage() {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        
        
        <Container className={styles.myTask_container}>
            <div className={styles.task_heading}>
                <h3>My Tasks</h3> 
                <Button variant="primary" onClick={handleShow}>
        New Task +
      </Button>
            </div>
            <div className={styles.allTasks}>
                <ul>
                {Tasks.map(task =>
                <div className={styles.task_container} key={task.goal}>
                    <div className={styles.goal_deadline}>
                       <p>{task.goal}</p>
                        <p>{task.deadline}</p>
                    </div>
                    <p>
                        {task.steps.filter(step => step.completed === true).length}/3 complete
                    </p>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls={`task ${task.goal}`}
                        aria-expanded={open}>
                    ^
                    </Button>
                    <Collapse in={open}>
                        <div id={`task ${task.goal}`}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
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
                </div>
                
                )}
                    
                </ul>
            </div> 
            
            

            
        </Container>            
        
        
    )
}