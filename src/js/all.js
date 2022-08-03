
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import { getAuthorizationHeader } from './asset/getToken'
import { createSwiper } from './asset/swiper'
import { renderBanner } from './asset/banner'
import getData from './asset/getData'
import { createSwiperCard } from './asset/createSwiperCard'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)

  function getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  }
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader()
  }

  getData.getCityList(token).then((res) => {
    renderBanner()// 渲染出banner標題和背景圖
    createSwiperCard(res.data) // 創建swiper card dom元素
  }).then(() => {
    createSwiper()// 創建swiper實體
  })
})
