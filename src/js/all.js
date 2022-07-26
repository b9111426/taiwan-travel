
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Swiper from '../../node_modules/swiper/swiper-bundle.min'

// resource
import '../stylesheets/all.scss'
import { bannerPic } from './asset/bannerPicture'
import { swiper } from './swiper'
// import { sceneData } from './getData'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  let str = ''
  $.each(bannerPic, (idx, item) => {
    str += `<div class="swiper-slide">
    <img src="${item.url}" alt="">
  </div>`
    $('.swiper-wrapper').html(str)
  })

  swiper()
})
