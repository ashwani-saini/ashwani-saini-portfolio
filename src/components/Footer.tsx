import React from "react";
import CallIcon from '@mui/icons-material/Phone';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import GmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="tel:9837765511" target="_blank" rel="noreferrer"><CallIcon/></a>
        <a href="https://wa.me/919837765511" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
        <a href="https://mail.google.com/mail/?view=cm&to=ashwanisaini375@gmail.com&su=Enquiry%20from%20your%20portfolio&body=Hi%20Ashwani%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AThanks!" target="_blank" rel="noreferrer"><GmailIcon/></a>
        <a href="https://www.instagram.com/ashwani__saini?igsh=M213YXB6cmoweGM3" target="_blank" rel="noreferrer"><InstagramIcon/></a>
        <a href="https://www.linkedin.com/in/ashwani-kumar-87835821b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by Ashwani Kumar with 💜</p>
    </footer>
  );
}

export default Footer;