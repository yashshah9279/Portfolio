import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/Travel Tracker.png';
import Portfolio2 from '../../assets/TodoList.png';
import Portfolio3 from '../../assets/Restaurant.png';
import Portfolio4 from '../../assets/Snakegame.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to smallest details </span>
        <div className="worksImgs">
        <div className="porfolio3">
   <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
   <p className="portfolioText">
      <a href="https://github.com/yashshah9279/restaurant.git" className="gitLink" style={{textDecoration:"none",color:"white"}}>Restaurant Website
      </a>
    </p>
</div>
        <div className="portfolio1">
        <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            <p className="portfolioText"> 
            <a href="https://github.com/yashshah9279/WorldTravelTracker.git" className="gitLink" style={{textDecoration:"none",color:"white"}}>Travel Tracker</a>
            </p>
        </div>
        <div className="porfolio2">
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
          <p className="portfolioText">
          <a href="https://github.com/yashshah9279/To-Do-list.git" className="gitLink" style={{textDecoration:"none",color:"white"}}>To Do list
          </a>
          </p>
        </div>
<div className="porfolio4">
    <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
    <p className="portfolioText">
    <a href="https://github.com/yashshah9279/Snaketheog.git" className="gitLink" style={{textDecoration:"none",color:"white"}}>Snake Game
    </a>
   </p>
</div>
        
    
            {/* <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio6" className="worksImg" /> */}
        </div>   
        {/* <button className="worksBtn">See more</button> */}
    </section>
  );
}
export default Works