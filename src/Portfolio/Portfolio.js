import React, {useState, useEffect, useCallback} from 'react';
import './Portfolio.scss';
import slider from '../slider';
import collabPreview from './img/collab_preview.jpg';
import qaPreview from './img/qa_preview.jpg';
import procentPreview from './img/procent_preview.jpg';
import enduroPreview from './img/enduro_preview.jpg';
import granitSlider1 from './img/granit_slider_1.jpg';
import granitSlider2 from './img/granit_slider_2.jpg';
import granitSlider3 from './img/granit_slider_3.jpg';
import granitSlider4 from './img/granit_slider_4.jpg';
import avtoharSlider1 from './img/avtohar_slider_1.jpg';
import avtoharSlider2 from './img/avtohar_slider_2.jpg';
import avtoharSlider3 from './img/avtohar_slider_3.jpg';
import avtoharSlider4 from './img/avtohar_slider_4.jpg';

const granitImages = [granitSlider1, granitSlider2, granitSlider3, granitSlider4];
const collaborationImages = [granitSlider1, granitSlider1, granitSlider1, granitSlider1];
const avtoharakterImages = [avtoharSlider1, avtoharSlider2, avtoharSlider3, avtoharSlider4];
const gaImages = [granitSlider1, granitSlider1, granitSlider1, granitSlider1];
const procentImages = [granitSlider1, granitSlider1, granitSlider1, granitSlider1];
const enduroImages = [granitSlider1, granitSlider1, granitSlider1, granitSlider1];

function SliderImage({images}) {
  const [imageActive, setImageActive] = useState(images[0]);
  const imagesArray = images.map((image, index) => {
    return <div className={`${image === imageActive ? "slider-images-active" : ""} `}>
      <img src={image} key={index}
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

function Portfolio() {
  const [sliderActive, setSliderActive] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.slider').forEach(item => slider(item));
  }, []);

  function onClickCard(event) {
    setSliderActive(true);
  }

  function onClickCloseModal(event) {
    if (event.target.className === "slider-modal slider-modal-active" || event.currentTarget.className === "slider-control-close") {
      setSliderActive(false);
    }
  }

  const escFunction = useCallback((event) => {
    setSliderActive(value => {
      if (value && event.keyCode === 27) {
        return false;
      }
      return value;
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className="portfolio-section">
      <h2></h2>
      <div className="slider">

        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img src={granitSlider2}
                   alt="Natalia Fomina portfolio"/>
            </div>
            <section className="card-container">
              <h3 className="card-title">
                Website for company Granit:<br/>
                Design of UI & UX, Web Developing, SEO
              </h3>
              <p className="card-desc">Creating full website for Granit extreme center. Using technologies as Flex
                Box, fully responsive, HTML5, images based on high quality resolution & SVG.
              </p>
              <p className="card-desc">Includes 5 Pages, form, slider, animation.</p>
            </section>
            <div className="card-btns">
              <button className="card-btn card-btn-open card-btn-long"
                      onClick={onClickCard}>
                Open project
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={collabPreview}
                   alt="Natalia Fomina portfolio"/>
            </div>
            <section className="card-container">
              <h3 className="card-title">
                Real-time Image Collaboration:<br/>
                WebSocket, JavaScript Canvas, Node.js
              </h3>
              <p className="card-desc">Client part is implemented on JavaScript, Drag & Drop images, Canvas drawing,
                DOM, collective drawing and commenting interaction with the server via websocket.
              </p>
            </section>
            <div className="card-btns">
              <button className="card-btn card-btn-open"
                      onClick={onClickCard}>
                Open project
              </button>
              <button className="card-btn card-btn-git">
                <a href="https://github.com/NataliaFomina/realtime-image-collab">
                  <i className="fab fa-github"></i>GitHub
                </a>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={avtoharSlider1}
                   alt="Natalia Fomina portfolio"/>
            </div>
            <section className="card-container">
              <h3 className="card-title">
                Website for company Avtoharakter:<br/>
                Design of UI & UX, Web Developing, SEO
              </h3>
              <p className="card-desc">Creating full website for Avtoharakter. Using technologies as Flex Box, fully
                responsive, HTML5, images based on high quality resolution & SVG.
              </p>
              <p className="card-desc">Includes 20 Pages, form, slider, hover image gallery, CSS3 animation.</p>
            </section>
            <div className="card-btns">
              <button className="card-btn card-btn-open card-btn-long"
                      onClick={onClickCard}>
                Open project
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={qaPreview}
                   alt="Natalia Fomina portfolio"/>
            </div>
            <section className="card-container">
              <h3 className="card-title">
                Question and answer WebApp:<br/>
                Featuring PHP, SQL, MVC and HTML5</h3>
              <p className="card-desc">Question and answer web application with guest and administrator portals.</p>
              <p className="card-desc">The system is implemented in PHP, using MVC architecture, components are
                implemented using OOP, data is stored in a relational database.
              </p>
            </section>
            <div className="card-btns">
              <button className="card-btn card-btn-open"
                      onClick={onClickCard}>
                Open project
              </button>
              <button className="card-btn card-btn-git">
                <a href="https://github.com/NataliaFomina/qa-webapp">
                  <i className="fab fa-github"></i>GitHub
                </a>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={procentPreview}
                   alt="Natalia Fomina portfolio"/>
            </div>
            <section className="card-container">
              <h3 className="card-title">
                Website for company Procent:<br/>
                Design of UI & UX, Web Developing, SEO
              </h3>
              <p className="card-desc">Creating full website for Procent finance. Using technologies as Flex Box,
                fully responsive, HTML5, images based on high quality resolution & SVG.
              </p>
              <p className="card-desc">Includes 3 Pages, form, slider, CSS3 animation.</p>
            </section>
            <div className="card-btns">
              <button className="card-btn card-btn-open card-btn-long"
                      onClick={onClickCard}>
                Open project
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={enduroPreview}
                   alt="Natalia Fomina portfolio"/>
            </div>
            <section className="card-container">
              <h3 className="card-title">
                Website for company Enduro:<br/>
                Design of UI & UX, Web Developing, SEO
              </h3>
              <p className="card-desc">Creating full website for Enduro travel in Crimea. Using technologies as Flex
                Box, fully responsive, HTML5, images based on high quality resolution & SVG.
              </p>
              <p className="card-desc">Includes 4 Pages, form, hover gallery, slider.</p>
            </section>
            <div className="card-btns">
              <button className="card-btn card-btn-open card-btn-long"
                      onClick={onClickCard}>
                Open project
              </button>
            </div>
          </div>
        </div>

        <div className={`slider-modal ${sliderActive ? "slider-modal-active" : ""}`} onClick={onClickCloseModal}>
          <div className="slider-cont">
            <div className="slider-wrapper">

              <div className="slider-item">
                <div className="slider-content">
                  <SliderImage images={granitImages}/>

                  <div className="slider-desc">
                    <h3 className="slider-desc-title">Website for company Granit:<br/> Design of UI & UX, Web
                      Developing, SEO</h3>
                    <p className="slider-desc-text">
                      Creating full website for Granit extreme center. Using technologies as Flex
                      Box, fully
                      responsive, HTML5, images based on high quality resolution & SVG.
                    </p>
                    <ul className="slider-desc-list">Includes:
                      <li>5 Pages</li>
                      <li>Form</li>
                      <li>Slider</li>
                      <li>Animation</li>
                    </ul>
                    <p>
                      Link:
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-content">
                  <SliderImage images={collaborationImages}/>

                  <div className="slider-desc">
                    <h3 className="slider-desc-title">Real-time Image Collaboration:<br/> WebSocket, JavaScript
                      Canvas,
                      Node.js</h3>
                    <p className="slider-desc-text">Client part is implemented on JavaScript, Drag & drop images,
                      Canvas drawing, DOM, collective
                      drawing and commenting interaction with the server via websocket.</p>
                    <ul className="slider-desc-list">The service provides users with the following options:
                      <li>Upload images.</li>
                      <li>Add comments to a specific part of the image.</li>
                      <li>Draw on top of the image.</li>
                    </ul>
                    <ul className="slider-desc-list">The service is also equipped with collaborative elements:
                      <li>The uploaded image has a unique link that can be shared.</li>
                      <li>All users viewing the image will be notified of new comments on the image.</li>
                      <li>All users who view the image in paint mode can see what other users are drawing.</li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className="slider-item">
                <div className="slider-content">
                  <SliderImage images={avtoharakterImages}/>
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-content">
                  <SliderImage images={gaImages}/>
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-content">
                  <SliderImage images={procentImages}/>
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-content">
                  <SliderImage images={enduroImages}/>
                </div>
              </div>
            </div>
            <span className="slider-control slider-control-left slider-control-icon"></span>
            <span className="slider-control slider-control-right slider-control-icon"></span>
          </div>
          <div className="slider-control-close" onClick={onClickCloseModal}>
            <div className="close-right"></div>
            <div className="close-left"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;