import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/Medicare.PNG';
import Portfolio2 from '../../assets/Gymholics.PNG';
import Portfolio3 from '../../assets/Restaurant.png';
import Portfolio4 from '../../assets/Medicaredashboard.PNG';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to smallest details </span>
        <div className="worksImgs">
       
        <div className="portfolio1">
        <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            <p className="portfolioText"> 
            <a href="https://medicareyhsfrontend.netlify.app" className="gitLink" style={{textDecoration:"none",color:"white"}}>Medicare - Frontend</a>
            </p>
        </div>
        <div className="porfolio4">
    <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
    <p className="portfolioText">
    <a href="https://medicareyhsdashboard.netlify.app" className="gitLink" style={{textDecoration:"none",color:"white"}}>Medicare - Dashboard
    </a>
   </p>
</div>
        <div className="porfolio2">
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
          <p className="portfolioText">
          <a href="https://gymholics.netlify.app" className="gitLink" style={{textDecoration:"none",color:"white"}}>Gymholics
          </a>
          </p>
        </div>

 <div className="porfolio3">
   <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
   <p className="portfolioText">
      <a href="https://reasturantyhs.netlify.app" className="gitLink" style={{textDecoration:"none",color:"white"}}>Restaurant Website
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