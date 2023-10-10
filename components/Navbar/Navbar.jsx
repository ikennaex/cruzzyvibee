import React from 'react'
import "./navbar.css"
import {instagram, tiktok} from "./navImports"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoTiktok} from "react-icons/bi"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <Link to = "/">Cruzzy Vibee</Link>
        </div>

        <div className='links'>
          <a href='https://instagram.com/cruzzywiththavibe?igshid=MzRlODBiNWFlZA==' target='_blank'>
            <AiOutlineInstagram className='instagram' size={30} />
          </a>

          <a href='https://www.tiktok.com/@cruzzyvibee?_t=8gF8pzEzd1u&_r=1' target='_blank'>
            <BiLogoTiktok size={30} />
          </a>
        </div>
    </div>
  )
}

export default Navbar