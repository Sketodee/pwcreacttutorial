import React, {useState, useEffect} from 'react'

const Users = () => {

    const [users, setUsers] = useState([])

    const fetchUser = async () => {
        const res= await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
    }

    useEffect(() =>{
        fetchUser();
    }, [])
    
  return (
    <div className='container'>
        <h2> Hi, these are my users </h2>
        {users.map((user) => {
            return(
                <h4 key={user.id}> ({user.id}). {user.name} </h4>
            )
        })}
    </div>
  )
}

export default Users