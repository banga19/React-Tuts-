import { useState } from 'react'
import React from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks'

const App = () => {


const [tasks, setTasks] = useState([ // code below is how STATE is used in react to manage data. it is immutable
  {
      id: 1,
      text: "Food delivery",
      day: 'Jan 5th 2014',
      reminder: false,
  },
  {
      id: 2,
      text: "Workout routine",
      day: 'May 5th 2014',
      reminder: false,
  },
  {
      id: 3,
      text: "Doc's Appointment",
      day: 'Dec 20th 2014',
      reminder: false,
  },
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id )) 
  }



  return( 
  <div className='container'>
    <Header />
    { tasks.length > 0 ?  (<Tasks tasks={ tasks } onDelete={deleteTask} />) : (
      'No tasks To show'
    )}
  </div>
  )
};

export default App;

// NB:actions are pushed up A DIRECTORY when it comes to props while a state are passed down 