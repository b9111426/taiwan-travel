
// library
import 'bootstrap/dist/js/bootstrap.bundle.min'
// resource
import { setBreadArray } from './asset/setBreadArray'
// component
import header from './components/header'
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
  $('#popularTopics').html(popularTopics)
  header.init()
  setBreadArray()
  popularTopicsFn.init()
  breadcrumbFn.init()
  searchFn.init()
    $('#loading').addClass('d-none')
})
