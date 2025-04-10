import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function tollPass(){
    if(count==20)
      setCount(1);
    else
    setCount(count+1);
  }

  function tollBreak()
  {
    if(count==0)
      setCount(0);
    else
    setCount(count-1);
  }

function tollRefresh()
  {
      setCount(0);
  }
  return (

   <div className='dabba'>
    <h1>TOLL COUNTER: {count}</h1>
      <button onClick={tollPass}>PASS</button>
      <br />
      <button onClick={tollBreak}>BREAK</button>
      <br />
      <button onClick={tollRefresh}>REFRESH</button>
    
   </div>
      
  )
}

export default App
