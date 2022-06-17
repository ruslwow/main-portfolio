import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Foooter = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='footer__logo'>R.S_79</a>
      <ul className='permalinks'>
        <li><a href="#header">Header</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expereince</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#footer">Footer</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; R.S_79 Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Foooter
