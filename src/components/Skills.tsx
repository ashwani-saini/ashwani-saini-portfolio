import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faBootstrap, faSass, faWordpress, faShopify, faHubspot, faWebflow, } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>HTML</h3>
                    <p>I use HTML5 to build structured, accessible, and SEO-friendly web pages from the ground up. My code is clean, semantic, and optimized for performance. Whether it’s a static site or the foundation of a complex web app, I ensure the markup supports responsive design and cross-browser compatibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCss3} size="3x"/>
                    <h3>CSS</h3>
                    <p>I design modern, responsive interfaces using CSS3. From custom layouts using Flexbox and Grid to smooth animations and transitions, I bring designs to life across all screen sizes. I also work with preprocessors like SCSS and utility frameworks like Tailwind CSS for scalable styling systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJs} size="3x"/>
                    <h3>JavaScript</h3>
                    <p>JavaScript is my tool for adding interactivity and logic to web applications. I write clean, modular code using ES6+ features and build rich user experiences with DOM manipulation, APIs, and dynamic data. I'm comfortable with both vanilla JavaScript and frameworks like React to create high-performance, user-friendly apps.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faBootstrap} size="3x"/>
                    <h3>Bootstrap</h3>
                    <p>I leverage Bootstrap to build responsive, mobile-first web interfaces quickly and efficiently. With a deep understanding of its grid system, components, and utilities, I can prototype and develop clean, consistent layouts at speed. I also customize Bootstrap themes using SCSS to match unique brand styles and design requirements.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faSass} size="3x"/>
                    <h3>SCSS</h3>
                    <p>I use SCSS to write cleaner, more organized, and scalable CSS. With features like variables, nesting, mixins, and partials, I create modular stylesheets that are easy to maintain and extend. SCSS helps me streamline the styling process, especially in larger projects with complex UI requirements.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>React</h3>
                    <p>I have a foundational understanding of React and use it to build dynamic, component-based user interfaces. I’m familiar with concepts like JSX, props, state, and basic component lifecycle. I can create simple interactive web pages and I’m continuously learning more about hooks, routing, and state management to deepen my skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faWordpress} size="3x"/>
                    <h3>Wordpress</h3>
                    <p>I work confidently with WordPress to build and manage dynamic websites. My experience includes creating custom page layouts using popular builders like Elementor, Divi, and WPBakery, as well as organizing site structure and navigation. I’m comfortable installing and configuring plugins to extend functionality, and I also work with custom templates to match unique design requirements. Whether it’s a business site, portfolio, or landing page, I focus on clean design, responsive layout, and smooth user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faShopify} size="3x"/>
                    <h3>Shopify</h3>
                    <p>I have hands-on experience building and customizing Shopify stores. I’ve created custom pages and made sections dynamic using Shopify’s theme structure and Liquid templating. I'm familiar with editing themes, managing store layout, and improving product and collection pages. I aim to deliver responsive, user-friendly storefronts that align with brand goals and enhance the shopping experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHubspot} size="3x"/>
                    <h3>Hubspot</h3>
                    <p>I have experience creating and customizing pages in HubSpot CMS, including building dynamic sections using HubSpot’s drag-and-drop editor and HubL templating language. I focus on designing responsive, user-friendly layouts that integrate well with marketing tools and CRM. My work ensures seamless content management and enhances user engagement through personalized website experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faWebflow} size="3x"/>
                    <h3>Webflow</h3>
                    <p>I use Webflow to design and build responsive, visually appealing websites without writing code. I’ve created custom pages, structured layouts, and handled interactions using Webflow’s Designer and CMS features. With a strong understanding of responsive design, I ensure clean structure, fast loading, and seamless user experiences across all devices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Skills;