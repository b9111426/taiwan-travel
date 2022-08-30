
import $ from 'jquery'
import { getCity, filterData } from '../asset/getData'
import { changeSelection } from '../asset/changeSelection'
import getToken from '../asset/getToken'
import { location } from '../asset/location'


export default {
  cityData: [],
  focus () {
    $('.search-input').trigger('focus')
  },
  changeSelect () {
    if(this.cityData){
      console.log('yes');
      getCity(getToken.getCookieToken()).then((res) => {
        res.data.forEach((item)=>{
          this.cityData.push(item)
        })
      }).catch((err)=>{
        console.log(err);
      })
    }
    if (location() !== 'index') {
      console.log(this.cityData);
      changeSelection(this.cityData)
    } else {
      changeSelection()
    }
  },

  search () {
    $('.search-btn').on('click', function (e) {
      e.stopPropagation()
      const themeVal = $('select').val().trim()
      const val = $('.search-input').val()
      const token = getToken.getCookieToken()
      sessionStorage.setItem('breadcrumb', JSON.stringify(themeVal))
      const searchData = filterData(token, themeVal, '', 'Description', val)
      searchData.then((res) => {
        sessionStorage.setItem('filterData', JSON.stringify(res.data))
        window.location.assign('./searchPage.html')
      })
    })
  },
  init () {
    
    if(location() === ''||location() === 'index'){
      this.focus()
    }
    this.changeSelect()
    this.search()
  }
}
