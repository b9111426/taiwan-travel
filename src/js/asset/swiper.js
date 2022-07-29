/* eslint-disable no-new */

import Swiper from 'swiper/swiper-bundle.min'
export function createSwiper (num) {
  new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1'
    },
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      }
    },
    effect:'fade',
  })
    new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2'
    },
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true,
    },
  })
}
