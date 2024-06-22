import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"

const navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Program</a></li>
        <li><a href="/">Campus</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">About Us</a></li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default navbar
