import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faHome, faAddressBook, faCamera, faFolder, faAddressCard, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='header'>
      <div><img src="assets/pwc.png" alt="" style={{ width: "100px" }} /></div>
      <div>
        <h1><span> </span>PwC Student Website</h1>
      </div>
      <div>
        <Link className='link' to="/"> Home </Link> |
        <Link to="/contactus"> Contact Us </Link> |
        {/* <Link to="/gallery">  Gallery</Link> | */}
        <Link to="/applicationform">   Application Form </Link> |
        <Link to="/about">  About Us </Link> |
        {/* <Link to="/studentsdata">  Students Data  </Link> | */}
        {/* <Link to="/recruitmentform">  Recruitment form  </Link> | */}
        <Link to="/posts"> Posts </Link> |
        <Link to="/users"> Users </Link> |
        <Link to="/todos"> Todos </Link> |
        <Link to="/login"> Login </Link> |
        <Link to="/careerform"> Career Form </Link>

        {/* <a id="darkMode"> <img src="moon.png"/></a> */}
      </div>
    </header>
  )
}

export default Header