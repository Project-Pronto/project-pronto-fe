import React, { useState, useEffect } from 'react';
import Data from '../data/Data'

export const TaskContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    setTasks(Data);
      
  }, [tasks]);

  const handleNewTask = (newTask) => {
    tasks.push(newTask)
  };

  
  return (
    <TaskContext.Provider value={{ tasks, handleNewTask }}>
      {children}
    </TaskContext.Provider>
  );
};