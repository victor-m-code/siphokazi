import React from 'react'
import { Link } from 'react-router'
import  logo  from '../assets/img/logo.png'

export default function Home() {
  return (
    <section className='home'>
      <div className="logo-img">
        <img src={logo} alt="Logo"  width={200}/>
      </div>
      <div className="home-intro">
        <h1>Event Decor</h1>
      </div>
      <div className="sub-intro">
        <h5>
          Preparing a beautiful setup with the most stylish equipment from our decor services. Making your event perfect with an incredible touch.
        </h5>
        <div className="sub-btns">
          <Link to={'/about'}><h6>About Us</h6></Link>
          <Link to={'/about'}><h6>Contact Us</h6></Link>
        </div>
      </div>
    </section>
  )
}
