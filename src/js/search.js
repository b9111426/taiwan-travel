
// library
import $ from 'jquery'

// resource
import getToken from './asset/getToken'
import { createCard } from './asset/createCard'
// component
import searchFn from './components/searchComponent'
import breadcrumbFn from './components/breadcrumb'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import searchComponent from '../html/components/searchComponent.html'
import card from '../html/components/card.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  $('#search').html(searchComponent)
  $('.searchResult').html(card)
  $('.searchResult').find('.sectionTitle').text('收尋結果')
  $('.searchResult').find('.moreLink').remove()
  const data = JSON.parse(sessionStorage.getItem('filterData'))
  const str = createCard(data)
  $('.searchResult').find('.card-content').html(str)
  breadcrumbFn.init()
  searchFn.init(getToken.getCookieToken())
})
