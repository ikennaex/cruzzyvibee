import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import {BsInstagram} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"
import {BsSpotify} from "react-icons/bs"
import {SiApplemusic} from "react-icons/si"
import {SiAudiomack} from "react-icons/si"
import {SiDeezer} from "react-icons/si"
import {SiAmazon} from "react-icons/si"
import {SiPandora} from "react-icons/si"

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='footer-div'>
        <p className='forbookings'>FOR BOOKINGS:</p> 
        <p> Vibeenation01@gmail.com </p>

        <div className='music-logos'>
          <a href="https://youtube.com/@cruzzyvibee?si=tTDBnRGnR6AXIieh" rel="noreferrer" target='_blank'> <AiFillYoutube size={30} /> </a>
          <a href="https://www.instagram.com/cruzzywithavibe?igsh=ZGltdnRoaGx3Z2hs" rel="noreferrer" target='_blank'> <BsInstagram size={30} /> </a>
          <a href="https://www.tiktok.com/@cruzzyvibee?_t=8gF8pzEzd1u&_r=1" rel="noreferrer" target='_blank' > <FaTiktok size={30} /> </a>
          <a href="https://spotify.link/uIjTx4VrDDb" rel="noreferrer" target='_blank' > <BsSpotify size={30} /> </a>
          <a href="https://music.apple.com/us/artist/cruzzy-vibee/1633596539" rel="noreferrer" target='_blank' > <SiApplemusic size={30} /> </a>
          <a href="https://audiomack.com/cruzzyvibee" rel="noreferrer" target='_blank' > <SiAudiomack size={30} /> </a>
          <a href="https://deezer.page.link/819y1ZMCE9dnFsGF8" rel="noreferrer" target='_blank' > <SiDeezer size={30} /> </a>
          <a href="https://music.amazon.com/artists/B0B621DD97?ref=dm_sh_XfH2Ec8fVNuWKaAuGV7dgd7YJ" rel="noreferrer" target='_blank' > <SiAmazon size={30} /> </a>
          <a href="https://pandora.app.link/CJiA9ZisDDb" rel="noreferrer" target='_blank' > <SiPandora size={30} /> </a>

        </div>

        <p>© {date} Cruzzy Vibee. All Rights Reserved</p>
        <p>crafted by <a href='https://www.instagram.com/motivoinc/' rel="noreferrer" target='_blank'> <span className='motivo'> motivo </span> </a> </p>
        
    </div>
  )
}

export default Footer