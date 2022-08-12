
import $ from 'jquery'
import { getAuthorizationHeader } from '../asset/getToken'
import { getCity } from '../asset/getData'

$(() => {
  function getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  }
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader()
  }
  // getCity(token).then((res) => {
  //  console.log(res.data)
  //  res.data.forEach((item) => {
  //    const option = document.createElement('option')
  //    option.setAttribute('value', item.CityName)
  //    option.innerText = item.CityName
  //    $('.search-selection').append(option)
  //  })
  // })

  $('.search-input').trigger('focus')
  $('.search-btn').on('click', function () {
    window.location.href = '../../html/pages/searchPage.html'
  })
})
