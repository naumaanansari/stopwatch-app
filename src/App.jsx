import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
  let interval;
  if(running){
      interval =setInterval(()=>{
        setTime((prevTime)=>prevTime +10)
      }, 10)
   }
   else if(!running){
    clearInterval(interval);
   }
   return ()=> clearInterval (interval);
  }, [running])

  return (
    <>
      <h1>01-Stopwatch</h1>
      <div className="my-5 text-xl">
        <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}: </span>
        <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}: </span>
        <span>{("0" + Math.floor((time/10)%100)).slice(-2)} </span>
      </div>
      <div className="">
        {running ? (
             <button onClick={()=>{setRunning(false)}} className='mx-4'>Stop</button>
          ): (
             <button onClick={()=>{setRunning(true)}} className='mx-4'>Start</button>
          )
        }  
        
        
        <button onClick={()=>{setTime(0)}} className='mx-4'>Reset</button>
      </div>
    </>
  )
}

export default App
