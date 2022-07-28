
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import { bannerPic } from './asset/bannerPicture'
import { createSwiper } from './asset/swiper'
import { renderBanner } from './banner'
// import { sceneData } from './getData'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)

  renderBanner($, bannerPic)
  const swiperOption1 = {
    num: 1,
    effect: 'fade',
    delayTime: 3000
  }
  createSwiper(swiperOption1)
})
