// library
import 'bootstrap/dist/js/bootstrap.bundle.min'
// resource
import { contentImage } from './asset/contentImage'
import { contentIntroLeft } from './asset/contentIntroLeft'
import { contentIntroMap } from './asset/contentIntroMap'
import { filterData } from './asset/getData'
import getToken from './asset/getToken'
import { contentNearCard, nearBtnEvent } from './asset/contentNear'
// component
import header from './components/header'
import breadcrumbFn from './components/breadcrumb'
import scrollTopFn from './components/scrollTop'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import scrollTop from '../html/components/scrollTop.html'
import card from '../html/components/card.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  $('#scrollTop').html(scrollTop)
  $('.nearInfoCard').html(card)

  header.init()
  breadcrumbFn.init()
  scrollTopFn.init()
  const token = getToken.getCookieToken()
  const [selectData] = JSON.parse(sessionStorage.getItem('selectData'))
  const theme = JSON.parse(sessionStorage.getItem('theme'))
  const themeList = { ScenicSpot: '景點', Activity: '活動', Restaurant: '美食' }

  $('.content-title').text(selectData[theme + 'Name'])

  selectData.Class1 || selectData.Class ? $('.content-class1').text('#' + (selectData.Class1 || selectData.Class)) : $('.content-class1').hide()
  selectData.Class2 ? $('.content-class2').text('#' + selectData.Class2) : $('.content-class2').hide()
  selectData.Class3 ? $('.content-class3').text('#' + selectData.Class3) : $('.content-class3').hide()

  $('.content-intro-title').text(themeList[theme] + '介紹:')
  $('.content-article').text(selectData.Description || selectData.DescriptionDetail)

  const geoHash = selectData.Position.GeoHash.slice(0, 4)

  $(window).on('scroll', function () {
    const innerHight = $(window).innerHeight()
    const outerWidth = $(window).outerWidth()
    const scrollPos = $(window).scrollTop()

    if (scrollPos > innerHight / 2 && outerWidth> 960) {
      $('.card-content').addClass('animate__animated animate__bounceInLeft')
    }
  })
  nearBtnEvent(filterData, themeList, token, geoHash)
  contentNearCard(filterData, token, theme, geoHash, themeList)
  contentImage(selectData)
  contentIntroLeft(selectData, theme)
  contentIntroMap(selectData, theme)
  $('#loading').addClass('d-none')
  }
)
