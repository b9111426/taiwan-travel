import axios from 'axios'

axios.defaults.method = 'get'

export function getData (token, section, top = 30) {
  axios.defaults.headers.common.authorization = 'Bearer ' + token

  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${section}?$top=${top}&$format=JSON`

  const instance = axios.create()
  return instance({
    headers: { authorization: 'Bearer ' + token },
    url: apiUrl
  })
}

export function filterData (token, section, top, option, content) {
  axios.defaults.headers.common.authorization = 'Bearer ' + token
  axios.defaults.method = 'get'
  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${section}?$filter=contains(${option},'${content}')&$top=${top}&$format=JSON`
  const allUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${section}?$filter=contains(${option},'${content}')&$format=JSON`

  const instance = axios.create()
  return instance({
    headers: { authorization: 'Bearer ' + token },
    url: top ? apiUrl : allUrl
  })
}

export function filterCityData (token, section, city, option, content) {
  axios.defaults.headers.common.authorization = 'Bearer ' + token
  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${section}/${city}?$filter=contains(${option},'${content}')&$format=JSON`
  const instance = axios.create()
  return instance({
    headers: { authorization: 'Bearer ' + token },
    url: apiUrl
  })
}

export function getCity (token) {
  const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON'

  const instance = axios.create()
  return instance({
    headers: { authorization: 'Bearer ' + token },
    url: apiUrl
  })
}
