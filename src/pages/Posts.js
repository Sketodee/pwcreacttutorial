import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  })

  return (
    <div className='homeContainer'>
      <h2> Hi, these are my posts</h2>
      <div className='grid'>
        {posts.map(post => {
          return (
            <div className='post-card' key={post.id}>
              <h2>({post.id}). {post.title} </h2>
              <p>{post.body.slice(0, 60)}... <Link to={`/singleblogpage/${post.id}`}>  read more </Link> </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
