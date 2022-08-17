
import $ from 'jquery'
import { getCity } from '../asset/getData'
import { changeSelection } from '../asset/changeSelection'

export default {
  cityData: [],
  focus () {
    $('.search-input').trigger('focus')
  },
  changeSelect (token) {
    if (token) {
      console.log('yes')

      getCity(token).then((res) => {
        res.data.forEach((item) => {
          this.cityData.push(item)
        })
        changeSelection(res.data)
      })
    } else {
      changeSelection()
    }
  },

  search () {
    $('.search-btn').on('click', function (e) {
      e.stopPropagation()
      const val = $('select').val()
      window.location.assign(`http://localhost:1234/${val}`)
    })
  },
  init (token) {
    this.focus()
    this.changeSelect(token)
    this.search()
  }
}
