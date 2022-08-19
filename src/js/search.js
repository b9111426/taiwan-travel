
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

// resource
import getToken from './asset/getToken'

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

  breadcrumbFn.init()
  searchFn.init(getToken.getCookieToken())
})
