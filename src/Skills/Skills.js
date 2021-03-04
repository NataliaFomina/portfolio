import React from 'react';
import './Skills.scss';

function Skills() {
  return (
      <div className="skills-section">
        <section className="skills-container container">
          <h1 className="skills-title">Professional Skills</h1>
          <div className="skills-content">
            <div className="skills-icons">
              <div className="skills-icon">
                <i className="fab fa-html5"/>
                <span>HTML5</span>
              </div>
              <div className="skills-icon">
                <i className="fab fa-css3-alt"/>
                <span>CSS3</span>
              </div>
              <div className="skills-icon">
                <i className="icon-js"/>
                <span>JavaScript</span>
              </div>
              <div className="skills-icon">
                <i className="fab fa-react"/>
                <span>React JS</span>
              </div>
              <div className="skills-icon">
                <i className="fab fa-php"/>
                <span>PHP</span>
              </div>
              <div className="skills-icon">
                <i className="fas fa-database"/>
                <span>SQL</span>
              </div>
              <div className="skills-icon">
                <i className="fab fa-git"/>
                <span>Git</span>
              </div>
              <div className="skills-icon">
                <i className="fab fa-magento"/>
                <span>Magento</span>
              </div>
              <div className="skills-icon">
                <i className="icon-ps"/>
                <span>Adobe Photoshop</span>
              </div>
              <div className="skills-icon">
                <i className="icon-ai"/>
                <span>Adobe Illustrator</span>
              </div>
              <div className="skills-icon">
                <i className="icon-id"/>
                <span>Adobe InDesign</span>
              </div>
              <div className="skills-icon">
                <i className="fal fa-window"/>
                <span>SEO</span>
              </div>
            </div>

            <div className="skills-text">
              <section className="skills-text-section">
                <h3 className="skills-text-title">HTML5, CSS3 and Responsive/Mobile Web</h3>
                <p className="skills-text-desc">Design and build user interfaces for touch and mobile devices using:
                  HTML5, CCS3 animations, CSS media queries, Flexbox, Figma, Adobe Photoshop, Adobe Illustrator, Adobe
                  InDesign.</p>
              </section>
              <section className="skills-text-section">
                <h3 className="skills-text-title">React, JavaScript and Single Page Applications (SPA)</h3>
                <p className="skills-text-desc">Experience in creating applications using Vanilla JS, ES6, React
                  (Functional and Class Components, Hooks),
                  JSX, React Router, Virtual DOM, AJAX, Fetch, NPM manager and WebSockets.</p>
              </section>
              <section className="skills-text-section">
                <h3 className="skills-text-title">Magento & PHP</h3>
                <p className="skills-text-desc">Experience in creating Magento based online stores with React based
                  Frontends.
                  Knowledge of Object Oriented Programming (OOP), SQL and MVC.</p>
              </section>
              <section className="skills-text-section">
                <h3 className="skills-text-title">SEO optimization</h3>
                <p className="skills-text-desc">Semantics of HTML structure, image and page optimization, Google Page
                  Speed. Optimizing SEO for Google and Yandex searching engines.</p>
              </section>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Skills;