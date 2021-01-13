import React, { useState, useEffect }  from 'react';
import './Portfolio.scss';

function slider(item) {
  const sliderWrapper = item.querySelector('.slider-wrapper'),
      sliderItems = item.querySelectorAll('.slider-item'),
      sliderControlLeft = item.querySelector('.slider-control-left'),
      sliderControlRight = item.querySelector('.slider-control-right'),
      wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
      itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
      step = itemWidth / wrapperWidth * 100,
      cards = item.querySelectorAll('.card');

  let lastIndex = 0,
      translateX = 0,
      items = [];

  sliderItems.forEach((el, i) => items.push({item: el, position: i, transform: 0}));

  cards.forEach( (card, i) => card.addEventListener('click', () => setSlide(i)));

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

  let sliderIndex = 0;

  function setSlide(index) {
    lastIndex = index;
    translateX = -(index * 100);
    console.log(translateX);
    sliderWrapper.style.transition = 'none';
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
    // sliderWrapper.style.transition= 'transform 0.6s ease';
  }

  function transformItem(direction) {
    sliderWrapper.style.transition= 'transform 0.6s ease';
    if (direction === 'right') {
      lastIndex++;
      if (lastIndex + wrapperWidth / itemWidth - 1 >= position.getMax()) {
        sliderIndex = position.getItemMin();
        items[sliderIndex].position = position.getMax() + 1;
        items[sliderIndex].transform += items.length * 100;
        items[sliderIndex].item.style.transform = `translateX(${items[sliderIndex].transform}%)`
      }
      translateX -= step;
    }
    if (direction === 'left') {
      lastIndex--;
      if (lastIndex <= position.getMin()) {
        sliderIndex = position.getItemMax();
        items[sliderIndex].position = position.getMin() - 1;
        items[sliderIndex].transform -= items.length * 100;
        items[sliderIndex].item.style.transform = 'translateX(' + items[sliderIndex].transform + '%)';
      }
      translateX += step;
    }
    console.log('sliderIndex = ' + sliderIndex);
    console.log('position = ' + items[sliderIndex].position);
    console.log('transform = ' + items[sliderIndex].transform);
    console.log('---')
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
  }

  sliderControlLeft.addEventListener('click', () => transformItem('left'));
  sliderControlRight.addEventListener('click', () => transformItem('right'));
}

function Portfolio() {
  useEffect(() => {
    document.querySelectorAll('.slider').forEach(item => slider(item));
  }, []);

  return(
      <div className='portfolio-section'>
        <div className='slider'>

          <div className='cards'>
            <div className='card one'>1</div>
            <div className='card two'>2</div>
            <div className='card three'>3</div>
            <div className='card four'>4</div>
          </div>

          <div className="slider-cont">
            <div className="slider-wrapper">
              <div className='slider-item'>1</div>
              <div className='slider-item'>2</div>
              <div className='slider-item'>3</div>
              <div className='slider-item'>4</div>
            </div>
          </div>
          <span className="slider-control slider-control-left control-cars"></span>
          <span className="slider-control slider-control-right control-cars"></span>

        </div>



        {/*<div className='slider'>*/}
        {/*  <div className="slider-cont">*/}
        {/*    <div className="slider-wrapper">*/}
        {/*      <div className='slider-item'>1</div>*/}
        {/*      <div className='slider-item'>2</div>*/}
        {/*      <div className='slider-item'>3</div>*/}
        {/*      <div className='slider-item'>4</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <span className="slider-control slider-control-left control-cars"></span>*/}
        {/*  <span className="slider-control slider-control-right control-cars"></span>*/}
        {/*</div>*/}

      </div>
  )
}

export default Portfolio;