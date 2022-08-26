
// library
import $ from 'jquery'

// resource
import getToken from './asset/getToken'
import { filterCardData } from './asset/createCard'

// component
import searchFn from './components/searchComponent'
import breadcrumbFn from './components/breadcrumb'
import { renderPages } from './components/pagination'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import searchComponent from '../html/components/searchComponent.html'
import card from '../html/components/card.html'
import pagination from '../html/components/pagination.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  $('#search').html(searchComponent)
  $('#pagination').html(pagination)
  $('.searchResult').html(card)
  const data = JSON.parse(sessionStorage.getItem('filterData'))
  //過濾沒有圖片的資料
  const filterData = filterCardData(data)
  const num = filterData.length
  const searchNum = $('<p/>',{class:'me-auto ms-3 align-self-end'})
  searchNum.append(`總共<span class="text-tertiary mx-1">${num}</span>筆`)
  $('.searchResult').find('.sectionTitle').text('收尋結果').after(searchNum)
  $('.searchResult').find('.moreLink').remove()
  
  renderPages(filterData)
  breadcrumbFn.init()
  searchFn.init(getToken.getCookieToken())
})
