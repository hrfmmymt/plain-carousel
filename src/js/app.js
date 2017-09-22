import init from './init'
import setNumbers from './number'
import setCaptions from './caption'
import setArrows from './arrow'
import setIndicators from './indicator'
import autoPlay from './autoplay'

(function (global) {
  global.plainCarousel = function (options) {
    'use strict'

    const extend = function (out) {
      out = out || {}
      let i
      for (i = 1; i < arguments.length; i++) {
        let obj = arguments[i]
        if (!obj) continue
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
              out[key] = extend(out[key], obj[key])
            } else {
              out[key] = obj[key]
            }
          }
        }
      }
      return out
    }

    /*
     * Default settings
     */
    const settings = extend({
      autoPlay: false,
      speed: 5000,
      arrows: true,
      captions: false,
      indicators: false,
      numbers: false
    }, options)

    if (settings.numbers) setNumbers()
    if (settings.captions) setCaptions()
    if (settings.arrows) setArrows()
    if (settings.indicators) setIndicators()
    if (settings.autoPlay) setInterval(autoPlay, settings.speed)
    init()
  }
})(typeof global !== 'undefined' ? global : window)
