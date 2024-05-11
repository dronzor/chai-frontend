import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'

function App() {
  const [count, setCount] = useState(0)
  //concept of props
  let myObj={
    name:"avijit",
    age:15
  }
  let newArr=[1,3,4]


  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      {/* <Card channel="chai aur code " someObj={myObj} someArr={newArr}></Card>  passing props into card.jsx*/}
      <Card username="chai aur code" btntext="click me"></Card>
      <Card username="Avijit" btntext="click me"></Card>

    </>
  )
}

export default App
