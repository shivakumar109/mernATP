import React from 'react'
import { useForm } from 'react-hook-form'
function AddTask({addNewTask }) {
     const {register,handleSubmit}=useForm()
     const onSubmit=(taskObj)=>{
          console.log(taskObj);
          addNewTask(taskObj);
     }
     return (
     <div>
          <h1 className='text-4xl'>Add Task</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
               <div className='mb-3'>
                    <input type="text" {...register("taskName")} className='border-2' placeholder='Add task'></input>
               </div>
               <button className='bg-blue-300 px-3 py-2 text-black-100'>ADD</button>
          </form>
     </div>
  )
}
export default AddTask