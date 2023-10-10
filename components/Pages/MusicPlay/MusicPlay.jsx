import React, { useState } from 'react'
import "./musicplay.css"
import {spotify, youtube, deezer, tidal, applemusic, amazon, audiomack, pandora} from "./musicplayImports"
import {cover, dance, mancover, superman} from "../../Homepage/homepageimports"
import { useParams } from 'react-router'

const MusicPlay = () => {
    const [music, setMusic]  = useState([
        {
            id: "justgettingstarted",
            title: "Just Getting Started",
            image: cover,
            spotify: "https://open.spotify.com/album/0KaUlxWjU0GrSkbchO2HOd",
            audiomack: "https://audiomack.com/cruzzyvibee/album/just-getting-started-1",
            applemusic: "https://music.apple.com/us/album/just-getting-started/1633596797",
            amazon: "https://music.amazon.com/albums/B0B624126R",
            deezer: "https://www.deezer.com/us/album/333864107?deferredFl=1",
            pandora: "https://www.pandora.com/artist/cruzzy-vibee/just-getting-started/AL4g53vdrXPpJ7w",
            youtube: "https://www.youtube.com/@cruzzyvibee"
        },

        {
            id: "man",
            title: "M.A.N",
            image: mancover,
            spotify: "https://open.spotify.com/album/7bSCq1Crlh263nHPqv21CD",
            audiomack: "https://audiomack.com/cruzzyvibee/song/man",
            applemusic: "https://music.apple.com/us/album/m-a-n-single/1684531439",
            amazon: "https://music.amazon.com/albums/B0C3J5NXPH",
            deezer: "https://www.deezer.com/us/album/434045157?deferredFl=1",
            pandora: "https://www.pandora.com/artist/cruzzy-vibee/just-getting-started/AL4g53vdrXPpJ7w",
            youtube: "https://www.youtube.com/@cruzzyvibee"
        },

        {
            id: "dance",
            title: "Dance",
            image: dance,
            spotify: "https://open.spotify.com/artist/5cDsFEqF4ogLS6spA8nIpv",
            audiomack: "https://audiomack.com/cruzzyvibee/song/dance",
            applemusic: "https://music.apple.com/us/artist/cruzzy-vibee/1633596539",
            amazon: "https://music.amazon.com/artists/B0B621DD97/cruzzy-vibee",
            deezer: "https://www.deezer.com/us/artist/175844517?deferredFl=1",
            pandora: "https://www.pandora.com/artist/cruzzy-vibee/AR2PJjvlmg3pbl9",
            youtube: "https://www.youtube.com/@cruzzyvibee"
        },

        {
            id: "superman",
            title: "Superman",
            image: superman,
            spotify: "https://open.spotify.com/artist/5cDsFEqF4ogLS6spA8nIpv",
            audiomack: "https://audiomack.com/cruzzyvibee/song/superman",
            applemusic: "https://music.apple.com/us/artist/cruzzy-vibee/1633596539",
            amazon: "https://music.amazon.com/artists/B0B621DD97/cruzzy-vibee",
            deezer: "https://www.deezer.com/us/artist/175844517?deferredFl=1",
            pandora: "https://www.pandora.com/artist/cruzzy-vibee/AR2PJjvlmg3pbl9",
            youtube: "https://www.youtube.com/@cruzzyvibee"
        }
    ])

    const {id} = useParams();
    const newMusicArray = music.filter((music) => music.id === id)
    console.log(newMusicArray)

  return (
    <div className='header-section musicplaydiv'>

        {newMusicArray.map((musiclist) => {
            return (
        <>
        <div className='songdetails'>
            <img src= {musiclist.image} alt="" />
            <p>{musiclist.title}</p>
        </div>

        <div className='musicplay-links'>
            <a href={musiclist.spotify} target='_blank' > <div> <img src={spotify} alt="" /> <p>Listen on Spotify</p> </div> </a>
            <a href={musiclist.applemusic} target='_blank' > <div> <img src= {applemusic} alt="" /> <p>Listen on Apple Music</p> </div> </a>
            <a href= {musiclist.audiomack} target='_blank' > <div> <img className='audiomack' src= {audiomack} alt="" /> <p>Listen on Audiomack</p> </div> </a>
            <a href= {musiclist.amazon} target='_blank' > <div> <img src= {amazon} alt="" /> <p>Listen on Amazon</p> </div> </a>
            <a href={musiclist.deezer} target='_blank' > <div> <img src= {deezer} alt="" /> <p>Listen on Deezer</p> </div> </a>
            <a href= {musiclist.pandora} target='_blank' > <div> <img src= {pandora} alt="" /> <p>Listen on Pandora</p> </div> </a>
            <a href= {musiclist.youtube} target='_blank' > <div> <img src= {youtube} alt="" /> <p>Listen on Youtube</p> </div> </a>
            
        </div>
        </>

            )
        })}
    </div>
  )
}

export default MusicPlay