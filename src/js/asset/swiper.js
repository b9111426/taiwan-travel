/* eslint-disable no-new */

import Swiper from 'swiper/swiper-bundle.min'
export function createSwiper () {
  const swiperContainer = document.querySelectorAll('.swiper-container')
  const pageSetting = function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>'
  }
  swiperContainer.forEach((item, idx) => {
    item.classList.add('swiper' + (idx + 1))
    const wrapper = item.querySelector('.swiper-wrapper')
    const prevBtn = item.querySelector('.swiper-button-prev')
    const nextBtn = item.querySelector('.swiper-button-next')
    const pagination = item.querySelector('.swiper-pagination')

    if (wrapper) {
      wrapper.classList.add('swiper-wrapper-' + (idx + 1))
    }
    if (prevBtn) {
      prevBtn.classList.add('swiper-button-prev-' + (idx + 1))
    }
    if (nextBtn) {
      nextBtn.classList.add('swiper-button-next-' + (idx + 1))
    }
    if (pagination) {
      pagination.classList.add('swiper-pagination-' + (idx + 1))
    }

    new Swiper('.swiper' + (idx + 1), {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-' + (idx + 1),
        prevEl: '.swiper-button-prev-' + (idx + 1)
      },
      pagination: {
        el: '.swiper-pagination-' + (idx + 1),
        clickable: true,
        renderBullet: idx === 0 ? pageSetting : null
      },
      effect: idx === 0 ? 'fade' : 'slide',
      autoplay: idx === 0 ? { delay: 1000 } : undefined
    })
  })
}
