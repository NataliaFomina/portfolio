import React from 'react';
import './Experience.scss';

function Experience() {
  return (
      <div className="experience-section">
        <section className="container">
          <h2 className="title">My Experience</h2>

          <div className="items">
            <div className="item">
              <p className="year">2020-2021</p>
              <p className="job">Web Developer & Web Designer, Founder</p>
              <p>
                <i className="fal fa-map-pin"></i>Snippet Stock - Frankfurt, Germany
              </p>
              <ul>
                <li>Development of a responsive web frontend for desktop, mobile and tablet</li>
                <li>Design of UI & UX</li>
                <li>Defining features and workflow</li>
                <li>Defining a marketing strategy</li>
                <li>Defining a monetisation strategy</li>
                <li>Optimizing SEO for Google and Yandex searching engines</li>
              </ul>
            </div>

            <div className="item">
              <p className="year">2019-2020</p>
              <p className="job">Frontend Developer</p>
              <p>
                <i className="fal fa-map-pin"></i>Mygento - Saint Petersburg, Russia
              </p>
              <p>
                <i className="fal fa-link"></i><a href="https://www.mygento.ru">https://www.mygento.ru</a>
              </p>
              <ul>Development of UI:
                <li>work with client manager and backend team</li>
                <li>develop frontend components</li>
                <li>creating animation, banners, sliders, blogs</li>
                <li>refactor code</li>
                <li>Support for an existing websites L'Oréal, MyGlo</li>
              </ul>
            </div>

            <div className="item">
              <p className="year">2019-2020</p>
              <p className="job">Web Developer</p>
              <p>
                <i className="fal fa-map-pin"></i>AvtoHarakter - Saint Petersburg, Russia
              </p>
              <p>
                <i className="fal fa-link"></i><a href=""></a>
              </p>
              <ul>Development of UI:
                <li>work with client manager and backend team</li>
                <li>develop frontend components</li>
                <li>creating animation, banners, sliders, blogs</li>
                <li>refactor code</li>
                <li>Support for an existing websites L'Oréal, MyGlo</li>
              </ul>
            </div>

            <div className="item">
              <p className="year">2018-2019</p>
              <p className="job">Web Developer</p>
              <p>
                <i className="fal fa-map-pin"></i>Procent - Saint Petersburg, Russia
              </p>
              <p>
                <i className="fal fa-link"></i><a href="http://процентденьги.рф">http://процентденьги.рф</a>
              </p>
              <ul>Development of UI:
                <li>Creating elements (sliders, calculators)</li>
                <li>Design layouts for landing pages</li>
                <li>Responsive layout / for mobile devices</li>
                <li>SEO optimization</li>
                <li>Support for an existing site</li>
              </ul>
            </div>

            <div className="item">
              <p className="year">2018-2019</p>
              <p className="job">Web Developer</p>
              <p>
                <i className="fal fa-map-pin"></i>Granit - Saint Petersburg, Russia
              </p>
              <p>
                <i className="fal fa-link"></i><a href="http://granitbrz.ru">http://granitbrz.ru</a>
              </p>
              <ul>Development of UI:
                <li>Creating elements (sliders, calculators)</li>
                <li>Design layouts for landing pages</li>
                <li>Responsive layout / for mobile devices</li>
                <li>SEO optimization</li>
                <li>Support for an existing site</li>
              </ul>
            </div>

            <div className="item">
              <p className="year">2017-2018</p>
              <p className="job">Web Master</p>
              <p>
                <i className="fal fa-map-pin"></i>Maskom - Moscow, Russia
              </p>
              <p>
                <i className="fal fa-link"></i><a href="https://maskomzoloto.ru">https://maskomzoloto.ru</a>
              </p>
              <ul>Development of UI:
                <li>Creating elements (sliders, calculators)</li>
                <li>Design layouts for landing pages</li>
                <li>Responsive layout / for mobile devices</li>
                <li>SEO optimization</li>
                <li>Support for an existing site</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Experience;