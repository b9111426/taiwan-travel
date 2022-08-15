import $ from 'jquery'
import { getAuthorizationHeader } from '../asset/getToken'
import { getData } from '../asset/getData'

$(() => {
  function getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  }
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader()
  }
  getData(token,)
})
