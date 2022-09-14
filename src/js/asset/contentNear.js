
import { createCard, filterCardData } from './createCard'
import { cardEvent } from './cardEvent'

export function contentNearCard (filterData, token, theme, geoHash, themeList) {
  $('.nearInfoCard').find('.sectionTitle').text(`附近還有這些${themeList[theme]}`)
  $('.nearInfoCard').find('.moreLink').html(`查看更多附近${themeList[theme]}<i class="bi bi-chevron-right"></i>`).attr('href', 'javascript:;').attr('data-id', theme)

  $('.moreLink').on('click', function () {
    const selectTheme = $(this).attr('data-id')
    const data = filterData(token, selectTheme, '', 'Position/GeoHash', geoHash)
    data.then((res) => {
      sessionStorage.setItem('theme', JSON.stringify(selectTheme))
      sessionStorage.setItem('filterData', JSON.stringify(res.data))
      window.location.assign('./searchPage.html')
    })
  })

  const data = filterData(token, theme, 8, 'Position/GeoHash', geoHash)
  data.then((res) => {
    const filterCard = filterCardData(res.data)
    const str = createCard(filterCard, theme)
    $('.nearInfoCard').find('.card-content').html(str)
    cardEvent('near')
  })
}

export function nearBtnEvent (filterData, themeList, token, geoHash) {
  $('.nearScene,.nearActivity,.nearFoot').on('click', function () {
    $('.card-content').removeClass('animate__animated animate__bounceInLeft')
    const selectTheme = $(this).attr('data-theme')
    $('.nearInfoCard').find('.sectionTitle').text(`附近還有這些${themeList[selectTheme]}`)
    $('.nearInfoCard').find('.moreLink').html(`查看更多附近${themeList[selectTheme]}<i class="bi bi-chevron-right"></i>`)
      .attr('href', 'javascript:;').attr('data-id', selectTheme)
    const data = filterData(token, selectTheme, 25, 'Position/GeoHash', geoHash)
    data.then((res) => {
      const filterCard = filterCardData(res.data)
      const str = createCard(filterCard, selectTheme)
      $('.nearInfoCard').find('.card-content').html(str)
      
      const outerWidth = $(window).outerWidth()

      if ( outerWidth> 960) {
        $('.card-content').addClass('animate__animated animate__bounceInLeft')
      }else{
        $('.card').addClass('animate__animated animate__fadeIn')
      }
      cardEvent('near')
    })
  })
}
