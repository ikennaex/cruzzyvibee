import React from 'react'

const Videos = () => {
  return (
    <div className="header-section">
    <p className="videos-text">VIDEOS</p>

    <div className="music-video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/x08lI4vsQrc?si=_0bpRl0QUexXd_r5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/sfv-RdXJbgs?si=bMG5CW393jvqV1Dr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>

    <div className="latestreleasebtndiv">
    {/* <button className="viewmorebtn">View More</button> */}
    </div>

  </div>
  )
}

export default Videos