import React from 'react';
import './About.scss';

function About() {
  return (
      <div className="about-section">
        <section className="about-container container">
          <h1 className="about-name">NATALIA FOMINA</h1>
          <p className="about-profession">Web Developer & Art Director</p>
          <p className="about-text"><i className="fal fa-heart"/>I love web development, design and art.</p>
          <p className="about-text"><i className="fal fa-map-pin"/>I'm from Saint Petersburg, and I live in Frankfurt.
          </p>
          <p className="about-text"><i className="fal fa-globe-americas"/>I speak fluent English, Italian, Russian. I'm
            beginner in German.</p>
          <div className="about-btn-wrap">
            <a href="/cv.pdf" target="_blank" className="about-btn">Download my CV <i
                className="fal fa-arrow-to-bottom"/></a>
          </div>
        </section>
      </div>
  )
};

export default About;