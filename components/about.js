import React from 'react';
import {useTranslation} from "react-i18next";

function About() {
  const {t} = useTranslation();
  return (
    <div className="about-section">
      <section className="about-container container">
        <h1 className="about-name">{t('about.name')}</h1>
        <p className="about-profession">{t('about.title')}</p>
        <p className="about-text"><i className="fal fa-heart"/>{t('about.headline')}</p>
        <p className="about-text"><i className="fal fa-map-pin"/>{t("about.location")}</p>
        <p className="about-text"><i className="fal fa-globe-americas"/>{t('about.languages')}</p>
        <div className="about-btn-wrap">
          <a href="https://natalia-portfolio-api.herokuapp.com/" rel="noreferrer" target="_blank" className="about-btn">{t('Download my CV')} <i
            className="fal fa-arrow-to-bottom"/></a>
        </div>
      </section>
    </div>
  )
};

export default About;
