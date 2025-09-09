import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Phone';
import GmailIcon from '@mui/icons-material/Email';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import ProfilePhoto from '../assets/images/Profile-Photo.jpeg'

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePhoto} alt="Avatar" width="100%" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="tel:9837765511" target="_blank" rel="noreferrer"><CallIcon/></a>
            <a href="https://wa.me/919837765511" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
            <a href="https://mail.google.com/mail/?view=cm&to=ashwanisaini375@gmail.com&su=Enquiry%20from%20your%20portfolio&body=Hi%20Ashwani%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AThanks!" target="_blank" rel="noreferrer"><GmailIcon/></a>
            <a href="https://www.instagram.com/ashwani__saini?igsh=M213YXB6cmoweGM3" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/ashwani-kumar-87835821b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ashwani Kumar</h1>
          <p>UI Developer</p>
          <a href="/Ashwani-Kumar-2025.pdf" download="Ashwani-Kumar-2025.pdf" target="_blank" className="download-cv">Download CV</a>

          <div className="mobile_social_icons">
            <a href="tel:9837765511" target="_blank" rel="noreferrer"><CallIcon/></a>
            <a href="https://wa.me/919837765511" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
            <a href="https://mail.google.com/mail/?view=cm&to=ashwanisaini375@gmail.com&su=Enquiry%20from%20your%20portfolio&body=Hi%20Ashwani%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AThanks!" target="_blank" rel="noreferrer"><GmailIcon/></a>
            <a href="https://www.instagram.com/ashwani__saini?igsh=M213YXB6cmoweGM3" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/ashwani-kumar-87835821b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;