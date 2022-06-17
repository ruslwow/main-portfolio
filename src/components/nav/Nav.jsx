import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
 import {BiMessage} from 'react-icons/bi'

const Nav = () => {
  return (
   <nav>
       <a href="#header"><AiOutlineHome/></a>
       <a href="#about"><AiOutlineUser/></a>
       <a href="#experience"><BiBook/></a>
       <a href="#contact"><BiMessage/></a>

   </nav>
  )
}

export default Nav
