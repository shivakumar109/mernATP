import React from 'react'

function TasksList({tasks,deleteTask}) {
  return (
    <div>
          <h1 className='text-4xl mb-5'> Task List</h1>
          {
               tasks.length===0 ?(<p className='text-2xl text-red-500'>Empty</p>):
               (tasks.map((taskObj,index)=>(<div><p key={index}>{taskObj.taskName}</p>
               <button
                className='bg-red-400 px-2 py-1 rounded'
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              </div>
               ) ))
          }
    </div>   
  )
}

export default TasksList

//if task list is empty display  empty
