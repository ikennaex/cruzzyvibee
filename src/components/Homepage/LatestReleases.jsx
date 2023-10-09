import React from 'react'
import { Link } from 'react-router-dom'

const LatestReleases = ({cover, title, type, id}) => {
  const value = `music/${id}`
  return (
    <div className='music-covers'>
      <Link to = {value}>

        <img className='album-cover' src={cover} alt="" />
      </Link>
        <p className='music-title'>{title}</p>

        <p className='music-type'>{type}</p>
    </div>
  )
}

export default LatestReleases