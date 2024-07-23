import React from 'react'
import './skills.css';
import ProblemSolving from '../../assets/Problemsolving.jpg';
import WebDesign from '../../assets/website-design.png';
import FullStackDev from '../../assets/full stack logo.jpg';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">
        I am an Electronics and Communication Engineering Final year undergraduate at Sardar Vallabhbhai National Institute of Technology, graduating in 2025, with a current CGPA of 9.06. I specialize in web development technologies such as ReactJS, NodeJS, and PostgreSQL. During Summer 2023, I interned as a Web Developer at Sahaj-anand Charitable Trust, where I honed my skills in WordPress and project management. My commitment to excellence is reflected in my proactive approach and leadership roles, as well as my strong problem-solving abilities demonstrated by solving 650+ problems on GeeksforGeeks, 200+ problems on CodeChef, and 100+ problems on LeetCode.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={ProblemSolving} alt="UIDesign" className="skillBarimg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <p>
                    Solving complex algorithmic and programming challenges, I leverage my expertise in data structures, competitive programming, and problem-solving strategies to develop efficient and scalable solutions.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt=""WebDesign className="skillBarimg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>I design visually appealing and user-friendly websites using HTML, CSS, JavaScript, and ReactJS, ensuring a seamless and engaging online experience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={FullStackDev} alt="FullStackDevelopment" className="skillBarimg" />
                <div className="skillBarText">
                    <h2>Full Stack Development</h2>
                    <p>
                    I utilize HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, PostgreSQL, MongoDB, and GitHub for comprehensive full-stack development, ensuring robust and dynamic web applications.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills