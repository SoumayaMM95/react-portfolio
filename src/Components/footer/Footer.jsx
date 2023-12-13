import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="http://SoumayaMM95.github.io/react-portfolio" className='footer__logo'>LOGO</a>
      <ul className='sections__links'>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#sevices">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#testimonials">Testimonials</a></li> */}
          <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>© ALL RIGHTS RESERVED. Made with By SOUMAYA MAHDI</small>
      </div>
    </footer>
  )
}

export default Footer