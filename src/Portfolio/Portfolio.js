import React, {useState, useEffect} from 'react';
import './Portfolio.scss';
import slider from '../slider';

function Portfolio() {
  const [sliderActive, setSliderActive] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.slider').forEach(item => slider(item));
  }, [sliderActive]);

  function onClickCard(event) {
    setSliderActive(true);
  }

  return (
      <div className="portfolio-section">
        <h2></h2>
        <div className="slider">

          <div className="cards">
            <div className="card">
              <div className="card-img granit"></div>
              <section className="card-container">
                <h3 className="card-title">Granit</h3>
                <p className="card-desc">Client part is implemented on JavaScript, Drag & drop images, Canvas drawing,
                  DOM, collective drawing
                  and commenting interaction with the server via websocket.</p>
                <button className="card-btn card-btn-open card-long" onClick={onClickCard}>Open project</button>
              </section>
            </div>

            <div className="card">
              <div className="card-img collaboration"></div>
              <section className="card-container">
                <h3 className="card-title">Real-time Image Collaboration: WebSocket, JavaScript Canvas, Node.js</h3>
                <p className="card-desc">Client part is implemented on JavaScript, Drag & drop images, Canvas drawing,
                  DOM, collective drawing
                  and commenting interaction with the server via websocket.</p>
                <div className="card-btns">
                  <button className="card-btn card-btn-open" onClick={onClickCard}>Open project</button>
                  <button className="card-btn card-btn-git"><a
                      href="https://github.com/NataliaFomina/realtime-image-collab"><i className="fab fa-github"></i>GitHub</a>
                  </button>
                </div>
              </section>
            </div>

            <div className="card">
              <div className="card-img avtoharakter"></div>
              <section className="card-container">
                <h3 className="card-title">Avtoharakter</h3>
                <p className="card-desc">Client part is implemented on JavaScript, Drag & drop images, Canvas drawing,
                  DOM, collective drawing
                  and commenting interaction with the server via websocket.</p>
                <button className="card-btn card-btn-open card-long" onClick={onClickCard}>Open project</button>
              </section>
            </div>

            <div className="card">
              <div className="card-img ga"></div>
              <section className="card-container">
                <h3 className="card-title">QA-WebApp: Featuring PHP, SQL, MVC and HTML5</h3>
                <p className="card-desc">Client part is implemented on JavaScript, Drag & drop images, Canvas drawing,
                  DOM, collective drawing
                  and commenting interaction with the server via websocket.</p>
                <div className="card-btns">
                  <button className="card-btn card-btn-open" onClick={onClickCard}>Open project</button>
                  <button className="card-btn card-btn-git"><a href="https://github.com/NataliaFomina/qa-webapp"><i
                      className="fab fa-github"></i>GitHub</a></button>
                </div>
              </section>
            </div>

            <div className="card">
              <div className="card-img procent"></div>
              <section className="card-container">
                <h3 className="card-title">Procent</h3>
                <p className="card-desc">Client part is implemented on JavaScript, Drag & drop images, Canvas drawing,
                  DOM, collective drawing
                  and commenting interaction with the server via websocket.</p>
                <button className="card-btn card-btn-open card-long" onClick={onClickCard}>Open project</button>
              </section>
            </div>

            <div className="card">
              <div className="card-img enduro"></div>
              <section className="card-container">
                <h3 className="card-title">Enduro</h3>
                <p className="card-desc">Client part is implemented on JavaScript, Drag & drop images, Canvas drawing,
                  DOM, collective drawing
                  and commenting interaction with the server via websocket.</p>
                <button className="card-btn card-btn-open card-long" onClick={onClickCard}>Open project</button>
              </section>
            </div>
          </div>

          <div className={`slider-cont ${sliderActive ? "slider-active" : ""}`}>
            <div className="slider-wrapper">
              <div className="slider-item">1</div>
              <div className="slider-item">2</div>
              <div className="slider-item">3</div>
              <div className="slider-item">4</div>
              <div className="slider-item">5</div>
              <div className="slider-item">6</div>
            </div>
            <span className="slider-control slider-control-left control-cars"></span>
            <span className="slider-control slider-control-right control-cars"></span>
          </div>
          {/*<span className="slider-control slider-control-left control-cars"></span>*/}
          {/*<span className="slider-control slider-control-right control-cars"></span>*/}

        </div>
      </div>
  )
}

export default Portfolio;