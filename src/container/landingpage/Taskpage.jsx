import React, { useContext, useState } from 'react';
import {TaskContext} from '../../context/TaskContext'
// import React, {useState} from 'react'
import { Collapse, Modal} from 'react-bootstrap';
// import Tasks from '../../data/Data';
import styles from './Task.module.css';

export default function TaskPage() {
  const { allTasks, handleNewTask } = useContext(TaskContext)

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [Task1, setStepTask1] = useState(
      {task1:"",
      task1_completed: false}
    );
    const [Task2, setStepTask2] = useState(
      {task2:"",
      task2_completed:false}
    );
    const [Task3, setStepTask3] = useState(
      {task3:"",
      task3_completed:false}
    );
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [taskForm, setTaskForm] = useState({
    completed:false,
    goal:"",
    deadline: "",
    steps: []
  });


        const handleSubmit = async(e) => {
          e.preventDefault();
          await taskForm.steps.push(Task1, Task2, Task3)  
          await handleNewTask(taskForm);
          setStepTask1({...Task1, task1:""})
          setStepTask2({...Task2, task2:""})
          setStepTask3({...Task3, task3:""})
          setTaskForm({
            ...taskForm,
            goal:"",
            deadline: "",
            steps: []
          })
          console.log(allTasks, taskForm, Task1,Task2, Task3 )     
        };

        const onChange = e => {
          setTaskForm({
            ...taskForm,
            [e.target.name]: e.target.value
          });
        };

        const onTaskChange1 = e => {
          setStepTask1({
            ...Task1,
            [e.target.name]: e.target.value
          });
        };
        const onTaskChange2 = e => {
          setStepTask2({
            ...Task2,
            [e.target.name]: e.target.value
          });
        };
        const onTaskChange3 = e => {
          setStepTask3({
            ...Task3,
            [e.target.name]: e.target.value
          });
        };

        const onChangeComplete = e => {
          
        }

       
    
    return (
        
        
      <div className={styles.myTask_container}>
            <div className={styles.task_heading}>
                <div className={styles.myTask_heading}>
                  
                    <p>My Tasks</p>
                    <button className={styles.taskButton} onClick={handleShow}>
                      New +
                    </button>
                
                </div> 
                {allTasks.length === 0 ? <div className={styles.noTasks}><p className={styles.noTasks_text}>Click “New” to create your first task</p></div> : 
          <div className={styles.allTasks}>
                {allTasks.map(task =>
                <div className={styles.task_container} key={task.goal}>
                    
                      <div className={styles.goal_deadline}>
                        <p>{task.goal}</p>
                        <p>{task.deadline}</p>
                      </div>
                  
                    <div className={styles.steps_button}>
                      <p className={styles.stepsComplete}>
                        {task.steps.filter(step => step.task1_completed === true || step.task2_completed === true || step.task3_completed === true).length}/3 complete
                      </p>
                      <button
                        className={styles.stepsButton}
                        onClick={() => setOpen(!open)}
                        aria-controls={`task ${task.goal}`}
                        aria-expanded={open}>
                        ^
                      </button>
                    </div>
                    <Collapse in={open}>
                        <ul className={styles.steps_ul}id={`task ${task.goal}`}>
                            
                              <li className={styles.steps}>
                                <input 
                                  onChange={onChangeComplete}
                                  type="checkbox" 
                                  checked={(task.steps[0].task1_completed)}>
                                </input><p>{task.steps[0].task1}</p>
                                <input
                                  onChange={onChangeComplete}
                                  type="checkbox" 
                                  checked={(task.steps[1].task2_completed)}>
                                </input><p>{task.steps[1].task2}</p>
                                <input 
                                  type="checkbox"
                                  onChange={onChangeComplete} 
                                  checked={(task.steps[2].task3_completed)}>
                                </input><p>{task.steps[2].task3}</p>
                              </li>
                        </ul>
                    </Collapse>
                    
                </div>
                
                )}
                    
                </div>}
            </div>
            




            <Modal show={show} onHide={handleClose} className={styles.modal_container}>
          <Modal.Header className={styles.modal_header} closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modal_body}>
            <form onSubmit={handleSubmit}>
              <input
                id="goal"
                type="text"
                name="goal"
                autocomplete="off"
                value={taskForm.goal}
                onChange={onChange}
                className={styles.modal_input}
                placeholder="Add task description/name"/>
                <br></br>
                <br></br>
                <br></br>
                <h5>Task Breakdown</h5>
              <input
                id="subtask1"
                type="text"
                name="task1"
                autocomplete="off"
                value={Task1.task1}
                onChange={onTaskChange1}
                className={styles.modal_input}
                placeholder="Subtask"
              />
              <input
                id="subtask2"
                type="text"
                name="task2"
                autocomplete="off"
                value={Task2.task2}
                onChange={onTaskChange2}
                className={styles.modal_input}
                placeholder="Subtask"
              />
              <input
                id="subtask3"
                type="text"
                name="task3"
                autocomplete="off"
                value={Task3.task3}
                onChange={onTaskChange3}
                className={styles.modal_input}
                placeholder="Subtask"
              />
              <br></br>
              <br></br>
              <input
                id="deadline"
                type="date"
                name="deadline"
                value={taskForm.deadline}
                onChange={onChange}
                className={styles.modal_input}
                placeholder="Date"
              />
              <br></br>
              <br></br>
              <button className={styles.add_task_button} onClick={handleClose}>Save</button> 
            </form>
            </Modal.Body>
           

          </Modal> 

          
            
            
            

            
      </div>            
        
        
    )
}