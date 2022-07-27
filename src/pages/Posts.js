import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [])

  return (
    <div className='homeContainer'>
      <h2> Hi, these are my posts</h2>
      <div className='grid'> 
      {posts.map(post => {
        return (
          <div className='post-card' key={post.id}>
            <h2>({post.id}). {post.title} </h2>
            <p>{post.body.slice(0,60)}... <Link to={`/singleblogpage/${post.id}`}> <a> read more </a> </Link> </p>
          </div>
        )
      })}
      </div>

      {/* <table width="100%" > 
                <thead style={{background: "#52ab98", color: "white"}}>
                <tr> 
                    <td> <b> ID</b> </td>
                    <td> <b> TITLE</b> </td>
                    <td> <b> BODY </b> </td>
                </tr>
                </thead>
                {posts.map((post) => {
                return (
                   <tbody key={post.id}>
                <tr> 
                    <td> {post.id}</td>
                    <td> {post.title} </td>
                    <td> {post.body.slice(0,50)} </td>
                </tr>
                </tbody>
                )
            })} 
            </table> */}
    </div>
  )
}

export default Posts
