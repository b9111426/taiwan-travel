
import $ from 'jquery'
import { getCity, filterData, filterCityData } from '../asset/getData'
import { changeSelection } from '../asset/changeSelection'
import getToken from '../asset/getToken'
import { location } from '../asset/location'

export default {
  focus () {
    $('.search-input').trigger('focus')
  },
  changeSelect () {
    if (location() !== 'index') {
      getCity(getToken.getCookieToken()).then((res) => {
        changeSelection(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } else {
      changeSelection()
    }
  },

  search () {
    const themeList = { ScenicSpot: '探索景點', Activity: '節慶活動', Restaurant: '品嚐美食' }
    $('.search-btn').on('click', function (e) {
      e.stopPropagation()
      const val = $('.search-input').val().trim()
      const token = getToken.getCookieToken()
      let searchOption = ''
      if (location() === 'index') {
        const themeVal = $('select').val()
        const themeName = themeList[themeVal]
        sessionStorage.setItem('theme', JSON.stringify(themeVal))
        sessionStorage.setItem('breadcrumb', JSON.stringify(themeName))
        themeVal === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description'
        const searchData = filterData(token, themeVal, '', searchOption, val)
        searchData.then((res) => {
          sessionStorage.setItem('filterData', JSON.stringify(res.data))
          window.location.assign('./searchPage.html')
        })
      } else {
        const theme = JSON.parse(sessionStorage.getItem('theme'))
        theme === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description'
        const cityVal = $('select').val().trim()
        const searchData = filterCityData(token, theme, cityVal, searchOption, val)
        searchData.then((res) => {
          sessionStorage.setItem('filterData', JSON.stringify(res.data))
          window.location.assign('./searchPage.html')
        })
      }
    })
  },
  init () {
    if (location() === '' || location() === 'index') {
      this.focus()
    }
    this.changeSelect()
    this.search()
  }
}
