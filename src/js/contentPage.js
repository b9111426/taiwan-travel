// library
import $ from 'jquery'

//resource
import { contentImage } from './asset/contentImage'
import { contentIntroLeft } from './asset/contentIntroLeft'
import { contentIntroMap } from './asset/contentIntroMap'
import { filterData } from './asset/getData'
import { createCard, filterCardData } from './asset/createCard'
import getToken from './asset/getToken'
import { cardEvent } from './asset/cardEvent'
// component
import header from './components/header'
import breadcrumbFn from './components/breadcrumb'
import scrollTopFn from './components/scrollTop'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import scrollTop  from '../html/components/scrollTop.html'
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
  const themeList = { ScenicSpot:'景點', Activity:'活動', Restaurant:'美食'}

  $('.content-title').text(selectData[theme+'Name'])

  selectData.Class1||selectData.Class?$('.content-class1').text('#' + (selectData.Class1||selectData.Class)):$('.content-class1').hide()
  selectData.Class2?$('.content-class2').text('#' + selectData.Class2):$('.content-class2').hide()
  selectData.Class3?$('.content-class3').text('#' + selectData.Class3):$('.content-class3').hide()

  
  $('.content-intro-title').text(themeList[theme]+'介紹:')
  $('.content-article').text(selectData.Description||selectData.DescriptionDetail)


  $('.nearInfoCard').find('.sectionTitle').text(`附近還有這些${themeList[theme]}`)
  $('.nearInfoCard').find('.moreLink').text(`查看更多${themeList[theme]}`).attr('href', 'javascript:;')
  const geoHash = selectData.Position.GeoHash.slice(0,4)
  const data = filterData(token, theme, 8, 'Position/GeoHash', geoHash)
  data.then((res)=>{
    const filterCard =filterCardData(res.data)
    const str = createCard(filterCard, theme)
    $('.nearInfoCard').find('.card-content').html(str)
    cardEvent('near')
  })

  $('.nearScene,.nearActivity,.nearFoot').on('click',function(){
    const selectTheme = $(this).attr('data-theme')
    const data = filterData(token, selectTheme, 8, 'Position/GeoHash', geoHash)
    data.then((res)=>{
      const filterCard =filterCardData(res.data)
      const str = createCard(filterCard, selectTheme)
      $('.nearInfoCard').find('.card-content').html(str)
      cardEvent('near')
    })
  })

    contentImage(selectData)
    contentIntroLeft(selectData,theme)
    contentIntroMap(selectData,theme)
  }
)
