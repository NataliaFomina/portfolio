import React from "react";
import { useTranslation } from "react-i18next";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { BsGithub } from "react-icons/bs"
import { SiJavascript, SiTypescript, SiNextdotjs, SiGoogleanalytics, SiChakraui, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"
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
              <DiReact className="skills-icon" />
              <span>React</span>
            </div>
            <div className="skills-icon-wrap">
              <SiJavascript className="skills-icon" />
              <span>JavaScript</span>
            </div>
            <div className="skills-icon-wrap">
              <SiTypescript className="skills-icon" />
              <span>TypeScript</span>
            </div>
            <div className="skills-icon-wrap">
              <SiNextdotjs className="skills-icon" />
              <span>Next.js</span>
            </div>
            <div className="skills-icon-wrap">
              <SiChakraui className="skills-icon" />
              <span>Chakra UI</span>
            </div>
            <div className="skills-icon-wrap">
              <DiHtml5 className="skills-icon" />
              <span>HTML5</span>
            </div>
            <div className="skills-icon-wrap">
              <DiCss3 className="skills-icon" />
              <span>CSS3</span>
            </div>
            <div className="skills-icon-wrap">
              <BsGithub className="skills-icon" />
              <span>Git</span>
            </div>
            <div className="skills-icon-wrap">
              <FiFigma className="skills-icon" />
              <span>Figma</span>
            </div>
            <div className="skills-icon-wrap">
              <SiAdobephotoshop className="skills-icon" />
              <span>Adobe Photoshop</span>
            </div>
            <div className="skills-icon-wrap">
              <SiAdobeillustrator className="skills-icon" />
              <span>Adobe Illustrator</span>
            </div>
            <div className="skills-icon-wrap">
              <SiGoogleanalytics className="skills-icon" />
              <span>SEO</span>
            </div>
          </div>

          <div className="skills-text">
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
              <h3 className="skills-text-title">{t("Next.js & SSR")}</h3>
              <p className="skills-text-desc">
                {t(
                  "Experience in creating Next.js based websites with server-side rendering, image optimization and optimized page loading."
                )}
              </p>
            </section>
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
