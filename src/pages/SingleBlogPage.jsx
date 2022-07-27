import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const SingleBlogPage = () => {
    let {id} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.json())
          .then(post => setPost(post))
      })

  return (
    <div className='homeContainer'>
        <h2>Blog {id} </h2>
        <div className='post-card' key={post.id}>
            <h2>({post.id}). {post.title} </h2>
            <p>{post.body} </p>
          </div>
    </div>
  )
}

export default SingleBlogPage