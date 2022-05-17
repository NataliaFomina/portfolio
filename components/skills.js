import React from "react";
import { useTranslation } from "react-i18next";
import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiMagento } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="skills-section">
      <section className="skills-container container">
        <h1 className="skills-title">{t("Professional Skills")}</h1>
        <div className="skills-content">
          <div className="skills-icons">
            <div className="skills-icon-wrap">
              <DiHtml5 className="skills-icon" />
              <span>HTML5</span>
            </div>
            <div className="skills-icon-wrap">
              <DiCss3 className="skills-icon" />
              <span>CSS3</span>
            </div>
            <div className="skills-icon-wrap">
              <DiJavascript1 className="skills-icon" />
              <span>JavaScript</span>
            </div>
            <div className="skills-icon-wrap">
              <DiReact className="skills-icon" />
              <span>React JS</span>
            </div>
            <div className="skills-icon-wrap">
              <DiPhp className="skills-icon" />
              <span>PHP</span>
            </div>
            <div className="skills-icon-wrap">
              <i className="fas fa-database" />
              <span>SQL</span>
            </div>
            <div className="skills-icon-wrap">
              <FaGitAlt className="skills-icon" />
              <span>Git</span>
            </div>
            <div className="skills-icon-wrap">
              <DiMagento className="skills-icon" />
              <span>Magento</span>
            </div>
            <div className="skills-icon-wrap">
              <FiFigma className="skills-icon" />
              <span>Figma</span>
            </div>
            <div className="skills-icon-wrap">
              <i className="icon-ps" />
              <span>Adobe Photoshop</span>
            </div>
            <div className="skills-icon-wrap">
              <i className="icon-ai" />
              <span>Adobe Illustrator</span>
            </div>
            <div className="skills-icon-wrap">
              <i className="fal fa-window" />
              <span>SEO</span>
            </div>
          </div>

          <div className="skills-text">
            <section className="skills-text-section">
              <h3 className="skills-text-title">
                {t("HTML5, CSS3 and Responsive/Mobile Web")}
              </h3>
              <p className="skills-text-desc">
                {t(
                  "Design and build user interfaces for touch and mobile devices using: HTML5, CCS3 animations, CSS media queries, Chakra UI, Tailwind CSS, Emotion, Styled Components, Flexbox, Grid, Figma, Adobe Photoshop, Adobe Illustrator."
                )}
              </p>
            </section>
            <section className="skills-text-section">
              <h3 className="skills-text-title">
                {t("React, JavaScript and Single Page Applications (SPA)")}
              </h3>
              <p className="skills-text-desc">
                {t(
                  "Experience in creating applications using  React (Functional and Class Components, Hooks), Next.js, Vanilla JS, ES6, AJAX, Fetch, Redux Toolkit, NPM manager and WebSockets."
                )}
              </p>
            </section>
            <section className="skills-text-section">
              <h3 className="skills-text-title">{t("Magento & PHP")}</h3>
              <p className="skills-text-desc">
                {t(
                  "Experience in creating Magento based online stores with React based Frontends. Knowledge of Object Oriented Programming (OOP), SQL and MVC."
                )}
              </p>
            </section>
            <section className="skills-text-section">
              <h3 className="skills-text-title">{t("SEO optimization")}</h3>
              <p className="skills-text-desc">
                {t(
                  "Semantics of HTML structure, image and page optimization, Google Page Speed. Optimizing SEO for Google and Yandex searching engines."
                )}
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
