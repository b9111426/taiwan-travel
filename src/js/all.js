
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
import { location } from './asset/location'

// component
import searchFn from './components/searchComponent'
import breadcrumbFn from './components/breadcrumb'
import popularTopicsFn from './components/popularTopics'
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

  const token = document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  if (token === '') {
    console.log('cookie沒有token')
    getAuthorizationHeader()
  }

  const url = location()
  if (window.location.href === 'http://localhost:1234/') { searchFn.init() } else if (url === 'scenePage.html' || url === 'activityPage.html' || url === 'foodPage.html') {
    breadcrumbFn.init()
    popularTopicsFn.init()
    searchFn.init(token)
  }

  const data1 = getData(token, 'Activity', 40)
  const data2 = filterData(token, 'ScenicSpot', 30, 'DescriptionDetail', '熱門打卡')
  const data3 = filterData(token, 'Restaurant', 30, 'Description', '老店')
  Promise.all([data1, data2, data3]).then(res => {
    createSwiperCard(res[0].data) // 創建swiper card dom元素
    const str1 = createCard(res[1].data)
    const str2 = createCard(res[2].data)
    $('.hotPoint-content').html(str1)
    $('.tastyFood-content').html(str2)
  }).then(() => {
    createSwiper()// 創建swiper實體
  })
})
