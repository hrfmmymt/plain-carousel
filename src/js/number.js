export default function setNumbers () {
  const parents = document.getElementsByClassName('carousel__list')

  // create carousel list number
  Array.prototype.forEach.call(parents, node => {
    const itemList = node.getElementsByTagName('li')
    let carouselLength = itemList.length

    Array.prototype.forEach.call(itemList, (item, index) => {
      let itemLength = index + 1
      const numberElements = document.createElement('span')

      numberElements.className = 'carousel__number'
      numberElements.innerHTML = itemLength + ' / ' + carouselLength
      item.appendChild(numberElements)
    })
  })
}
