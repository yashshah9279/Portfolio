import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import FullStackDev from '../../assets/full stack logo.jpg';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
I am a focused undergrad Electronics and Communication Engineering student at NIT Surat graduating in 2025 with expertise in web development technologies such as ReactJS, NodeJS, and PostgreSQL. I exceled as a Web Developer Intern at Sahaj-anand Charitable Trust during Summer'23, applying my skills in WordPress and project management. My proactive approach and leadership roles define my commitment to excellence.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarimg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>
Crafting intuitive and visually engaging user interfaces, I prioritize user experience, employing design thinking and usability principles for effectiveness.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt=""WebDesign className="skillBarimg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>I design visually appealing and user-friendly websites using HTML,CSS and Javascript, ensuring a seamless and engaging online experience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={FullStackDev} alt="FullStackDevelopment" className="skillBarimg" />
                <div className="skillBarText">
                    <h2>Full Stack Development</h2>
                    <p>
I utilize HTML, CSS, JS, NodeJS, ExpressJS, PostgreSQL, and GitHub for comprehensive full-stack development, ensuring robust and dynamic web applications.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills