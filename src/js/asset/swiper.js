/* eslint-disable no-new */

import Swiper from 'swiper/swiper-bundle.min'
export function createSwiper (option) {
  return new Swiper('.swiper' + option.num, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-' + option.num,
      prevEl: '.swiper-button-prev-' + option.num
    },

    pagination: {
      el: '.swiper-pagination-' + option.num,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      }
    },
    effect: option.effect,
    // slide的樣式
    autoplay: { // 是否要自動撥放
      delay: option.delayTime
    }
  })
}
