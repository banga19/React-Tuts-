import { useState, useEffect } from 'react'
import React from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'


const App = () => {

const[showAddTask, setShowAddTask] = useState(false) //<< is state used linked to the "addTaskButton" 
const [tasks, setTasks] = useState([])// code << is how STATE is used in react to manage data. it is immutable

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    
    getTasks()
    
  }, [] /*dependancy array?? */)

  // Fetch Tasks
  const fetchTasks = async () => {
    const res =  await fetch('https://localhost:5000/tasks')
    const data =  await res.json()

    
    return res(data)
  }

  // Add task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...tasks}
    setTasks([...tasks, newTask]) //{...task} is used to summerise all the objects in taskComponentLevelState

  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id )) 
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ?
      {...task, reminder:!task.reminder}: task
      )
    )
  }


  return( 
  <div className='container'>
    <Header onAdd={()=> 
      setShowAddTask(!showAddTask)} showAdd={showAddTask} /> {/* Prop(onAdd) is linked to a button in Header.js that is used to toggle the (AddTaskForm)*/}

    { showAddTask && <AddTask onAdd={addTask} />} {/* && is a ternary operator used to check if condition is true without adding an else statement */}
    
    { tasks.length > 0 ?  (<Tasks tasks={ tasks } 
    onDelete={deleteTask} 
    onToggle={toggleReminder} />) : (
      'No tasks To show'
    )}
  </div>
  )
};

export default App;

// NB:actions are pushed up A DIRECTORY when it comes to props while a state are passed down 

