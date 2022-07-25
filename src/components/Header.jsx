import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div><img src="assets/pwc.png" alt="" style={{width: "100px"}} /></div>
      <div>
        <h1><span> </span>PwC Student Website</h1>
      </div>
      <div>
        <Link to="/"> Home </Link> |
        <Link to="/contactus"> Contact Us </Link> |
        <Link to="/gallery"> Gallery</Link> |
        <Link to="/applicationform"> Application Form </Link> |
        <Link to="/about"> About Us </Link> |
        <Link to="/studentsdata"> Students Data  </Link>
        {/* <a id="darkMode"> <img src="moon.png"/></a> */}
      </div>
    </header>
  )
}

export default Header