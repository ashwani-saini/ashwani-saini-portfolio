import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.instagram.com/ashwani__saini?igsh=M213YXB6cmoweGM3" target="_blank" rel="noreferrer"><InstagramIcon/></a>
        <a href="https://www.linkedin.com/in/ashwani-kumar-87835821b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by Ashwani Kumar with 💜</p>
    </footer>
  );
}

export default Footer;