import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c5x4kbm', 'template_j9ym8bh', form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form for any opportunities.</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input className="name" type="text" placeholder='Your Name' name="from_name" />
                <input className="email" type="email" placeholder='Your Email'  name="from_email" />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='Send' onClick={()=>{
                   console.log(process.env.REACT_APP_PUBLIC_KEY);
                  console.log("submit clicked");
                }}>Submit</button>
                
            </form>
        </div>
    </section>
  )
}

export default Contact