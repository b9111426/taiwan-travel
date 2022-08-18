
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import getToken from './asset/getToken'
import { createSwiper } from './asset/swiper'
import { getData, filterData } from './asset/getData'
import { createSwiperCard, createCard } from './asset/createCard'

// component
import searchFn from './components/searchComponent'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import searchComponent from '../html/components/searchComponent.html'
import card from '../html/components/card.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#search').html(searchComponent)
  $('.tastyFood, .hotPoint').html(card)
  searchFn.init()
  
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

  // 渲染首頁畫面
  function renderCard (token) {
    const data1 = getData(token, 'Activity', 40)
    const data2 = filterData(token, 'ScenicSpot', 30, 'DescriptionDetail', '熱門打卡')
    const data3 = filterData(token, 'Restaurant', 30, 'Description', '老店')
    Promise.all([data1, data2, data3]).then(res => {
      createSwiperCard(res[0].data) // 創建swiper card dom元素
      const str1 = createCard(res[1].data)
      const str2 = createCard(res[2].data)

      $('.hotPoint').find('.sectionTitle').text('熱門打卡景點')
      $('.hotPoint').find('.moreLink').text('查看更多景點').attr('href', '../scenePage.html')
      $('.hotPoint').find('.card-content').html(str1)

      $('.tastyFood').find('.sectionTitle').text('一再回訪美食')
      $('.tastyFood').find('.moreLink').text('查看更多美食').attr('href', '../foodPage.html')
      $('.tastyFood').find('.card-content').html(str2)
    }).then(() => {
      createSwiper()// 創建swiper實體
    })
  }
})
