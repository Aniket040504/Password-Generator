import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setPassword]=useState("")
  
  const passGen=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+="!@#$%^&*~=+{}"

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()* str.length + 1)
      pass=str.charAt(char)
    }

    setPassword(pass)
    
  },[length,numberAllowed,charAllowed,password])

  return (
    <>
    <div className='w-full max-w-md px-4 py-3 mx-auto my-8 bg-gray-800 text-orange-400 rounded-lg shadow-md'>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        /> 
        <button className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'>copy</button>
      </div>
    </div>
    </>
  )
}

export default App
