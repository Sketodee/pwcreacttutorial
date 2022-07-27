import React from 'react'
import "./../components/Home.css"

const Home = () => {
  return (
    <section className="homeContainer">
      <h2>PwC Auditing Firm</h2>
      <p>
        This is my first website created during my time at PwC, learning
        software development
      </p>
      <div className='headerHero'>
        <img src="assets/benefit.svg" width="50%"  alt="" />
        <div style={{width: "40%"}}>
          <h3>Benefits Offered By Bootcamp </h3>
          <ul>
            <li>Employment contract for participants with exceptional performance</li>
            <li>An opportunity to be placed in PwC's pool of software engineering professionals for future engagements</li>
            <li>An opportunity to acquire high demand technical skills and become readily employable. </li>
            <li>Stipends that cover basic expenses during the program</li>
          </ul>
        </div>
      </div>

      <div className='headerHero'>
      <div style={{width: "40%", height: "70%"}}>
          <h3>Benefits Offered By Bootcamp </h3>
          <ul>
            <li>Employment contract for participants with exceptional performance</li>
            <li>An opportunity to be placed in PwC's pool of software engineering professionals for future engagements</li>
            <li>An opportunity to acquire high demand technical skills and become readily employable. </li>
            <li>Stipends that cover basic expenses during the program</li>
          </ul>
        </div>
        <img src="assets/long2.png" width="50%"  alt="" />
      </div>
    </section>
  )
}

export default Home