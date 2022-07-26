import config from './config.js'
import Qs from 'qs'
import axios from 'axios'
import $ from 'jquery'

export const sceneData = []

function getToken () {
  return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
}
function getAuthorizationHeader (callback) {
  const parameter = {
    grant_type: 'client_credentials',
    client_id: atob(config.tdxClientId),
    client_secret: atob(config.tdxClientSecret)
  }
  const auth_url = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'

  const options = {
    method: 'POST',
    url: auth_url,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: Qs.stringify(parameter)
  }
  axios(options)
    .then(res => {
      const accessToken = res.data
      const { access_token, expires_in } = accessToken
      document.cookie = `tdxToken=${access_token};max-age=${expires_in}`// 將token存入cookie
      callback()
    })
    .catch(err => console.log(err))
}

function getCityList () {
  const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotID,\'C1_315081100H_000446\')&health=false&%24format=JSON'

  const token = getToken() // 取token

  axios.get(apiUrl, {
    headers: {
      authorization: 'Bearer ' + token
    }
  }).then(
    res => {
      res.data.forEach((item) => {
        sceneData.push(item)
      })
    })
    .catch(err => console.log(err))
}

function init () {
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader(getCityList)
  } else {
    getCityList()
  }
}
init()
