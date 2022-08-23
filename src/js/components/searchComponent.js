
import $ from 'jquery'
import { getCity, filterData } from '../asset/getData'
import { changeSelection } from '../asset/changeSelection'
import getToken from '../asset/getToken'

export default {
  cityData: [],
  focus () {
    $('.search-input').trigger('focus')
  },
  changeSelect (token) {
    if (token) {
      getCity(token).then((res) => {
        changeSelection(res.data)
      })
    } else {
      changeSelection()
    }
  },

  search () {
    $('.search-btn').on('click', function (e) {
      e.stopPropagation()
      const themeVal = $('select').val()
      const val = $('.search-input').val()
      const token = getToken.getCookieToken()
      sessionStorage.setItem('breadcrumb', themeVal)
      const searchData = filterData(token, themeVal, '', 'Description', val)
      searchData.then((res) => {
        console.log(res.data);
        sessionStorage.setItem('filterData', JSON.stringify(res.data))
        window.location.assign('./searchPage.html')
      })
    })
  },
  init (token) {
    this.focus()
    this.changeSelect(token)
    this.search()
  }
}
