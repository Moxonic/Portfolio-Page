import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {TiUser} from 'react-icons/ti'
import {MdConnectWithoutContact, MdHomeRepairService} from 'react-icons/md'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {BsCollectionFill} from 'react-icons/bs'


const Nav = () => {
  return (
    <nav>
      <a href='#home'><AiOutlineHome/></a>
      <a href='#about'><TiUser/></a>
      <a href='#experience'><BsCollectionFill/></a>
      <a href='#services'><MdHomeRepairService/></a>
      <a href='#contact'><MdOutlineConnectWithoutContact/></a>
      
    </nav>
  )
}

export default Nav