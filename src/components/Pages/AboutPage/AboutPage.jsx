import React from 'react'
import { vibe1, vibe2, vibe3, vibe4, vibe5, vibe6 } from '../../Homepage/homepageimports';
import "./aboutpage.css"

const AboutPage = () => {
  return (
    <>
    <div className='aboutpage-maindiv'>
      <div className='aboutpage-imgdiv'>
        <img src= {vibe1} alt="" />
      </div>

      <div className='aboutpage-textdiv'>
        <h2>ABOUT</h2>
        <p>
          Cruzzy Vibe also known as Gabriel Osaretin Osamede is an afrobeat
          artist known by his unique style of flow and melody. Is a fast rising
          Afro artist who is ready to take music to the next level. He went from
          free-styling on the street to creating his own style and sound called
          ‘Afro Vibe’. Afro vibe is a different flow of sound whereby the artist
          just vibe and let the beat sink in. “When creating music I never tend
          to worry about the obstacles. I just intend to create magic and give
          my fans the best sound. “You’ll get to be inspired and motivated from
          my sound because when making music I put in all my heart and my soul
          in a song.”Having the gift and talent to create a unique sound has
          really been a blessing to me and also a big impact in my life as an
          artist.” “One thing that I would like listeners to know is that music
          is a powerful art form that has the ability to evoke emotions, bring
          people together, and transcend cultural and linguistic barriers.
          Whether you are a casual listener or a serious musician, there is
          something in music for everyone, and it can be a source of joy,
          inspiration, and personal growth. So, keep listening, exploring, and
          enjoying the many different sounds and styles that my music has to
          offer”.
        </p>
      </div>
    </div>

    <div className='gallery-maindiv'>
      <h2>GALLERY</h2>

      <div className='galleyimg-div'>
        <img src= {vibe2} alt="cruzzyvibee" />
        <img className='vibe3' src= {vibe3} alt="cruzzyvibee" />
        {/* <img src= {vibe1} alt="cruzzyvibee" /> */}
        <img className='wide-vibe5' src= {vibe4} alt="cruzzyvibee" />
        <img src= {vibe5} alt="cruzzyvibee" />
        <img className='wide-vibe6' src= {vibe6} alt="cruzzyvibee" />
      </div>
    </div>
    </>
  );
}

export default AboutPage