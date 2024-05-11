import { useState } from 'react'
import './App.css'

function App() {
  //react hooks 
  let [counter,setCounter]=useState(15)
  //let counter=5
  const addValue=()=>{
    console.log("clicked",counter);
    counter+=1
    setCounter(counter)
  }

  const removeValue=()=>{
    setCounter(counter-=1)
  }

  return (
    <>
      //by normal variable like counter we can't update multiple values like as shown below , but using hooks we can update multiple values at a same time, thats the main power of using react over normal javascript

      <h1>chai aur react</h1>
      <h2>couter value:{counter}</h2>

      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={removeValue}>desc value{counter}</button>

    </>
  )
}

export default App
