export default function autoPlay () {
  const parents = document.getElementsByClassName('carousel__list')

  Array.prototype.forEach.call(parents, ulElements => {
    const carouselItems = ulElements.getElementsByClassName('carousel__item')
    const currentCarouselItem = ulElements.getElementsByClassName('carousel__active')
    const indicators = ulElements.parentNode.getElementsByClassName('carousel__indicator')
    const currentIndicator = ulElements.parentNode.getElementsByClassName('indicator__active')

    // carousel items
    Array.prototype.forEach.call(currentCarouselItem, currentItem => {
      currentItem.classList.remove('carousel__active')
      let nextCarouselItem = currentItem.nextElementSibling || carouselItems[0]
      if (nextCarouselItem.classList.contains('carousel__item')) {
        nextCarouselItem.classList.add('carousel__active')
      } else {
        carouselItems[0].classList.add('carousel__active')
      }
      return false
    })

    // indicators
    Array.prototype.forEach.call(currentIndicator, currentItem => {
      currentItem.classList.remove('indicator__active')
      let nextIndicator = currentItem.nextElementSibling || indicators[0]
      if (nextIndicator.classList.contains('carousel__indicator')) {
        nextIndicator.classList.add('indicator__active')
      } else {
        indicators[0].classList.add('indicator__active')
      }
      return false
    })
  })
}
