export default function setArrows (options) {
  const parents = document.getElementsByClassName('carousel__list')


  // create arrow buttons
  Array.prototype.forEach.call(parents, (node, index) => {
    const prevButtons = document.createElement('button')
    const nextButtons = document.createElement('button')

    prevButtons.className = 'carousel__prev'
    prevButtons.innerHTML = '&#10094;'
    prevButtons.setAttribute('type', 'button')

    nextButtons.className = 'carousel__next'
    nextButtons.innerHTML = '&#10095;'
    nextButtons.setAttribute('type', 'button')

    parents[index].parentNode.appendChild(prevButtons)
    parents[index].parentNode.appendChild(nextButtons)
  })

  // click events
  const links = document.querySelectorAll('.carousel__prev, .carousel__next')
  Array.prototype.forEach.call(links, (node, index) => {
    links[index].onclick = event => {
      const currentContainer = event.target.parentNode
      const current = currentContainer.children[0]
      const carouselItems = current.getElementsByClassName('carousel__item')
      const indicators = currentContainer.getElementsByClassName('carousel__indicator') || null
      const currentCarousel = current.getElementsByClassName('carousel__active')[0]
      const currentIndicator = currentContainer.getElementsByClassName('indicator__active')[0] || null
      const currentCarouselWidth = currentCarousel.offsetWidth

      // initialize
      currentCarousel.classList.remove('carousel__active')
      if (indicators.length > 0) currentIndicator.classList.remove('indicator__active')

      if (event.target.className === 'carousel__next') {
        if (currentCarousel.nextElementSibling) {
          if (options.slide) {
            currentCarousel.parentNode.style.transform = 'translate3d(-' + currentCarouselWidth + 'px, 0, 0)'
          }
          currentCarousel.nextElementSibling.classList.add('carousel__active')
          if (indicators.length > 0) currentIndicator.nextElementSibling.classList.add('indicator__active')
        } else {
          carouselItems[0].classList.add('carousel__active')
          if (indicators.length > 0) indicators[0].classList.add('indicator__active')
        }
      }

      if (event.target.className === 'carousel__prev') {
        if (currentCarousel.previousElementSibling) {
          currentCarousel.previousElementSibling.classList.add('carousel__active')
          if (indicators.length > 0) currentIndicator.previousElementSibling.classList.add('indicator__active')
        } else {
          carouselItems[carouselItems.length - 1].classList.add('carousel__active')
          if (indicators.length > 0) indicators[carouselItems.length - 1].classList.add('indicator__active')
        }
      }
    }
  })
}
