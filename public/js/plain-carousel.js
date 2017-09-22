(function () {
'use strict';

function init() {
  var parents = document.getElementsByClassName('carousel__list');

  Array.prototype.forEach.call(parents, function (node, index) {
    var carouselItems = parents[index].getElementsByClassName('carousel__item');
    var indicators = parents[index].getElementsByClassName('carousel__indicator');
    carouselItems[0].classList.add('carousel__active');
    if (indicators.length > 0) indicators[0].classList.add('indicator__active');
  });
}

function setNumbers() {
  var parents = document.getElementsByClassName('carousel__list');

  // create carousel list number
  Array.prototype.forEach.call(parents, function (node) {
    var itemList = node.getElementsByTagName('li');
    var carouselLength = itemList.length;

    Array.prototype.forEach.call(itemList, function (item, index) {
      var itemLength = index + 1;
      var numberElements = document.createElement('span');

      numberElements.className = 'carousel__number';
      numberElements.innerHTML = itemLength + ' / ' + carouselLength;
      item.appendChild(numberElements);
    });
  });
}

function setCaptions() {
  var parents = document.getElementsByClassName('carousel__list');

  // create captions
  Array.prototype.forEach.call(parents, function (node) {
    var itemList = node.getElementsByTagName('li');
    var carouselCaption = void 0;

    Array.prototype.forEach.call(itemList, function (item) {
      var carouselItem = item.children[0];
      carouselCaption = carouselItem.dataset.caption || carouselItem.getAttribute('alt');
      var captionElements = document.createElement('span');

      captionElements.className = 'carousel__caption';
      captionElements.innerHTML = carouselCaption;
      item.appendChild(captionElements);
    });
  });
}

function setArrows() {
  var parents = document.getElementsByClassName('carousel__list');

  // create arrow buttons
  Array.prototype.forEach.call(parents, function (node, index) {
    var prevButtons = document.createElement('button');
    var nextButtons = document.createElement('button');

    prevButtons.className = 'carousel__prev';
    prevButtons.innerHTML = '&#10094;';
    prevButtons.setAttribute('type', 'button');

    nextButtons.className = 'carousel__next';
    nextButtons.innerHTML = '&#10095;';
    nextButtons.setAttribute('type', 'button');

    parents[index].appendChild(prevButtons);
    parents[index].appendChild(nextButtons);
  });

  // click events
  var links = document.querySelectorAll('.carousel__prev, .carousel__next');
  Array.prototype.forEach.call(links, function (node, index) {
    links[index].onclick = function (event) {
      var current = event.target.parentNode;
      var carouselItems = current.getElementsByClassName('carousel__item');
      var indicators = current.getElementsByClassName('carousel__indicator') || null;
      var currentCarousel = current.getElementsByClassName('carousel__active')[0];
      var currentIndicator = current.getElementsByClassName('indicator__active')[0] || null;

      // initialize
      currentCarousel.classList.remove('carousel__active');
      if (indicators.length > 0) currentIndicator.classList.remove('indicator__active');

      if (event.target.className === 'carousel__next') {
        if (currentCarousel.nextElementSibling.classList.contains('carousel__item')) {
          currentCarousel.nextElementSibling.classList.add('carousel__active');
          if (indicators.length > 0) currentIndicator.nextElementSibling.classList.add('indicator__active');
        } else {
          carouselItems[0].classList.add('carousel__active');
          if (indicators.length > 0) indicators[0].classList.add('indicator__active');
        }
      }

      if (event.target.className === 'carousel__prev') {
        if (currentCarousel.previousElementSibling) {
          currentCarousel.previousElementSibling.classList.add('carousel__active');
          if (indicators.length > 0) currentIndicator.previousElementSibling.classList.add('indicator__active');
        } else {
          carouselItems[carouselItems.length - 1].classList.add('carousel__active');
          if (indicators.length > 0) indicators[carouselItems.length - 1].classList.add('indicator__active');
        }
      }
    };
  });
}

function setIndicators() {
  var parents = document.getElementsByClassName('carousel__list');

  // create elements
  Array.prototype.forEach.call(parents, function (node, index) {
    // need wrapper elements
    var indicatorParents = document.createElement('div');
    indicatorParents.style.textAlign = 'center';

    // create indicators by carousel list number
    var itemList = node.getElementsByTagName('li');
    Array.prototype.forEach.call(itemList, function () {
      var indicatorElements = document.createElement('button');
      indicatorElements.className = 'carousel__indicator';
      indicatorElements.setAttribute('type', 'button');
      indicatorParents.appendChild(indicatorElements);
    });
    parents[index].appendChild(indicatorParents);
  });

  // click events
  var indicators = document.getElementsByClassName('carousel__indicator');
  Array.prototype.forEach.call(indicators, function (indicatorsNode, indicatorsIndex) {
    indicators[indicatorsIndex].onclick = function (event) {
      var clickedindicator = event.target;
      var parent = clickedindicator.parentNode;
      var carouselItems = parent.parentNode.getElementsByClassName('carousel__item');
      var index = void 0;

      Array.prototype.forEach.call(parent.children, function (node, i, indicatorsArray) {
        indicatorsArray[i].classList.remove('indicator__active');
        carouselItems[i].classList.remove('carousel__active');
        if (indicatorsArray[i] === clickedindicator) {
          index = i;
        }
      });

      clickedindicator.classList.add('indicator__active');
      carouselItems[index].classList.add('carousel__active');
    };
  });
}

function autoPlay() {
  var parents = document.getElementsByClassName('carousel__list');

  Array.prototype.forEach.call(parents, function (parentNode) {
    var carouselItems = parentNode.getElementsByClassName('carousel__item');
    var currentCarouselItem = parentNode.getElementsByClassName('carousel__active');
    var indicators = parentNode.getElementsByClassName('carousel__indicator');
    var currentIndicator = parentNode.getElementsByClassName('indicator__active');

    // carousel items
    Array.prototype.forEach.call(currentCarouselItem, function (currentItem) {
      currentItem.classList.remove('carousel__active');
      var nextCarouselItem = currentItem.nextElementSibling || carouselItems[0];
      if (nextCarouselItem.classList.contains('carousel__item')) {
        nextCarouselItem.classList.add('carousel__active');
      } else {
        carouselItems[0].classList.add('carousel__active');
      }
    });

    // indicators
    Array.prototype.forEach.call(currentIndicator, function (currentItem) {
      currentItem.classList.remove('indicator__active');
      var nextIndicator = currentItem.nextElementSibling || indicators[0];
      if (nextIndicator.classList.contains('carousel__indicator')) {
        nextIndicator.classList.add('indicator__active');
      } else {
        indicators[0].classList.add('indicator__active');
      }
    });
  });
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  global.plainCarousel = function (options) {
    'use strict';

    var extend = function extend(out) {
      out = out || {};
      var i = void 0;
      for (i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) continue;
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (_typeof(obj[key]) === 'object') {
              out[key] = extend(out[key], obj[key]);
            } else {
              out[key] = obj[key];
            }
          }
        }
      }
      return out;
    };

    /*
     * Default settings
     */
    var settings = extend({
      autoPlay: false,
      speed: 5000,
      arrows: true,
      captions: false,
      indicators: false,
      numbers: false
    }, options);

    if (settings.numbers) setNumbers();
    if (settings.captions) setCaptions();
    if (settings.arrows) setArrows();
    if (settings.indicators) setIndicators();
    if (settings.autoPlay) setInterval(autoPlay, settings.speed);
    init();
  };
})(typeof global !== 'undefined' ? global : window);

}());
//# sourceMappingURL=plain-carousel.js.map
