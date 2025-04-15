import React from 'react'
import  logo  from '../assets/img/logo.png'
import  founder  from '../assets/img/founder.jpg'

export default function About() {
  return (
    <section className='about'>
      <h3>About</h3>
      <div className="about-intro">
        <div className="about-us bg-txt">
          <img src={logo} alt="Logo" width={180}/>
          <div>
            <h5>Events Decoration Specialist</h5>
          </div>
        </div>
        <div className="vision bg-txt">
          <h4>Our Vision</h4>
          <p>
            To be known for exceptional services, imaginative designs, and creating lasting memories. We aim to illuminate every celebration with beauty, joy, and a spark that lingers long after the lights go out.
          </p>
        </div>
        <div className="mission bg-txt">
          <h4>Our Mission</h4>
          <p>
            To transform ordinary spaces into unforgetteble experiences through innovative, elegant, and personaliezed decor. We are passionate about bringing our clients' visions to life with creativity, precision, and a touch of magic that lights up every event.
          </p>
        </div>
        <div className="founder">
          <img src={founder} alt="Siphokazi" />
          <div className='bg-txt'>
            <h3>Miss Siphokazi</h3>
            <h5>Founder</h5>
            <br />
            <div>
              <a href="mailto:" className='send-mail'>Send Email <i className='fa fa-envelope'></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
