export default function init () {
  const parents = document.getElementsByClassName('carousel__list')

  Array.prototype.forEach.call(parents, (node, index) => {
    const carouselItems = parents[index].getElementsByClassName('carousel__item')
    const indicators = parents[index].getElementsByClassName('carousel__indicator')
    carouselItems[0].classList.add('carousel__active')
    if (indicators.length > 0) indicators[0].classList.add('indicator__active')
  })
}
