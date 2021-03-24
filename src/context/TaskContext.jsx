import React, { useState } from 'react';


export const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [allTasks, setTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0)
 
  
  
   

  const handleNewTask = async(newTask) => {
    allTasks.push(newTask)
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