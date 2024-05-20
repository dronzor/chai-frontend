import { useCallback, useState,useEffect,useRef } from 'react'

function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setpassword]=useState("")

  //useref hook
  const passwordRef=useRef(null)

  const passwordGeneartor=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*()-+[]{}`~?"

    for (let i = 0; i <= length; i++) {
      let char= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)

  },[length,numberAllowed,charAllowed,setpassword])

  const copyPasswordToClipboard=useCallback(()=>{
    //select the copy password to clipboard
    passwordRef.current?.select()
    //select the copy password to clipboard but for some range
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGeneartor()
  },[length,numberAllowed,charAllowed,passwordGeneartor])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-32 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>password Geneartors </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref={passwordRef}
             />
            <button onClick={copyPasswordToClipboard}className='outline-none bg-blue-600 py-1 px-3  text-white shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
            <label >length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={(e)=>
            setnumberAllowed((prev)=>!prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={(e)=>
            setcharAllowed((prev)=>!prev)}
            />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>

      </div>

        
    </>
  )
}

export default App
