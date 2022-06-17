import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../my_img/cv_img.jpg"

const Header = () => {
  return (
    <header id='header'>
        <div className="container header__container">
            <h5>Hello I`m</h5>
            <h1>Ruslan Storonskyi</h1>
            <h5 className="text-light"> Junior Frontend Deweloper</h5>
            <CTA />
            <div className="me">
                <img className='me_foto' src={ME} alt="me" />
            </div>
            <a href="#footer" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
