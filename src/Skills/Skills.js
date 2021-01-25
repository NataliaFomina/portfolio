import React from 'react';
import './Skills.scss';

function Skills() {
  return (
    <section className="skills-section">
      <h1 className="skills-title">Professional Skills Work</h1>
      <div className="skills-container">
        <div className="skills-icons">
          <div className="skills-icon">
            <i className="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div className="skills-icon">
            <i className="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div className="skills-icon">
            <i className="icon-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="skills-icon">
            <i className="fab fa-react"></i>
            <span>React JS</span>
          </div>
          <div className="skills-icon">
            <i className="fab fa-php"></i>
            <span>PHP</span>
          </div>
          <div className="skills-icon">
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </div>
          <div className="skills-icon">
            <i className="fab fa-git"></i>
            <span>Git</span>
          </div>
          <div className="skills-icon">
            <i className="fab fa-magento"></i>
            <span>Magento</span>
          </div>
          <div className="skills-icon">
            <i className="icon-ps"></i>
            <span>Adobe Photoshop</span>
          </div>
          <div className="skills-icon">
            <i className="icon-ai"></i>
            <span>Adobe Illustrator</span>
          </div>
          <div className="skills-icon">
            <i className="icon-id"></i>
            <span>Adobe InDesign</span>
          </div>
          <div className="skills-icon">
            <i className="fal fa-window"></i>
            <span>SEO</span>
          </div>
        </div>

        <div className="skills-text">
          <section className="skills-text-section">
            <h3 className="skills-text-title">Responsive & Mobile Web</h3>
            <p className="skills-text-desc">Design and build layout for touch and mobile devices: HTML5, CCS3 animation, CSS media queries, Flexbox,
              Figma,
              Adobe Photoshop, Adobe Illustrator, Adobe InDesign.</p>
          </section>
          <section className="skills-text-section">
            <h3 className="skills-text-title">Build Single Page Web Applications (SPA)</h3>
            <p className="skills-text-desc">Experience in creating application in Vanilla JS, ES6. Skills of using the library React, React Hooks,
              JSX, React router, VirtualDom, Ajax, Fetch, NPM manager, Websoket.</p>
          </section>
          <section className="skills-text-section">
            <h3 className="skills-text-title">Php & Magento</h3>
            <p className="skills-text-desc">Знание ОПП, SQL, MVC. Опыт работы с интернет магазинами базирующими на Magento, интергация страниц
              React.</p>
          </section>
          <section className="skills-text-section">
            <h3 className="skills-text-title">SEO optimization</h3>
            <p className="skills-text-desc">Семантика структуры HTML, оптимизация изображений и страниц, Google Page Speed. Optimizing SEO for Google
              and Yandex searching engines.</p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Skills;