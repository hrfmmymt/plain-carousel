import numbersFunc from './number'
import captionsFunc from './caption'
import arrowsFunc from './arrow'
import indicatorsFunc from './indicator'

(global => {
  global.plainCarousel = () => {
    'use strict'

    numbersFunc()
    captionsFunc()
    arrowsFunc()
    indicatorsFunc()

    const parents = document.getElementsByClassName('carousel__list')
    Array.prototype.forEach.call(parents, (node, index) => {
      const slides = parents[index].getElementsByClassName('carousel__item')
      const indicators = parents[index].getElementsByClassName('carousel__indicator')
      slides[0].classList.add('carousel__active')
      indicators[0].classList.add('indicator__active')
    })
  }
})(typeof global !== 'undefined' ? global : window)
