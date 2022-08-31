
import $ from 'jquery'
import { getCity, filterData,filterCityData } from '../asset/getData'
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
      }).catch((err)=>{
        console.log(err);
      })
    } else {
      changeSelection()
    }
  },

  search () {
    $('.search-btn').on('click', function (e) {
      e.stopPropagation()
      
      const val = $('.search-input').val()
      const token = getToken.getCookieToken()
      let searchOption = ''
      if(location() === 'index'){
        const themeVal = $('select').val().trim()
        sessionStorage.setItem('breadcrumb', JSON.stringify(themeVal))
        themeVal==='ScenicSpot'?searchOption = 'DescriptionDetail':searchOption = 'Description'
        const searchData = filterData(token, themeVal, '', searchOption, val)
        searchData.then((res) => {
          sessionStorage.setItem('filterData', JSON.stringify(res.data))
          window.location.assign('./searchPage.html')
        })
      }else{
        const section = JSON.parse(sessionStorage.getItem('breadcrumb'))
        section==='ScenicSpot'?searchOption = 'DescriptionDetail':searchOption = 'Description'
        const cityVal = $('select').val().trim()
        const searchData = filterCityData(token, section,cityVal,searchOption,val)
        searchData.then((res)=>{
          sessionStorage.setItem('filterData', JSON.stringify(res.data))

        })
      }
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
