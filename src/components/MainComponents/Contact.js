import React from 'react';
import Heading from './../Heading/Heading';
import '../../styles/Contact.scss';
import SocialMedia from './SocialMedia/SocialMedia';


function Contact() {
  return(
    <div className="Contact">
      <Heading title="Contact Me"/>
      <SocialMedia />
      <form>
        <div>
          <label htmlFor="name">Full Name:</label>  
          <input 
            type="text" 
            required="require"
            />
        </div>
        <div>
          <label htmlFor="email">Email:</label>  
          <input 
            type="email" 
            required="require"
            />
        </div>
        <div>
          <label htmlFor="message">Message:</label>  
          <textarea placeholder={'Enter your message here'} rows="20" cols="80">
          
          </textarea>
        </div>
          <div className="submit-btn">
            <input 
              type="submit" 
              value="Send"
            />
          </div>
        </form>
    </div>
  );
}

export default Contact;
