import React from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import TasksCount from './TasksCount'
import { useState } from 'react'

function TaskManager() {

     let [tasks,setTask]=useState([]);
     //add new task
     const addNewTask=(taskObj)=>{
          setTask([...tasks,taskObj])
     }
      // delete task
    const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
    setTask(updatedTasks);
    }
  return (
    <div>
     <h1 className='text-5xl text-blue-600 mb-20 font-bold'>Task Manager</h1>
     <div className='flex justify-around'>
     <AddTask addNewTask={addNewTask}/>
     <TasksList tasks={tasks} deleteTask={deleteTask}/>
     <TasksCount tasks={tasks}/>
     </div>
    </div>
  )
}

export default TaskManager