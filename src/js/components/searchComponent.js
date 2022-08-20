
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
      const location = $('select').attr('data-id')

      const val = $('.search-input').val()
      const token = getToken.getCookieToken()
      const searchData = filterData(token, themeVal, 30, themeVal + 'Name', val)
      searchData.then((res) => {
        console.log(res.data)
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
