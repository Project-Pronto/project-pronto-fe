import React, { useContext, useState } from 'react';
import {TaskContext} from '../../context/TaskContext'
// import React, {useState} from 'react'
import { Container, Button, Collapse, Modal, Row, Col} from 'react-bootstrap';
// import Tasks from '../../data/Data';
import styles from './Task.module.css';

export default function TaskPage() {
  const { tasks, handleNewTask } = useContext(TaskContext)

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [taskForm, setTaskForm] = useState({
        completed: false,
        goal:"",
        deadline: "",
        steps: [
            {task: "",
            completed: false},
            {task:"",
            completed:false},
            {task:"",
            completed: false}
          ]
        });


        const handleSubmit = e => {
          e.preventDefault();
          handleNewTask(taskForm); 
          console.log(tasks)     
        };

        const onChange = e => {
          setTaskForm({
            ...taskForm,
            [e.target.name]: e.target.value
          });
        };
    
    return (
        
        
      <Container className={styles.myTask_container}>
            <Container className={styles.task_heading}>
                <Row >
                  <Col className={styles.myTask_heading}>
                    <p>My Tasks</p>
                    <button className={styles.taskButton} onClick={handleShow}>
                      New +
                    </button>
                  </Col>
                </Row> 
            </Container>
            
            <Container className={styles.allTasks}>
                {tasks.map(task =>
                <Row className={styles.task_container} key={task.goal}>
                    <Row>
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
                        className={styles.stepsButton}
                        onClick={() => setOpen(!open)}
                        aria-controls={`task ${task.goal}`}
                        aria-expanded={open}>
                        &#748;
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
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="goal">
                Goal:
              </label>
              <input
                id="goal"
                type="text"
                name="goal"
                value={taskForm.goal}
                onChange={onChange}/>

              <label htmlFor="subtask1">
                Subtask:
              </label>
              <input
                id="subtask1"
                type="text"
                name="task1"
                value={taskForm.steps[0].task}
                onChange={onChange}
              />
              <label htmlFor="subtask2">
                      Subtask:
                    </label>
                    <input
                      id="subtask2"
                      type="text"
                      name="task2"
                      value={taskForm.steps[1].task}
                      onChange={onChange}
                    />

              <label htmlFor="subtask3">
                    Subtask:
                  </label>
                  <input
                    id="subtask3"
                    type="text"
                    name="task3"
                    value={taskForm.steps[2].task}
                    onChange={onChange}
                  />

              <label htmlFor="deadline">
                Deadline:
              </label>
              <input
                id="deadline"
                type="date"
                name="deadline"
                value={taskForm.deadline}
                onChange={onChange}
              />
              <button>Create Journal Entry</button> 
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Close Window
          </Button>
          </Modal.Footer>
          </Modal> 
                </Row>
                
                )}
                    
                </Container>
            
            
            

            
      </Container>            
        
        
    )
}