import config from './config.js'
import Qs from 'qs'
import axios from 'axios'

export const sceneData = []

function getToken () {
  return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
}
function getAuthorizationHeader (callback) {
  const parameter = {
    grant_type: 'client_credentials',
    client_id: Buffer.from(config.tdxClientId, 'base64'),
    client_secret: Buffer.from(config.tdxClientSecret, 'base64')
  }
  const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'

  const options = {
    method: 'POST',
    url: authUrl,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: Qs.stringify(parameter)
  }
  axios(options)
    .then(res => {
      const accessToken = res.data
      const { token, expiresIn } = accessToken
      document.cookie = `tdxToken=${token};max-age=${expiresIn}`// 將token存入cookie
      callback()
    })
    .catch(err => console.log(err))
}

function getCityList () {
  const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=40&%24format=JSON'

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
