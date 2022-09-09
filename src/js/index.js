
// library
import 'bootstrap/dist/js/bootstrap.bundle.min'

// resource
import getToken from './asset/getToken'
import { createSwiper } from './asset/swiper'
import { getData, filterData } from './asset/getData'
import { createSwiperCard, createCard, filterCardData } from './asset/createCard'
import { cardEvent } from './asset/cardEvent'
// component
import searchFn from './components/searchComponent'
import header from './components/header'
import scrollTopFn from './components/scrollTop'
// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import scrollTop from '../html/components/scrollTop.html'
import searchComponent from '../html/components/searchComponent.html'
import card from '../html/components/card.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#search').html(searchComponent)
  $('#scrollTop').html(scrollTop)
  $('.tastyFood, .hotPoint').html(card)
  sessionStorage.setItem('breadcrumb',JSON.stringify([]))
  sessionStorage.removeItem('theme')
  scrollTopFn.init()
  searchFn.init()
  header.init()
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
      const filterCard1 = filterCardData(res[0].data)
      const filterCard2 = filterCardData(res[1].data)
      const filterCard3 = filterCardData(res[2].data)

      createSwiperCard(filterCard1, 'Activity') // 創建swiper card dom元素
      const str1 = createCard(filterCard2, 'ScenicSpot')
      const str2 = createCard(filterCard3, 'Restaurant')

      $('.hotPoint').find('.sectionTitle').text('熱門打卡景點')
      $('.hotPoint').find('.moreLink').html('查看更多景點<i class="bi bi-chevron-right"></i>')
      .attr('href', '../scenePage.html')
      $('.hotPoint').find('.card-content').html(str1)

      $('.tastyFood').find('.sectionTitle').text('一再回訪美食')
      $('.tastyFood').find('.moreLink').html('查看更多美食<i class="bi bi-chevron-right"></i>')
      .attr('href', '../foodPage.html')
      $('.tastyFood').find('.card-content').html(str2)
      // 將卡片賦予事件
      cardEvent()
    }).then(() => {
      createSwiper()// 創建swiper實體
    })
  }
})
