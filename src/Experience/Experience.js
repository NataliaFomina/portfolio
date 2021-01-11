import React from 'react';
import './Experience.scss';

function Experience() {
  return (
      <div className="experience-section">
        <section className="container">
          <h2 className="title">My Experience</h2>
          <div className="wrapper">
            <div className="item first">
              <p className="year">2018-2019</p>
              <p className="profession">Web Master</p>

              <p className="location">Maskom - Moscow, Russia</p>
              <p><i className="fal fa-link"></i><a href="https://maskomzoloto.ru/">https://maskomzoloto.ru/</a></p>
              <p className="obligation">
                <ul className="list">Development of UI:
                  <li>Creating elements (sliders, calculators)</li>
                  <li>Layouts for landing pages</li>
                  <li>Responsive layout / for mobile devices</li>
                  <li>SEO optimization</li>
                  <li>Support for an existing site</li>
                </ul>
              </p>

            </div>
            <div className="item second">ex 2</div>
            <div className="item third">ex 3</div>
            <div className="item fourth">ex 4</div>
          </div>
        </section>
      </div>
  )
}

export default Experience;