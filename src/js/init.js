export default function init () {
  const parents = document.getElementsByClassName('carousel__list')

  Array.prototype.forEach.call(parents, (node, index) => {
    const carouselItems = parents[index].getElementsByClassName('carousel__item')
    carouselItems[0].classList.add('carousel__active')
  })
}
