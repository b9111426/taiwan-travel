
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import { getAuthorizationHeader } from './asset/getToken'
import { createSwiper } from './asset/swiper'
import { getData, filterData } from './asset/getData'
import { createSwiperCard, createCard } from './asset/createCard'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import search from '../html/components/search.html'
import popularTopics from '../html/components/popularTopics.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  $('#search').html(search)
  $('#popularTopics').html(popularTopics)

  function getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  }
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader()
  }
  getData(token, 'Activity', 40).then((res) => {
    createSwiperCard(res.data) // 創建swiper card dom元素
  }).then(() => {
    createSwiper()// 創建swiper實體
    $('.banner-search>input').trigger('focus')
  })
  const data1 = filterData(token, 'ScenicSpot', 30, 'DescriptionDetail', '熱門打卡')
  const data2 = filterData(token, 'Restaurant', 30, 'Description', '老店')
  Promise.all([data1, data2]).then(res => {
    const str1 = createCard(res[0].data)
    const str2 = createCard(res[1].data)
    $('.hotPoint-content').html(str1)
    $('.tastyFood-content').html(str2)
  })
})
