import React, {useState, useCallback, useEffect} from 'react';


import granitPreview from '../images/portfolio/granit_preview.png';
import granitSlider1 from '../images/portfolio/granit_slider_1.png';
import granitSlider2 from '../images/portfolio/granit_slider_2.png';
import granitSlider3 from '../images/portfolio/granit_slider_3.png';
import granitSlider4 from '../images/portfolio/granit_slider_4.png';

import collabSlider1 from '../images/portfolio/collab_slider_1.png';
import collabSlider2 from '../images/portfolio/collab_slider_2.png';
import collabSlider3 from '../images/portfolio/collab_slider_3.png';
import collabSlider4 from '../images/portfolio/collab_slider_4.png';

import avtoharPreview from '../images/portfolio/avtohar_preview.png';
import avtoharSlider1 from '../images/portfolio/avtohar_slider_1.png';
import avtoharSlider2 from '../images/portfolio/avtohar_slider_2.png';
import avtoharSlider3 from '../images/portfolio/avtohar_slider_3.png';
import avtoharSlider4 from '../images/portfolio/avtohar_slider_4.png';

import qaSlider1 from '../images/portfolio/qa_slider_1.png';
import qaSlider2 from '../images/portfolio/qa_slider_2.png';
import qaSlider3 from '../images/portfolio/qa_slider_3.png';
import qaSlider4 from '../images/portfolio/qa_slider_4.png';

import procentPreview from '../images/portfolio/procent_preview.png';
import procentSlider1 from '../images/portfolio/procent_slider_1.png';
import procentSlider2 from '../images/portfolio/procent_slider_2.png';
import procentSlider3 from '../images/portfolio/procent_slider_3.png';
import procentSlider4 from '../images/portfolio/procent_slider_4.png';

import enduroPreview from '../images/portfolio/enduro_preview.png';
import enduroSlider1 from '../images/portfolio/enduro_slider_1.png';
import enduroSlider2 from '../images/portfolio/enduro_slider_2.png';
import enduroSlider3 from '../images/portfolio/enduro_slider_3.png';
import enduroSlider4 from '../images/portfolio/enduro_slider_4.png';

const data = [
  {
    id: '1',
    title: 'Website for company Granit:',
    subtitle: 'Design of UI/UX, Web Development and SEO',
    text: 'Created a complete website for Granit Extreme Center using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
    imgPreview: granitPreview,
    images: [granitSlider1, granitSlider2, granitSlider3, granitSlider4],
    gitHub: null,
    desc: {
      p1: 'Created a complete website for Granit Extreme Center using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
      link1: {
        text: 'granitbrz.ru',
        href: 'https://granitbrz.ru'
      },
      ul1: {
        title: 'Includes:',
        li: ['5 Pages', 'Form', 'Slider', 'CSS3 animations']
      },
      link2: null,
      ul2: null
    }
  },
  {
    id: '2',
    title: 'Real-time Image Collaboration:',
    subtitle: 'WebSocket, JavaScript, HTML5 Canvas and Node.js',
    text: 'The client side is implemented in JavaScript and WebSockets; featuring Drag & Drop, Canvas drawing, collaborative drawing and commenting on images.',
    imgPreview: collabSlider1,
    images: [collabSlider1, collabSlider2, collabSlider3, collabSlider4],
    gitHub: 'https://github.com/NataliaFomina/realtime-image-collab',
    desc: {
      p1: 'The client side is implemented in JavaScript and WebSockets; featuring Drag & Drop, Canvas drawing, collaborative drawing and commenting on images.',
      link1: {
        text: 'natalia-realtime-image-collab.herokuapp.com',
        href: 'https://natalia-realtime-image-collab.herokuapp.com'
      },
      ul1: {
        title: 'The service provides users with the following options:',
        li: ['Upload images.', 'Add comments to a specific part of the image.', 'Draw on top of the image.']
      },
      link2: null,
      ul2: {
        title: 'The service is also equipped with collaborative elements:',
        li:
          ['The uploaded image has a unique link that can be shared.',
            'All users viewing the image will be notified of new comments on the image.',
            'All users who view the image in paint mode can see what other users are drawing.'
          ]
      },
    }
  },
  {
    id: '3',
    title: 'Website for company Autoharakter:',
    subtitle: 'WebSocket, JavaScript, HTML5 Canvas and Node.js',
    text: 'Created a complete website for Avtoharakter using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
    imgPreview: avtoharPreview,
    images: [avtoharSlider1, avtoharSlider2, avtoharSlider3, avtoharSlider4],
    gitHub: null,
    desc: {
      p1: 'Created a complete website for Avtoharakter using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
      link1: {
        text: 'autoharakter.ru',
        href: 'https://autoharakter.ru'
      },
      ul1: {
        title: 'Includes:',
        li: ['20 Pages', 'Forms', 'Sliders', 'CSS3 animations']
      },
      link2: null,
      ul2: null
    }
  },
  {
    id: '4',
    title: 'Question and answer WebApp:',
    subtitle: 'Featuring PHP, SQL, MVC and HTML5',
    text: 'Question and answer web application with guest and administrator portals. The web application is implemented in PHP, using MVC architecture, components are implemented using OOP, data is stored in a relational database.',
    imgPreview: qaSlider1,
    images: [qaSlider1, qaSlider2, qaSlider3, qaSlider4],
    gitHub: 'https://github.com/NataliaFomina/qa-webapp',
    desc: {
      p1: 'Question and answer web application with guest and administrator portals. The web application is implemented in PHP, using MVC architecture, components are implemented using OOP, data is stored in a relational database.',
      link1: {
        text: 'Guest portal',
        href: 'https://natalia-qa-webapp.herokuapp.com/index.php?c=front&a=categories&categoryId=all'
      },
      ul1: {
        title: 'Guest portal:',
        li: [
          'Users can browse categories, questions and answers.',
          'Any user can ask a question by entering their name, email address, selecting a category and writing the text of the question.'
        ],
      },
      link2: {
        text: 'Admin portal',
        href: 'https://natalia-qa-webapp.herokuapp.com/'
      },
      ul2: {
        title: 'Admin portal (username: admin, password: admin):',
        li:
          ['General section: the number of questions in each category, the number of unanswered questions and the number of administrators.',
            'Administrator section: a list of administrators with the ability to remove or change the password, and add a new administrator.'
          ]
      }
    }
  },
  {
    id: '5',
    title: 'Website for company Procent:',
    subtitle: 'Design of UI/UX, Web Development and SEO',
    text: 'Created a complete website for Procent Finance using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
    imgPreview: procentPreview,
    images: [procentSlider1, procentSlider2, procentSlider3, procentSlider4],
    gitHub: null,
    desc: {
      p1: 'Created a complete website for Procent Finance using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
      link1: {
        text: 'процентденьги.рф',
        href: 'http://процентденьги.рф'
      },
      ul1: {
        title: 'Includes:',
        li: ['4 Pages', 'Forms', 'Sliders', 'CSS3 animations']
      },
      link2: null,
      ul2: null
    }
  },
  {
    id: '6',
    title: 'Website for company Enduro:',
    subtitle: 'Design of UI/UX, Web Development and SEO',
    text: 'Created a complete website for Enduro travel in Crimea using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
    imgPreview: enduroPreview,
    images: [enduroSlider1, enduroSlider2, enduroSlider3, enduroSlider4],
    gitHub: null,
    desc: {
      p1: 'Created a complete website for Enduro travel in Crimea using HTML5, CSS Flexbox to insure responsiveness, SVG vector graphics, and high resolution images.',
      link1: {
        text: 'crimeatrophy.ru',
        href: 'http://crimeatrophy.ru'
      },
      ul1: {
        title: 'Includes:',
        li: ['4 Pages', 'Forms', 'Sliders']
      },
      link2: null,
      ul2: null
    }
  }
];

function SliderImage({images}) {
  const [imageActive, setImageActive] = useState(images[0]);
  const imagesArray = images.map((image, index) => {
    return <div className={`${image === imageActive ? "slider-images-active" : ""} `} key={index}>
      <img src={image}
           onClick={() => setImageActive(image)}
           alt="Natalia Fomina portfolio"/>
    </div>
  });

  return (
    <div className="slider-img">
      <div className="slider-img-active">
        <img src={imageActive} alt="Natalia Fomina portfolio"/>
      </div>
      <div className="slider-images">
        {imagesArray}
      </div>
    </div>
  )
}

function Cards({onClickOpenSlider, cards}) {
  return (
    <div className="cards">
      {cards.map(card => <div
        className="card"
        id={card.id}
        key={card.id}
      >
        <div className="card-img">
          <img src={card.imgPreview} alt="Natalia Fomina portfolio"/>
        </div>
        <section className="card-container">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-subtitle">{card.subtitle}</p>
          <p className="card-text">{card.text}</p>
        </section>
        <div className="card-btns">
          <button className="card-btn card-btn-open" onClick={() => onClickOpenSlider(card)}>
            Open project
          </button>
          {
            card.gitHub &&
            <button className="card-btn card-btn-git">
              <a href={card.gitHub} target="_blank" rel="noreferrer">
                <i className="fab fa-github"/>GitHub
              </a>
            </button>
          }
        </div>
      </div>)}
    </div>
  )
}

function Slider(props) {
  const {data, isOpen, currentSlide, onClickCloseSlider, onClickPrevSlide, onClickNextSlide} = props;
  return (
    <div className={`slider ${isOpen ? 'slider-active' : ''}`}
         onClick={onClickCloseSlider}
    >
      <div className="slider-container">
        <div className="slider-slides">
          {data.map(e => <div
            className={`slider-slide ${e.id === currentSlide.id ? 'slider-slide-active' : ''}`}
            id={e.id}
            key={e.id}
          >

            <SliderImage images={e.images}/>

            <div className="slider-desc">
              <h3 className="slider-desc-title">{e.title}</h3>
              <p className="slider-desc-subtitle">{e.subtitle}</p>
              <p className="slider-desc-text">{e.desc.p1}</p>
              <p className="slider-desc-link">Link:
                <a href={e.desc.link1.href} target="_blank" rel="noreferrer">{e.desc.link1.text}</a>
              </p>
              <ul className="slider-desc-list">{e.desc.ul1.title}
                {e.desc.ul1.li.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
              {
                e.desc.link2 &&
                <p className="slider-desc-link">Link:
                  <a href={e.desc.link2.href} target="_blank" rel="noreferrer">{e.desc.link2.text}</a>
                </p>
              }
              {
                e.desc.ul2 &&
                <ul className="slider-desc-list">{e.desc.ul2.title}
                  {e.desc.ul2.li.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              }
            </div>
          </div>)
          }
        </div>
        <div className="slider-arrows">
          <div className="slider-arrow-left" onClick={onClickPrevSlide}></div>
          <div className="slider-arrow-right" onClick={onClickNextSlide}></div>
        </div>
        <div className="slider-close" onClick={onClickCloseSlider}>
          <div className="slider-close-right"/>
          <div className="slider-close-left"/>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenSlider = (slide) => {
    setCurrentSlide(slide);
    setIsOpen(true);
    document.body.classList.add('slider-open');
  }

  function closeSlider() {
    setIsOpen(value => {
      if (value) {
        document.body.classList.remove('slider-open');
        return false;
      }
      return value;
    });
  }

  function onClickCloseSlider(event) {
    if (event.target.className === "slider slider-active" || event.currentTarget.className === "slider-close") {
      closeSlider();
    }
  }

  const escFunction = useCallback((event) => {
    closeSlider();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  function onClickPrevSlide() {
    const i = data.indexOf(currentSlide);
    if (i === 0) {
      setCurrentSlide(data[data.length - 1]);
    } else {
      setCurrentSlide(data[i - 1]);
    }
  }

  function onClickNextSlide() {
    const i = data.indexOf(currentSlide);
    if (i === data.length - 1) {
      setCurrentSlide(data[0]);
    } else {
      setCurrentSlide(data[i + 1]);
    }
  }

  return (
    <div className="portfolio-section container">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="wrapper">
        <Cards cards={data}
               onClickOpenSlider={onClickOpenSlider}/>
        <Slider data={data}
               isOpen={isOpen}
               currentSlide={currentSlide}
               onClickPrevSlide={onClickPrevSlide}
               onClickNextSlide={onClickNextSlide}
               onClickCloseSlider={onClickCloseSlider}/>
      </div>
    </div>
  )
}