import React from 'react'

function TasksCount({tasks}) {
     console.log(tasks)
  return (
    <div>
          <h1 className='text-4xl'>Task Count</h1>
          <h2 className='text-3xl mt-5'>{tasks.length}</h2>
    </div>
  )
}

export default TasksCount