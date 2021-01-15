import React, {useState, useEffect} from 'react';
import './Portfolio.scss';

function slider(item) {
  const sliderWrapper = item.querySelector('.slider-wrapper'),
      sliderItems = item.querySelectorAll('.slider-item'),
      sliderControlLeft = item.querySelector('.slider-control-left'),
      sliderControlRight = item.querySelector('.slider-control-right'),
      wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
      itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
      step = itemWidth / wrapperWidth * 100,
      cards = item.querySelectorAll('.card-btn-open');

  let positionLeftItem = 0,
      translateX = 0,
      items = [],
      currentIndex = 1;

  sliderItems.forEach((el, i) => items.push({item: el, position: i, transform: 0}));

  cards.forEach((card, i) => card.addEventListener('click', () => setSlide(i + 1)));

  let position = {
    getItemMin() {
      let indexItem = 0;
      items.forEach((item, i) => {
        if (item.position < items[indexItem].position) {
          indexItem = i
        }
      });
      return indexItem
    },

    getItemMax() {
      let indexItem = 0;
      items.forEach((item, i) => {
        if (item.position > items[indexItem].position) {
          indexItem = i
        }
      })
      return indexItem
    },

    getMin() {
      return items[position.getItemMin()].position
    },

    getMax() {
      return items[position.getItemMax()].position
    }
  }

  function setSlide(newIndex) {
    if (newIndex === currentIndex) {
      return;
    }

    let direction;
    let count;
    if (newIndex > currentIndex) {
      direction = 'right';
      count = newIndex - currentIndex;
    } else if (newIndex < currentIndex) {
      direction = 'left';
      count = currentIndex - newIndex;
    }
    for (let i = 0; i < count; i++) {
      transformItem(direction);
    }
  }

  function transformItem(direction) {
    let nextItem;
    sliderWrapper.style.transition = 'transform 0.6s ease';
    if (direction === 'right') {
      positionLeftItem++;
      if (positionLeftItem + wrapperWidth / itemWidth - 1 >= position.getMax()) {
        nextItem = position.getItemMin();
        items[nextItem].position = position.getMax() + 1;
        items[nextItem].transform += items.length * 100;
        items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
      }
      translateX -= step;

      currentIndex++;
      if (currentIndex > items.length) {
        currentIndex = 1;
      }
    }
    if (direction === 'left') {
      positionLeftItem--;
      if (positionLeftItem <= position.getMin()) {
        nextItem = position.getItemMax();
        items[nextItem].position = position.getMin() - 1;
        items[nextItem].transform -= items.length * 100;
        items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
      }
      translateX += step;

      currentIndex--;
      if (currentIndex === 0) {
        currentIndex = items.length;
      }
    }
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
  }

  sliderControlLeft.addEventListener('click', () => transformItem('left'));
  sliderControlRight.addEventListener('click', () => transformItem('right'));
}

function Portfolio() {
  const [sliderActive, setSliderActive] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.slider').forEach(item => slider(item));
  }, []);

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