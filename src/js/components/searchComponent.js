
import $ from 'jquery'

$(() => {
  $('.search-input').trigger('focus')
  $('.search-btn').on('click', function () {
    window.location.href = '../../html/pages/searchPage.html'
  })
})
