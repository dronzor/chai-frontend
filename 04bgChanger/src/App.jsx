import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("gray")

  return (
    <div>
      <div className='w-full h-screen duration-100' style={{backgroundColor:color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-44 inset-x-10 px-2 '>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
