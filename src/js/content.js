
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
  breadcrumbFn.init()
  const [selectData] = JSON.parse(sessionStorage.getItem('selectData'))
  const theme = JSON.parse(sessionStorage.getItem('breadcrumb'))
  console.log(selectData);
  $('.content-image').find('img').attr('src',selectData.Picture.PictureUrl1)
  $('.content-title').text(selectData[theme+'Name'])
})
