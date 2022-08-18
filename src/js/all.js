
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import getToken from './asset/getToken'
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

  // 判斷是否有token
  if (getToken.getCookieToken() === '') {
    const tokenPromise = getToken.getAuthorizationHeader()
    tokenPromise.then(res => {
      const { access_token, expires_in } = res.data
      document.cookie = `tdxToken=${access_token};max-age=${expires_in}`// 將token存入cookie
      renderCard(access_token)
    })
      .catch(err => {
        console.log(err)
      })
  } else {
    renderCard(getToken.getCookieToken())
  }

  // 判斷分頁，渲染分頁
  const url = location()
  if (window.location.href === 'http://localhost:1234/') { searchFn.init() } else if (url === 'scenePage.html' || url === 'activityPage.html' || url === 'foodPage.html') {
    breadcrumbFn.init()
    popularTopicsFn.init()
    searchFn.init(getToken.getCookieToken())
  }

  // 渲染首頁畫面
  function renderCard (token) {
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
  }
})
