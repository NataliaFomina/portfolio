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
              <p className="education-item-course">{t('Programming, PHP / SQL back-end development and databases')}</p>
              <p className="education-item-year">{t('Moscow, Russia')} 2019</p>
              <a className="education-item-link" href="https://netology.ru" target="_blank" rel="noreferrer">https://netology.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University of Internet Professions "Netology"')}</p>
              <p className="education-item-course">{t('Programming, Frontend developer (HTML, JavaScript, React JS)')}</p>
              <p className="education-item-year">{t('Moscow, Russia')} 2018-2019</p>
              <a className="education-item-link" href="https://netology.ru" target="_blank" rel="noreferrer">https://netology.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University of Internet Professions "Netology"')}</p>
              <p className="education-item-course">{t('Programming, Responsive and mobile layout')}</p>
              <p className="education-item-year">{t('Moscow, Russia')} 2018</p>
              <a className="education-item-link" href="https://netology.ru" target="_blank" rel="noreferrer">https://netology.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('"Specialist" at Bauman Moscow State Technical University')}</p>
              <p className="education-item-course">{t('Web technologies, HTML5 and CSS3')}</p>
              <p className="education-item-year">{t('Moscow, Russia')} 2017</p>
              <a className="education-item-link" href="https://www.specialist.ru" target="_blank" rel="noreferrer">https://www.specialist.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('"Specialist" at Bauman Moscow State Technical University')}</p>
              <p className="education-item-course">{t('Web technologies, Website promotion and SEO')}</p>
              <p className="education-item-year">{t('Moscow, Russia')} 2017</p>
              <a className="education-item-link" href="https://www.specialist.ru" target="_blank" rel="noreferrer">https://www.specialist.ru</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('Istituto Marangoni')}</p>
              <p className="education-item-course">{t('Design')}</p>
              <p className="education-item-year">{t('Milan, Italy')} 2008-2011</p>
              <a className="education-item-link" href="https://www.istitutomarangoni.com" target="_blank" rel="noreferrer">https://www.istitutomarangoni.com</a>
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-program">
              <p className="education-item-univ">{t('University Higher School of Economics')}</p>
              <p className="education-item-course">{t('Management')}</p>
              <p className="education-item-year">{t('Moscow, Russia')} 2006-2008</p>
              <a className="education-item-link" href="https://www.hse.ru" target="_blank" rel="noreferrer">https://www.hse.ru</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education;
