import React from 'react'
import './intro.css';
import bg from '../../assets/info bg.png';
import btnImg from '../../assets/hireme.png';
import Resume from '../../assets/Yash Shah Resume.pdf'

const into = () => {
  return (
    <section id="intro">
      <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Yash</span> <br /> Website Designer</span>
      <p className="introPara">I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites.</p>
      <button className="btn" ><img src={btnImg} alt="download resume" className='btnImg'  /><a href={Resume} download={Resume} style={{textDecoration:"none",color:"black"}}>Resume  </a></button>
      
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default into