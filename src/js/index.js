// library
import $ from 'jquery'
import Swiper from '../../node_modules/swiper/swiper-bundle.min'
import '../../node_modules/swiper/swiper-bundle.min.css'

import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import data from './getData'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)

  const swiper = new Swiper('.swiper', {
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
    effect: 'fade'
    // slide的樣式
    // autoplay: { // 是否要自動撥放
    //  delay: 3000
    // }
  })
})

console.log(data)
