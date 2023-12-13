import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodepen} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div>
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/soumaya-mahdi-03/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/SoumayaMM95" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://codepen.com" target="_blank" rel="noreferrer"><SiCodepen /></a>
      </div>

      {/* <div className='header__socials_m'>
          <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
          <a href="https://codepen.com" target="_blank"><SiCodepen /></a>
      </div> */}
    </div>
  )
}

export default HeaderSocials
