import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="about-section">
      <section className="about-container container">
        <h1 className="about-name">NATALIA FOMINA</h1>
        <p className="about-profession">Web Developer & Art Director</p>
        <p className="about-text"><i className="fal fa-heart"></i>I love web development, design and art.</p>
        <p className="about-text"><i className="fal fa-map-pin"></i>I'm from Saint Petersburg, and I live in Frankfurt.</p>
        <p className="about-text"><i className="fal fa-globe-americas"></i>I speak fluent English, Italian, Russian. I'm actively learning German.</p>
        <div className="about-btn-wrap">
          <a href="/cv.pdf" target="_blank" className="about-btn">Download my CV <i className="fal fa-arrow-to-bottom"></i></a>
          {/*<button className="about-btn">Contact me</button>*/}
        </div>
      </section>
    </div>
  )
};

export default About;