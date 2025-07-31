import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Live Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://www.charlesgate.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.charlesgate.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Charlesgate</h2>
          </a>
          <p>
            Designed and developed a dynamic property-based website using
            HubSpot CMS. Built custom modules, reusable sections, and responsive
            layouts to enable easy content management and seamless user
            experience.
          </p>
        </div>
        <div className="project">
          <a href="https://zoftware.io/" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://zoftware.io/" target="_blank" rel="noreferrer">
            <h2>Zoftware</h2>
          </a>
          <p>
            Created a modern, responsive WordPress website for a B2B software
            provider. Implemented custom themes, service sections, and
            performance optimizations to support lead generation and business
            growth.
          </p>
        </div>
        <div className="project">
          <a href="https://sportshygiene.com/" target="_blank" rel="noreferrer">
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://sportshygiene.com/" target="_blank" rel="noreferrer">
            <h2>Sports Hygiene</h2>
          </a>
          <p>
            Developed a Shopify e-commerce website focused on sports hygiene
            products. Customized product pages, implemented clean and responsive
            design, and optimized user journey for a seamless shopping
            experience.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.peer-sphere.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.peer-sphere.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>PeerSphere</h2>
          </a>
          <p>
            Developed an educational website for school professional development
            using WordPress and Elementor. Crafted responsive pages, interactive
            layouts, and custom-designed sections to enhance user engagement.
          </p>
        </div>
        <div className="project">
          <a href="https://nooceptin.com/" target="_blank" rel="noreferrer">
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://nooceptin.com/" target="_blank" rel="noreferrer">
            <h2>Nooceptin</h2>
          </a>
          <p>
            Built a medicine e-commerce website on Shopify, focusing on smooth
            UI/UX, product management, and responsive layouts to facilitate
            hassle-free online purchases.
          </p>
        </div>
        <div className="project">
          <a
            href="https://peru-vulture-870890.hostingersite.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://peru-vulture-870890.hostingersite.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Peru Vulture</h2>
          </a>
          <p>
            Built an educational review website using WordPress and Elementor.
            Designed custom layouts and responsive pages to help users compare
            and choose schools and colleges based on ratings and reviews.
          </p>
        </div>
        <div className="project">
          <a href="https://supaneuro.com/" target="_blank" rel="noreferrer">
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://supaneuro.com/" target="_blank" rel="noreferrer">
            <h2>Supaneuro</h2>
          </a>
          <p>
            Developed a social media platform using WordPress with the BuddyBoss
            theme. Enabled users to share thoughts, create posts, and engage
            with a community through custom layouts and interactive features.
          </p>
        </div>
        <div className="project">
          <a href="https://vyvamind.com/" target="_blank" rel="noreferrer">
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://vyvamind.com/" target="_blank" rel="noreferrer">
            <h2>Vyvamind</h2>
          </a>
          <p>
            Developed a Shopify-based online store specializing in medicine
            sales. Customized product listings, streamlined user experience, and
            implemented responsive design to ensure easy navigation and secure
            shopping.
          </p>
        </div>

        <div className="project">
          <a href="https://zmyra.com/" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://zmyra.com/" target="_blank" rel="noreferrer">
            <h2>Zmyra</h2>
          </a>
          <p>
            Built a health-focused Shopify store with optimized UI, custom
            product sections, and mobile-responsive design to boost user
            engagement and conversions.
          </p>
        </div>

        <div className="project">
          <a
            href="https://precisionx.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://precisionx.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Precisionx</h2>
          </a>
          <p>
            Developed a car resale platform using CodeIgniter, focused on buying
            and selling used vehicles. Implemented responsive design, dynamic
            car listings, and user-friendly interfaces for smooth transactions
            and browsing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
