import React from 'react';
import './Education.scss';

function Education() {
  return (
    <div className="education-section">
      <section className="education-container container">
        <h2 className="education-title">Education</h2>
        <div className="education-items">

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">University of Internet Professions "Netology"</p>
              <p className="education-item-course">Programming, PHP / SQL back-end development and databases</p>
              <p className="education-item-year">Moscow, Russia 2019</p>
              <a className="education-item-link" href="https://netology.ru">https://netology.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">University of Internet Professions "Netology"</p>
              <p className="education-item-course">Programming, Frontend developer (HTML, JavaScript, React JS)</p>
              <p className="education-item-year">Moscow, Russia 2018-2019</p>
              <a className="education-item-link" href="https://netology.ru">https://netology.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">University of Internet Professions "Netology"</p>
              <p className="education-item-course">Programming, Responsive and mobile layout</p>
              <p className="education-item-year">Moscow, Russia 2018</p>
              <a className="education-item-link" href="https://netology.ru">https://netology.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">"Specialist" at Bauman Moscow State Technical University </p>
              <p className="education-item-course">Web technologies, HTML5 and CSS3</p>
              <p className="education-item-year">Moscow, Russia 2017</p>
              <a className="education-item-link" href="https://www.specialist.ru">https://www.specialist.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">"Specialist" at Bauman Moscow State Technical University</p>
              <p className="education-item-course">Web technologies, Website promotion and SEO</p>
              <p className="education-item-year">Moscow, Russia 2017</p>
              <a className="education-item-link" href="https://www.specialist.ru">https://www.specialist.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">Istituto Marangoni</p>
              <p className="education-item-course">Design</p>
              <p className="education-item-year">Milan, Italy 2008-2011</p>
              <a className="education-item-link" href="https://www.istitutomarangoni.com">https://www.istitutomarangoni.com</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">University Higher School of Economics</p>
              <p className="education-item-course">Management</p>
              <p className="education-item-year">Moscow, Russia 2006-2008</p>
              <a className="education-item-link" href="https://www.hse.ru">https://www.hse.ru</a>
            </div>
          </div>

        </div>





      </section>
    </div>
  )
}

export default Education;