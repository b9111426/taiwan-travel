/* eslint-disable no-new */
import Swiper from 'swiper/swiper-bundle.min'

export function createSwiper () {
  const pageSetting = function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>'
  } // 分頁按鈕添加號碼樣式

  $('.swiper-container').each(function (idx, item) {
    this.classList.add('swiper' + (idx + 1))
    const wrapper = $(this).find('.swiper-wrapper')
    const prevBtn = $(this).find('.swiper-button-prev')
    const nextBtn = $(this).find('.swiper-button-next')
    const pagination = $(this).find('.swiper-pagination')

    if (wrapper) {
      wrapper.addClass('swiper-wrapper-' + (idx + 1))
    }
    if (prevBtn) {
      prevBtn.addClass('swiper-button-prev-' + (idx + 1))
    }
    if (nextBtn) {
      nextBtn.addClass('swiper-button-next-' + (idx + 1))
    }
    if (pagination) {
      pagination.addClass('swiper-pagination-' + (idx + 1))
    }

    new Swiper('.swiper' + (idx + 1), {
      direction: 'horizontal',
      loop: true,
      slidesPerView: idx === 0 ? 1 : 4,
      spaceBetween: idx === 0 ? 0 : 20,
      slidesPerGroup: idx === 0 ? 1 : 4,

      breakpoints: {
        320: {
          slidesPerView: idx === 0 ? 1 : 1,
          spaceBetween: idx === 0 ? 0 : 3,
          slidesPerGroup: idx === 0 ? 1 : 1,
          autoplay: false

        },
        768: {
          slidesPerView: idx === 0 ? 1 : 3,
          spaceBetween: idx === 0 ? 0 : 5,
          slidesPerGroup: idx === 0 ? 1 : 3
        },
        1024: {
          slidesPerView: idx === 0 ? 1 : 4,
          spaceBetween: idx === 0 ? 0 : 10,
          slidesPerGroup: idx === 0 ? 1 : 4
        }
      },

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
      autoplay: idx === 0 ? { delay: 1000 } : { delay: 4000 }
    })
  })
}
