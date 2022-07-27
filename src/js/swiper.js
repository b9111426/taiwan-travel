
import Swiper from '../../node_modules/swiper/swiper-bundle.min'
export function createSwiper () {
  return new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      }
    },
    effect: 'fade',
    // slide的樣式
    autoplay: { // 是否要自動撥放
      delay: 4000
    }
  })
}
