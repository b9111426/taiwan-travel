import '../stylesheets/all.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import axios from 'axios'
import $ from 'jquery'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
})
