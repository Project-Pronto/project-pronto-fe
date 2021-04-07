import React, { useState } from 'react';
import { useEffect } from 'react';
import firebase from '../firebase'

export const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [allTasks, setTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0)
 
  
   useEffect(() => {
     firebase
     .firestore()
     .collection('Tasks')
     .get()
     .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
         allTasks.push(querySnapshot)
         console.log(allTasks)
        })
      })
      
},[])



  const handleNewTask = async(taskForm, Task1, Task2, Task3) => {
    firebase.firestore().collection('Tasks').add({
      completed: taskForm.completed,
      goal: taskForm.goal,
      deadline: taskForm.deadline,
      steps: [
        {...Task1},
        {...Task2},
        {...Task3}
      ]
    })
    await setActiveTasks(allTasks.filter(task => task.completed === false).length)
    await setDoneTasks(allTasks.filter(task => task.completed ===  true ).length)
    setTotalPoints(doneTasks * 3)
  };

  

  
  return (
    <TaskContext.Provider value={{ allTasks, activeTasks, doneTasks,totalPoints, handleNewTask }}>
      {children}
    </TaskContext.Provider>
  );
};