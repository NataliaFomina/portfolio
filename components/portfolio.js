import React, { useState, useCallback, useEffect, useReducer } from "react";
import { DiGithubBadge } from "react-icons/di";

import granitPreview from "../images/portfolio/granit_preview.jpg";
import granitSlider1 from "../images/portfolio/granit_slider_1.jpg";
import granitSlider2 from "../images/portfolio/granit_slider_2.jpg";
import granitSlider3 from "../images/portfolio/granit_slider_3.jpg";
import granitSlider4 from "../images/portfolio/granit_slider_4.jpg";

import collabSlider1 from "../images/portfolio/collab_slider_1.jpg";
import collabSlider2 from "../images/portfolio/collab_slider_2.jpg";
import collabSlider3 from "../images/portfolio/collab_slider_3.jpg";
import collabSlider4 from "../images/portfolio/collab_slider_4.jpg";

import avtoharPreview from "../images/portfolio/avtohar_preview.jpg";
import avtoharSlider1 from "../images/portfolio/avtohar_slider_1.jpg";
import avtoharSlider2 from "../images/portfolio/avtohar_slider_2.jpg";
import avtoharSlider3 from "../images/portfolio/avtohar_slider_3.jpg";
import avtoharSlider4 from "../images/portfolio/avtohar_slider_4.jpg";

import qaSlider1 from "../images/portfolio/qa_slider_1.jpg";
import qaSlider2 from "../images/portfolio/qa_slider_2.jpg";
import qaSlider3 from "../images/portfolio/qa_slider_3.jpg";
import qaSlider4 from "../images/portfolio/qa_slider_4.jpg";

import procentPreview from "../images/portfolio/procent_preview.jpg";
import procentSlider1 from "../images/portfolio/procent_slider_1.jpg";
import procentSlider2 from "../images/portfolio/procent_slider_2.jpg";
import procentSlider3 from "../images/portfolio/procent_slider_3.jpg";
import procentSlider4 from "../images/portfolio/procent_slider_4.jpg";

import enduroPreview from "../images/portfolio/enduro_preview.jpg";
import enduroSlider1 from "../images/portfolio/enduro_slider_1.jpg";
import enduroSlider2 from "../images/portfolio/enduro_slider_2.jpg";
import enduroSlider3 from "../images/portfolio/enduro_slider_3.jpg";
import enduroSlider4 from "../images/portfolio/enduro_slider_4.jpg";
import { useTranslation } from "react-i18next";

function SliderImage({ images }) {
  const [imageActive, setImageActive] = useState(images[0]);
  const imagesArray = images.map((image, index) => {
    return (
      <div
        className={`${image === imageActive ? "slider-images-active" : ""} `}
        key={index}
      >
        <img
          src={image}
          onClick={() => setImageActive(image)}
          alt="Natalia Fomina portfolio"
        />
      </div>
    );
  });

  return (
    <div className="slider-img">
      <div className="slider-img-active">
        <img src={imageActive} alt="Natalia Fomina portfolio" />
      </div>
      <div className="slider-images">{imagesArray}</div>
    </div>
  );
}

function Cards({ onClickOpenSlider, cards }) {
  const { t } = useTranslation();
  return (
    <div className="cards">
      {cards.map((card) => (
        <div className="card" id={card.id} key={card.id}>
          <div className="card-img">
            <img src={card.imgPreview} alt="Natalia Fomina portfolio" />
          </div>
          <section className="card-container">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-subtitle">{card.subtitle}</p>
            <p className="card-text">{card.text}</p>
          </section>
          <div className="card-btns">
            <button
              className="card-btn card-btn-open"
              onClick={() => onClickOpenSlider(card.id)}
            >
              {t("Open project")}
            </button>
            {card.gitHub && (
              <button className="card-btn card-btn-git">
                <a href={card.gitHub} target="_blank" rel="noreferrer">
                  <DiGithubBadge className="card-btn-git-icon" />
                  GitHub
                </a>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Slider(props) {
  const { data, isOpen, currentSlide, onClickCloseSlider, dispatch } = props;
  return (
    <div
      className={`slider ${isOpen ? "slider-active" : ""}`}
      onClick={onClickCloseSlider}
    >
      <div className="slider-container">
        <div className="slider-slides">
          {data.map((e) => (
            <div
              className={`slider-slide ${
                e.id === currentSlide ? "slider-slide-active" : ""
              }`}
              id={e.id}
              key={e.id}
            >
              <SliderImage images={e.images} />

              <div className="slider-desc">
                <h3 className="slider-desc-title">{e.title}</h3>
                <p className="slider-desc-subtitle">{e.subtitle}</p>
                <p className="slider-desc-link">
                  <a href={e.desc.link1.href} target="_blank" rel="noreferrer">
                    {e.desc.link1.text}
                  </a>
                </p>
                <p className="slider-desc-text">{e.desc.p1}</p>
                <ul className="slider-desc-list">
                  {e.desc.ul1.title}
                  {e.desc.ul1.li.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                {e.desc.link2 && (
                  <p className="slider-desc-link">
                    Link:
                    <a
                      href={e.desc.link2.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {e.desc.link2.text}
                    </a>
                  </p>
                )}
                {e.desc.ul2 && (
                  <ul className="slider-desc-list">
                    {e.desc.ul2.title}
                    {e.desc.ul2.li.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="slider-arrows">
          <div
            className="slider-arrow-left"
            onClick={() => dispatch({ type: ACTIONS.PREV })}
          ></div>
          <div
            className="slider-arrow-right"
            onClick={() => dispatch({ type: ACTIONS.NEXT })}
          ></div>
        </div>
        <div className="slider-close" onClick={onClickCloseSlider}>
          <div className="slider-close-right" />
          <div className="slider-close-left" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: [
      {
        id: 0,
        title: t("Website for company Granit"),
        subtitle: t("Design of UI/UX, Web Development and SEO"),
        text: t(
          "Created a complete website for Granit Extreme Center using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
        ),
        imgPreview: granitPreview,
        images: [granitSlider1, granitSlider2, granitSlider3, granitSlider4],
        gitHub: null,
        desc: {
          p1: t(
            "Created a complete website for Granit Extreme Center using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
          ),
          link1: {
            text: "granitbrz.ru",
            href: "https://granitbrz.ru",
          },
          ul1: {
            title: t("Includes:"),
            li: [t("5 Pages"), t("Forms"), t("Sliders"), t("CSS3 animations")],
          },
          link2: null,
          ul2: null,
        },
      },
      {
        id: 1,
        title: t("Real-time Image Collaboration"),
        subtitle: t("WebSocket, JavaScript, HTML5 Canvas and Node.js"),
        text: t(
          "The client side is implemented in JavaScript and WebSockets; featuring Drag & Drop, Canvas drawing, collaborative drawing and commenting on images."
        ),
        imgPreview: collabSlider1,
        images: [collabSlider1, collabSlider2, collabSlider3, collabSlider4],
        gitHub: "https://github.com/NataliaFomina/realtime-image-collab",
        desc: {
          p1: t(
            "The client side is implemented in JavaScript and WebSockets; featuring Drag & Drop, Canvas drawing, collaborative drawing and commenting on images."
          ),
          link1: {
            text: "natalia-realtime-image-collab.herokuapp.com",
            href: "https://natalia-realtime-image-collab.herokuapp.com",
          },
          ul1: {
            title: t("The service provides users with the following options:"),
            li: [
              t("Upload images."),
              t("Add comments to a specific part of the image."),
              t("Draw on top of the image."),
            ],
          },
          link2: null,
          ul2: {
            title: t(
              "The service is also equipped with collaborative elements:"
            ),
            li: [
              t("The uploaded image has a unique link that can be shared."),
              t(
                "All users viewing the image will be notified of new comments on the image and can see what other users are drawing."
              ),
            ],
          },
        },
      },
      {
        id: 2,
        title: t("Website for company Autoharakter"),
        subtitle: t("Design of UI/UX, Web Development and SEO"),
        text: t(
          "Created a complete website for Avtoharakter using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
        ),
        imgPreview: avtoharPreview,
        images: [
          avtoharSlider1,
          avtoharSlider2,
          avtoharSlider3,
          avtoharSlider4,
        ],
        gitHub: null,
        desc: {
          p1: t(
            "Created a complete website for Avtoharakter using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
          ),
          link1: {
            text: "autoharakter.ru",
            href: "https://autoharakter.ru",
          },
          ul1: {
            title: t("Includes:"),
            li: [t("20 Pages"), t("Forms"), t("Sliders"), t("CSS3 animations")],
          },
          link2: null,
          ul2: null,
        },
      },
      {
        id: 3,
        title: t("Question and answer WebApp"),
        subtitle: t("Featuring PHP, SQL, MVC and HTML5"),
        text: t(
          "Question and answer web application with guest and administrator portals. The web application is implemented in PHP, using MVC architecture, components are implemented using OOP, data is stored in a relational database."
        ),
        imgPreview: qaSlider1,
        images: [qaSlider1, qaSlider2, qaSlider3, qaSlider4],
        gitHub: "https://github.com/NataliaFomina/qa-webapp",
        desc: {
          p1: t(
            "Question and answer web application with guest and administrator portals. The web application is implemented in PHP, using MVC architecture, components are implemented using OOP, data is stored in a relational database."
          ),
          link1: {
            text: t("Guest portal"),
            href: "https://natalia-qa-webapp.herokuapp.com/index.php?c=front&a=categories&categoryId=all",
          },
          ul1: {
            title: t("Guest portal"),
            li: [
              t("Users can browse categories, questions and answers."),
              t(
                "Any user can ask a question by entering their name, email address, selecting a category and writing the text of the question."
              ),
            ],
          },
          link2: {
            text: t("Admin portal"),
            href: "https://natalia-qa-webapp.herokuapp.com/",
          },
          ul2: {
            title: t("Admin portal (username: admin, password: admin):"),
            li: [
              t(
                "General section: the number of questions in each category, the number of unanswered questions and the number of administrators."
              ),
              t(
                "Administrator section: a list of administrators with the ability to remove or change the password, and add a new administrator."
              ),
            ],
          },
        },
      },
      {
        id: 4,
        title: t("Website for company Procent"),
        subtitle: t("Design of UI/UX, Web Development and SEO"),
        text: t(
          "Created a complete website for Procent Finance using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
        ),
        imgPreview: procentPreview,
        images: [
          procentSlider1,
          procentSlider2,
          procentSlider3,
          procentSlider4,
        ],
        gitHub: null,
        desc: {
          p1: t(
            "Created a complete website for Procent Finance using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
          ),
          link1: {
            text: "процентденьги.рф",
            href: "http://процентденьги.рф",
          },
          ul1: {
            title: t("Includes:"),
            li: [t("4 Pages"), t("Forms"), t("Sliders"), t("CSS3 animations")],
          },
          link2: null,
          ul2: null,
        },
      },
      {
        id: 5,
        title: t("Website for company Enduro"),
        subtitle: t("Design of UI/UX, Web Development and SEO"),
        text: t(
          "Created a complete website for Enduro travel in Crimea using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
        ),
        imgPreview: enduroPreview,
        images: [enduroSlider1, enduroSlider2, enduroSlider3, enduroSlider4],
        gitHub: null,
        desc: {
          p1: t(
            "Created a complete website for Enduro travel in Crimea using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images."
          ),
          link1: {
            text: "crimeatrophy.ru",
            href: "http://crimeatrophy.ru",
          },
          ul1: {
            title: t("Includes:"),
            li: [t("4 Pages"), t("Forms"), t("Sliders")],
          },
          link2: null,
          ul2: null,
        },
      },
    ],
  });
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenSlider = (index) => {
    setIsOpen(true);
    dispatch({ type: ACTIONS.GOTO, index });
    document.body.classList.add("slider-open");
  };

  function closeSlider() {
    setIsOpen((value) => {
      if (value) {
        document.body.classList.remove("slider-open");
        return false;
      }
      return value;
    });
  }

  function onClickCloseSlider(event) {
    if (
      event.target.className === "slider slider-active" ||
      event.currentTarget.className === "slider-close"
    ) {
      closeSlider();
    }
  }

  const escFunction = useCallback((event) => {
    if(event.key === "Escape") {
      closeSlider();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  return (
    <div className="portfolio-section container">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="wrapper">
        <Cards cards={state.items} onClickOpenSlider={onClickOpenSlider} />
        <Slider
          data={state.items}
          isOpen={isOpen}
          currentSlide={state.currentIndex}
          dispatch={dispatch}
          onClickCloseSlider={onClickCloseSlider}
        />
      </div>
    </div>
  );
}

const ACTIONS = {
  NEXT: "next",
  PREV: "prev",
  GOTO: "goto",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEXT:
      return {
        ...state,
        currentIndex:
          state.currentIndex === state.items.length - 1
            ? 0
            : state.currentIndex + 1,
      };
    case ACTIONS.PREV:
      return {
        ...state,
        currentIndex:
          state.currentIndex === 0
            ? state.items.length - 1
            : state.currentIndex - 1,
      };
    case ACTIONS.GOTO:
      return {
        ...state,
        currentIndex: action.index,
      };
    default:
      return state;
  }
}
