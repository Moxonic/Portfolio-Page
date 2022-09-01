import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {TiUser} from 'react-icons/ti'
import {MdHomeRepairService} from 'react-icons/md'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {BsCollectionFill} from 'react-icons/bs'
import { useState } from 'react'      // to scroll to from navbaricons

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#header' onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active': ''} ><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><TiUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsCollectionFill/></a>
      {/* <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><MdHomeRepairService/></a> */}
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav