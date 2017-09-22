import setNumbers from './number'
import setCaptions from './caption'
import setArrows from './arrow'
import setIndicators from './indicator'
import autoPlay from './autoplay'

(global => {
  global.plainCarousel = () => {
    'use strict'

    setNumbers()
    setCaptions()
    setArrows()
    setIndicators()
    setInterval(autoPlay, 5000)

    const parents = document.getElementsByClassName('carousel__list')
    Array.prototype.forEach.call(parents, (node, index) => {
      const carouselItems = parents[index].getElementsByClassName('carousel__item')
      const indicators = parents[index].getElementsByClassName('carousel__indicator')
      carouselItems[0].classList.add('carousel__active')
      if (indicators.length > 0) indicators[0].classList.add('indicator__active')
    })
  }
})(typeof global !== 'undefined' ? global : window)
