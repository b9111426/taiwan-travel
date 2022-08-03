import axios from 'axios'

export default {
  data: {
    apiUrl: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=40&%24format=JSON'
  },

  getCityList (token) {
    const instance = axios.create({
      headers: {
        authorization: 'Bearer ' + token
      }
    })

    return instance({
      method: 'get',
      url: this.data.apiUrl
    })
  }
}
