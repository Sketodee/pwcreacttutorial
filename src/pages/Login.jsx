import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            navigate("/")
        }else {
            alert("fill in all details ")
        }
   
    }
  return (
    <div className='container'>
        <form action="" id='myForm'>
            <label htmlFor=""> Email </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor=""> Password </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button className="btn" type="submit" onClick={handleSubmit}> SUBMIT </button>
        </form>
    </div>
  )
}

export default Login