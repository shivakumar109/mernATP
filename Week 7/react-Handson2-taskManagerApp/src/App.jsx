import TaskManager from './Components/TaskManager.jsx';
function App(){
  return (
    <div className='text-center bg-gray-400 p-10 '>
      <h1 className='text-5xl'> </h1>
      <TaskManager/>
    </div>
  )
}



























// function App(){

//   const messages=[
//         {
//           message1:"Good Moring" ,
//           message2:"hi"
//         },
//         {
//           message1:"Good Afternoon",
//           message2:"hey"
//         },
//         {
//           message1:"Good Evining" ,
//           message2:"hello"
//         }
//   ]
//   return(
//     <div className='text-center border-2 p-5 bg-gray-300'>
//       <h1 className='text-5xl text-blue-500'>Welcome to React</h1>
//       {
//         messages.map(msgObj=>< Test1 messages={msgObj}/>)
//       }
//       <Test2/>
//     </div>
//   )
// }


















// function App(){

// //state(optional)
// let username='sss';
// let person={
//   pid:1,
//   name:'shiva'
// }
// let marks=[90,80,90]

// const test1=()=>{
//     console.log("Test function")
// }
// const test2=(n)=>{
//   console.log(n)
// }
// //return a react element(mandatory)
//     return(
//       <div className='text-center'>
//         <h1 className='text-5xl text-blue-400' >Welcome to React</h1>
//         {/* username */}
//         <h2 className='text-4xl'>Username:{username}</h2>
//         {/* person object */}
//         <h2>{person.pid}</h2>
//         <h2>{person.name}</h2>
//         {/* display marks */}
//         {
//           marks.map((mark,index)=><h2 key={index}>{mark}</h2>)
//         }

//         <button onClick={test1} className='bg-amber-100 text-4xl text-black'>click</button>
//         <button onClick={()=>test2(100)} className='bg-amber-100 text-4xl text-black'>click</button>
//       </div>
//     )
// }

export default App;

//JSX -- java script syntax extention