import React, { useState } from 'react'
import "./music.css"
import {cover, dance, mancover, superman} from "../../Homepage/homepageimports"
import MusicCover from './Musiccover/MusicCover'
import MusicPlay from '../MusicPlay/MusicPlay'

const Music = () => {
    const [musicList, setMusicList] = useState([
        {
            id: "justgettingstarted",
            cover: cover,
            title: "Just Getting Started", 
        },
        {
            id: "man",
            cover: mancover,
            title: "M.A.N", 
        },
        {
            id: "dance",
            cover: dance,
            title: "Dance", 
        },
        {
            id: "superman",
            cover: superman,
            title: "Superman", 
        }
    ])

  return (
    <div className='musicplay-section'>
        <p className='music-latest-release'>LATEST RELEASES</p>

        <div className='musiccovertop'>
            {musicList.map((music) => {
                return (
                    <MusicCover
                    id = {music.id}
                     cover = {music.cover}
                     title = {music.title}
                    />
                )
            })}

        </div>
    </div>
  )
}

export default Music