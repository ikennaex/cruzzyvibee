import React from "react";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import TypeWriterEffect from 'react-typewriter-effect';

// Components
import LatestReleases from "./LatestReleases";
import Videos from "./Videos";

// Assets
import { mancover, cover, dance, vibe3, vibe2 } from "./homepageimports.js";
import "./homepage.css";

// Static data defined outside to prevent re-renders
const RELEASES_DATA = [
  { id: "justgettingstarted", title: "Just Getting Started", cover: cover, type: "Album" },
  { id: "man", title: "M.A.N", cover: mancover, type: "Song" },
  { id: "dance", title: "Dance", cover: dance, type: "Song" }
];

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="img-container">
        <img className="homepage-img" src={vibe2} alt="Hero Background" />
        <div className="homepage-textoverlay">
          <h2>
            <TypeWriterEffect
              textStyle={{ fontFamily: 'Manrope', fontSize: "50px", fontWeight: "900" }}
              startDelay={100}
              cursorColor="white"
              text="Just Getting Started"
              typeSpeed={200}
              hideCursorAfterText={true}
            />
          </h2>
          <p className="homepage-outnow fadein">OUT NOW</p>

          <Link to="music/justgettingstarted">
            <button className="stream-btn fadein">
              Stream now <BsPlayCircleFill size={30} /> 
            </button> 
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fadein">
        <h2>ABOUT</h2>
        <div className="aboutsectiondivs">
          <div className="aboutsectionimg-div">
            <img src={vibe3} alt="Cruzzy Vibe Profile" />
          </div>

          <div className="abouttext-div">
            <p>
              Cruzzy Vibe also known as Gabriel Osaretin Osamede is an afrobeat
              artist known by his unique style of flow and melody. Is a fast
              rising Afro artist who is ready to take music to the next level. He
              went from free-styling on the street to creating his own style and
              sound called ‘Afro Vibe’. Afro vibe is a different flow of sound
              whereby the artist just vibe and let the beat sink in. “When
              creating music I never tend to worry about the obstacles. I just
              intend to create magic and give my fans the best sound. “You’ll get
              to be inspired and motivated from my sound because when making music
              I put in all my heart and my soul in a song.”Having the gift and
              talent to create a unique sound has really been a blessing to me and
              also a big impact in my life as an artist.” “One thing that I would
              like listeners to know is that music is a powerful art form that has
              the ability to evoke emotions, bring people together, and transcend
              cultural and linguistic barriers. Whether you are a casual listener
              or a serious musician, there is something in music for everyone, and
              it can be a source of joy, inspiration, and personal growth. So,
              keep listening, exploring, and enjoying the many different sounds
              and styles that my music has to offer”.
            </p>
          </div>
        </div>
        <Link to="/about">
          <button className="viewmorebtn">View More</button>
        </Link>
      </section>

      {/* Latest Releases Section */}
      <section className="header-section">
        <p className="latest-releaestxt">
          <span className="latest">LATEST</span> RELEASES
        </p>

        <div className="latest-songs">
          {RELEASES_DATA.map((music) => (
            <LatestReleases
              key={music.id}
              id={music.id}
              cover={music.cover}
              title={music.title}
              type={music.type}
            />
          ))}
        </div>

        <div className="latestreleasebtndiv">
          <Link to="/music">
            <button className="viewmorebtn">View More</button>
          </Link>
        </div>
      </section>

      {/* Videos Section */}
      <Videos />
    </>
  );
};

export default Homepage;