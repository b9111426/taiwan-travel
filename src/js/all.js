
// library
import $, { fn } from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import { getAuthorizationHeader } from './asset/getToken'
import { createSwiper } from './asset/swiper'
import { getData, filterData } from './asset/getData'
import { createSwiperCard, createCard, createTopicClass } from './asset/createCard'

// component
import searchFn from './components/searchComponent'
import breadcrumbFn from './components/breadcrumb'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import searchComponent from '../html/components/searchComponent.html'
import popularTopics from '../html/components/popularTopics.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  $('#search').html(searchComponent)
  $('#popularTopics').html(popularTopics)

  function getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  }
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader()
  }

  searchFn.init()
  const index = { url: '' }

  Object.defineProperty(index, 'url', {
    get: function () {
    },
    set: function () {
      breadcrumbFn.init()
      const str = createTopicClass()
      $('.topics-container').html(str)
    }
  })

  console.log(index.url)
  if (window.location.href !== 'http://localhost:1234/') { index.url = window.location.href }

  getData(token, 'Activity', 40).then((res) => {
    createSwiperCard(res.data) // 創建swiper card dom元素
  }).then(() => {
    createSwiper()// 創建swiper實體
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
