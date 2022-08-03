
import config from './config.js'
import Qs from 'qs'
import axios from 'axios'
export function getAuthorizationHeader () {
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
      const { access_token, expires_in } = accessToken
      document.cookie = `tdxToken=${access_token};max-age=${expires_in}`// 將token存入cookie
    })
    .catch(err => console.log(err))
}
