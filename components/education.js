import React from 'react';
import {useTranslation} from "react-i18next";

function Education() {
  const {t} = useTranslation();
  return (
    <div className="education-section">
      <section className="education-container container">
        <h2 className="education-title">{t('Education')}</h2>
        <div className="education-items">

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University of Internet Professions "Netology"')}</p>
              <a className="education-item-link" href="https://netology.ru" target="_blank" rel="noreferrer">netology.ru</a>
              <p className="education-item-year">{t('Moscow, Russia')} 2019</p>
              <p className="education-item-course">{t('Programming, PHP / SQL back-end development and databases.')}</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University of Internet Professions "Netology"')}</p>
              <a className="education-item-link" href="https://netology.ru" target="_blank" rel="noreferrer">netology.ru</a>
              <p className="education-item-year">{t('Moscow, Russia')} 2018-2019</p>
              <p className="education-item-course">{t('Programming, Frontend Development (HTML, JavaScript, React JS).')}</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University of Internet Professions "Netology"')}</p>
              <a className="education-item-link" href="https://netology.ru" target="_blank" rel="noreferrer">netology.ru</a>
              <p className="education-item-year">{t('Moscow, Russia')} 2018</p>
              <p className="education-item-course">{t('Programming, Responsive and mobile layout.')}</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('"Specialist" at Bauman Moscow State Technical University')}</p>
              <a className="education-item-link" href="https://www.specialist.ru" target="_blank" rel="noreferrer">specialist.ru</a>
              <p className="education-item-year">{t('Moscow, Russia')} 2017</p>
              <p className="education-item-course">{t('Web technologies, HTML5 and CSS3.')}</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('"Specialist" at Bauman Moscow State Technical University')}</p>
              <a className="education-item-link" href="https://www.specialist.ru" target="_blank" rel="noreferrer">specialist.ru</a>
              <p className="education-item-year">{t('Moscow, Russia')} 2017</p>
              <p className="education-item-course">{t('Web technologies, Website promotion and SEO.')}</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('Istituto Marangoni')}</p>
              <a className="education-item-link" href="https://www.istitutomarangoni.com" target="_blank" rel="noreferrer">istitutomarangoni.com</a>
              <p className="education-item-year">{t('Milan, Italy')} 2008-2011</p>
              <p className="education-item-course">{t('Design.')}</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University Higher School of Economics')}</p>
              <a className="education-item-link" href="https://www.hse.ru" target="_blank" rel="noreferrer">hse.ru</a>
              <p className="education-item-year">{t('Moscow, Russia')} 2006-2008</p>
              <p className="education-item-course">{t('Management.')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education;
