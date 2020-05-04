import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>This is ME!</strong> Me and my projects!
        <br />
        Learn more about me and what I'm about, and feel free to reach out
        through social media or email if you have any questions or would like to
        hire me!
        <br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
