import React from 'react'
import './footer.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
const year=new Date().getFullYear();
const Footer = () => {
  return (
    <footer className='footer'>
        Copyright &#169; {year}
        {/* <div className="links">
                    <img src={FacebookIcon} alt="Facebook icon" className="link" />
                    <img src={InstagramIcon} alt="Instagram icon" className="link" />
                </div> */}
    </footer>
  )
}

export default Footer