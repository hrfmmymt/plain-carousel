export default function setIndicators () {
  const parents = document.getElementsByClassName('carousel__list')

  // create elements
  Array.prototype.forEach.call(parents, (node, index) => {
    // need wrapper elements
    const indicatorParents = document.createElement('div')
    indicatorParents.style.textAlign = 'center'

    // create indicators by carousel list number
    const itemList = node.getElementsByTagName('li')
    Array.prototype.forEach.call(itemList, () => {
      const indicatorElements = document.createElement('button')
      indicatorElements.className = 'carousel__indicator'
      indicatorElements.setAttribute('type', 'button')
      indicatorParents.appendChild(indicatorElements)
    })
    parents[index].appendChild(indicatorParents)
  })

  // click events
  const indicators = document.getElementsByClassName('carousel__indicator')
  Array.prototype.forEach.call(indicators, (indicatorsNode, indicatorsIndex) => {
    indicators[indicatorsIndex].onclick = event => {
      const clickedindicator = event.target
      const parent = clickedindicator.parentNode
      const carouselItems = parent.parentNode.getElementsByClassName('carousel__item')
      let index

      Array.prototype.forEach.call(parent.children, (node, i, indicatorsArray) => {
        indicatorsArray[i].classList.remove('indicator__active')
        carouselItems[i].classList.remove('carousel__active')
        if (indicatorsArray[i] === clickedindicator) {
          index = i
        }
      })

      clickedindicator.classList.add('indicator__active')
      carouselItems[index].classList.add('carousel__active')
    }
  })
}
