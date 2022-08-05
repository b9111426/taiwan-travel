import axios from 'axios'

export function getData (token, section, top = 30) {
  axios.defaults.headers.common.authorization = 'Bearer ' + token

  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${section}?$top=${top}&$format=JSON`

  const instance = axios.create()
  return instance({
    method: 'get',
    url: apiUrl
  })
}

export function filterData (token, section, top = 30, option, content) {
  axios.defaults.headers.common.authorization = 'Bearer ' + token
  axios.defaults.method = 'get'
  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${section}?$filter=contains(${option},'${content}')&$top=${top}&$format=JSON`

  const instance = axios.create()
  return instance({
    method: 'get',
    url: apiUrl
  })
}
