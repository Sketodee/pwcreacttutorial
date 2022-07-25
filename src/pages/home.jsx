import React from 'react'
import "./../components/Home.css"

const Home = () => {
  return (
    <section className="container">
      <h2>PwC Auditing Firm</h2>
      <p>
        This is my first website created during my time at PwC, learning
        software development
      </p>
      <img src="pwc.jpg" width="200" height="200" alt="" />
      <h3>Services Offered By PwC</h3>
      <ul>
        <li>Corporate Auditing</li>
        <li>Auditing Software Solutions</li>
        <li>Project Management</li>
        <li>Software Training</li>
      </ul>
    </section>
  )
}

export default Home