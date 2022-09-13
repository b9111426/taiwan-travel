
// library
import 'bootstrap/dist/js/bootstrap.bundle.min'
// resource
import getToken from './asset/getToken'
import { setBreadArray } from './asset/setBreadArray'
import { filterCardData } from './asset/createCard'

// component
import header from './components/header'
import searchFn from './components/searchComponent'
import breadcrumbFn from './components/breadcrumb'
import { renderPages } from './components/pagination'
import scrollTopFn from './components/scrollTop'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import searchComponent from '../html/components/searchComponent.html'
import card from '../html/components/card.html'
import pagination from '../html/components/pagination.html'
import scrollTop from '../html/components/scrollTop.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  $('#search').html(searchComponent)
  $('#pagination').html(pagination)
  $('#scrollTop').html(scrollTop)
  $('.searchResult').html(card)
  header.init()
  scrollTopFn.init()
  setBreadArray()
  const data = JSON.parse(sessionStorage.getItem('filterData'))
  // 過濾沒有圖片的資料
  const filterData = filterCardData(data)
  const num = filterData.length
  const searchNum = $('<p/>', { class: 'me-auto ms-3 align-self-end' })
  searchNum.append(`總共<span class="text-tertiary mx-1">${num}</span>筆`)
  $('.searchResult').find('.sectionTitle').text('收尋結果').after(searchNum)
  $('.searchResult').find('.moreLink').remove()
  if (filterData.length === 0) {
    $('.searchResult').append('  <div class="search-none text-center py-5"><img class="search-log mb-3"src="./search.svg" alt=""><div class="text-center fs-3 text-gray" >目前查無資料<br>請重新搜尋</div></div>')
  }
  renderPages(filterData)
  breadcrumbFn.init()
  searchFn.init(getToken.getCookieToken())

  $('#loading').addClass('d-none')
  $('.card').addClass('animate__animated animate__fadeIn')
})
