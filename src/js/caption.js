export default function setCaptions () {
  const parents = document.getElementsByClassName('carousel__list')

  // create captions
  Array.prototype.forEach.call(parents, node => {
    const itemList = node.getElementsByTagName('li')
    let carouselCaption

    Array.prototype.forEach.call(itemList, item => {
      const carouselItem = item.children[0]
      carouselCaption = carouselItem.dataset.caption || carouselItem.getAttribute('alt')
      const captionElements = document.createElement('span')

      captionElements.className = 'carousel__caption'
      captionElements.innerHTML = carouselCaption
      item.appendChild(captionElements)
    })
  })
}
