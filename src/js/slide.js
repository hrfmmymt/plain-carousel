export default function setSlideAnimations () {
  const parents = document.getElementsByClassName('carousel__list')
  let carouselListWidth

  // create captions
  Array.prototype.forEach.call(parents, (node, index) => {
    const itemList = node.getElementsByTagName('li')
    node.style.width = node.offsetWidth * itemList.length + 'px'
    node.parentNode.style.overflow = 'hidden'
    node.parentNode.style.maxWidth = 'none'
    node.parentNode.style.position = 'static'
    node.parentNode.style.cursor = '-webkit-grab'
    node.style.clear = 'both'
    node.style.transition = 'all 200ms esse-out'
    node.style.transform = 'translate3d(0, 0, 0)'

    Array.prototype.forEach.call(itemList, (item, index) => {
      const carouselItem = item.children[0]
      item.style.display = 'block'
      item.style.float = 'left'
      item.style.width = 100 / itemList.length + '%'
    })
  })
}
