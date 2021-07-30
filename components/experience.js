import React from 'react';
import {useTranslation} from "react-i18next";

function Experience() {
  const {t} = useTranslation();
  return (
    <div className="experience-section">
      <section className="experience-container container">
        <h2 className="title">{t('Work Experience')}</h2>

        <div className="items">

          <div className="item">
            <p className="year">{t('Feb 2020 - Nov 2020')}</p>
            <p className="job">{t('Frontend Developer')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('Mygento - Saint Petersburg, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="https://www.mygento.ru" target="_blank"
                                             rel="noreferrer">https://www.mygento.ru</a>
            </p>
            <ul>
              <li>{t('Development of React based component, featuring responsive design that supports mobile and tablet')}
              </li>
              <li>{t('Development of frontend elements: sliders, menus, blog, subscription, product card, cart animation, and more')}
              </li>
              <li>{t('Code refactoring')}</li>
              <li>{t('Integration testing')}</li>
              <li>{t('Collaborating with backend developers')}</li>
              <li>{t('Working directly with clients; taking part in discussions, setting up tasks and goals')}</li>
              <li>{t('Content management & administration')}</li>
              <li>{t('Taking part in the migration of Magento 1 online shop to Magento 2')}</li>
              <li>{t('Support and maintenance of existing products: L\'Oréal, MyGlo')}</li>
            </ul>
          </div>

          <div className="item">
            <p className="year">2019</p>
            <p className="job">{t('Web Developer (Freelancer)')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('Autoharakter - Saint Petersburg, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="https://autoharakter.ru" target="_blank"
                                             rel="noreferrer">https://autoharakter.ru</a>
            </p>
            <ul>
              <li>{t('Development of a responsive web frontend for desktop, mobile and tablet')}</li>
              <li>{t('Design of UI & UX')}</li>
              <li>{t('Deployment and hosting setup')}</li>
              <li>{t('Defining a sitemap')}</li>
              <li>{t('Working directly with clients; discussing and setting goals')}</li>
              <li>{t('Working with article writers')}</li>
              <li>{t('Optimizing SEO for Google and Yandex searching engines')}</li>
              <li>{t('Maintenance of existing products')}</li>
            </ul>
          </div>

          <div className="item">
            <p className="year">2019</p>
            <p className="job">{t('Web Developer (Freelancer)')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('Procent - Saint Petersburg, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="http://процентденьги.рф" target="_blank"
                                             rel="noreferrer">http://процентденьги.рф</a>
            </p>
            <ul>
              <li>{t('Development of a responsive web frontend for desktop, mobile and tablet')}</li>
              <li>{t('Design of UI & UX')}</li>
              <li>{t('Deployment and hosting setup')}</li>
              <li>{t('Defining a sitemap')}</li>
              <li>{t('Working directly with clients; discussing and setting goals')}</li>
              <li>{t('Working with article writers')}</li>
              <li>{t('Optimizing SEO for Google and Yandex searching engines')}</li>
              <li>{t('Maintenance of existing products')}</li>
            </ul>
          </div>

          <div className="item">
            <p className="year">2018</p>
            <p className="job">{t('Web Developer (Freelancer)')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('Granit - Saint Petersburg, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="http://granitbrz.ru" target="_blank"
                                             rel="noreferrer">http://granitbrz.ru</a>
            </p>
            <ul>
              <li>{t('Development of a responsive web frontend for desktop, mobile and tablet')}</li>
              <li>{t('Design of UI & UX')}</li>
              <li>{t('Deployment and hosting setup')}</li>
              <li>{t('Defining a sitemap')}</li>
              <li>{t('Working directly with clients; discussing and setting goals')}</li>
              <li>{t('Working with article writers')}</li>
              <li>{t('Optimizing SEO for Google and Yandex searching engines')}</li>
              <li>{t('Maintenance of existing products')}</li>
            </ul>
          </div>

          <div className="item">
            <p className="year">2018</p>
            <p className="job">{t('Web Developer (Freelancer)')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('Enduro - Saint Petersburg, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="http://crimeatrophy.ru" target="_blank"
                                             rel="noreferrer">http://crimeatrophy.ru</a>
            </p>
            <ul>
              <li>{t('Development of a responsive web frontend for desktop, mobile and tablet')}</li>
              <li>{t('Design of UI & UX')}</li>
              <li>{t('Deployment and hosting setup')}</li>
              <li>{t('Defining a sitemap')}</li>
              <li>{t('Working directly with clients; discussing and setting goals')}</li>
              <li>{t('Working with article writers')}</li>
              <li>{t('Optimizing SEO for Google and Yandex searching engines')}</li>
              <li>{t('Maintenance of existing products')}</li>
            </ul>
          </div>

          <div className="item">
            <p className="year">2017</p>
            <p className="job">{t('Web Master (Freelancer)')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('Maskom - Moscow, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="https://maskomzoloto.ru" target="_blank"
                                             rel="noreferrer">https://maskomzoloto.ru</a>
            </p>
            <ul>{t('Development of UI:')}
              <li>{t('Creating elements (sliders, calculators)')}</li>
              <li>{t('Design layouts for landing pages')}</li>
              <li>{t('Responsive layout / for mobile devices')}</li>
              <li>{t('SEO optimization')}</li>
              <li>{t('Support for an existing site')}</li>
            </ul>
          </div>

          <div className="item">
            <p className="year">{t('Sep 2015 - Nov 2016')}</p>
            <p className="job">{t('Art Director & Stylist')}</p>
            <p>
              <i className="fal fa-map-pin"/>{t('LYYK & Lomonosova 22 - Saint Petersburg, Russia')}
            </p>
            <p>
              <i className="fal fa-link"/><a href="https://www.instagram.com/lomonosova22" target="_blank"
                                             rel="noreferrer">https://lomonosova22</a>
            </p>
            <ul>
              <li>{t('Creating brand image & style for two shops')}</li>
              <li>{t('Ideas for photo shootings and participation in it: choosing location, model, photographer, make up, style and coordinate all process')}
              </li>
              <li>{t('Ideas for graphic design: banners, newsletters, sales, new collections, presentation')}</li>
              <li>{t('Managing team: photographer, graphic designer, models, smm department, brand manager')}</li>
              <li>{t('Working with fashion bloggers, opinion makers, magazines and online channels')}</li>
              <li>{t('Making research and hire team, testing, making test task')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience;
