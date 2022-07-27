import React , {useState} from 'react'
import Button from './Button'

const Counter = () => {

  const [count, setCount] = useState(0); 


  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count -1)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}> Increase me by 1 </button> 
    </div>
  )
}

export default Counter