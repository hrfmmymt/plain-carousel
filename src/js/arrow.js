export default function arrowsFunc () {
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

    parents[index].appendChild(prevButtons)
    parents[index].appendChild(nextButtons)
  })

  // click events
  const links = document.querySelectorAll('.carousel__prev, .carousel__next')
  Array.prototype.forEach.call(links, (node, index) => {
    links[index].onclick = event => {
      const current = event.target.parentNode
      const carouselItems = current.getElementsByClassName('carousel__item')
      const indicators = current.getElementsByClassName('carousel__indicator')
      const currentCarousel = current.getElementsByClassName('carousel__active')[0]
      const currentindicator = current.getElementsByClassName('indicator__active')[0]

      // initialize
      currentCarousel.classList.remove('carousel__active')
      currentindicator.classList.remove('indicator__active')

      if (event.target.className === 'carousel__next') {
        if (currentCarousel.nextElementSibling.classList.contains('carousel__item')) {
          currentCarousel.nextElementSibling.classList.add('carousel__active')
          currentindicator.nextElementSibling.classList.add('indicator__active')
        } else {
          carouselItems[0].classList.add('carousel__active')
          indicators[0].classList.add('indicator__active')
        }
      }

      if (event.target.className === 'carousel__prev') {
        if (currentCarousel.previousElementSibling) {
          currentCarousel.previousElementSibling.classList.add('carousel__active')
          currentindicator.previousElementSibling.classList.add('indicator__active')
        } else {
          carouselItems[carouselItems.length - 1].classList.add('carousel__active')
          indicators[carouselItems.length - 1].classList.add('indicator__active')
        }
      }
    }
  })
}
