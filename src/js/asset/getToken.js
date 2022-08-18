
import Qs from 'qs'
import axios from 'axios'

export default {
  config: {
    tdxClientId: 'YjkxMTE0MjYtMjQyZTkwNGEtNThiZS00NjI4',
    tdxClientSecret: 'ZWFiYzJmNTItMzIyYi00MjUxLTliNDUtMWZmY2FkN2UxNjU3'
  },
  getCookieToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  },
  getAuthorizationHeader () {
    const parameter = {
      grant_type: 'client_credentials',
      client_id: Buffer.from(this.config.tdxClientId, 'base64'),
      client_secret: Buffer.from(this.config.tdxClientSecret, 'base64')
    }
    const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'

    const options = {
      method: 'POST',
      url: authUrl,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: Qs.stringify(parameter)
    }
    return axios(options)
  }

}
