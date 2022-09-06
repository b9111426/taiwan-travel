
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
    let searchOption = ''
    const token = getToken.getCookieToken()
    $('.search-btn').on('click', function (e) {
      const val = $('.search-input').val().trim()
      e.stopPropagation()
      if (location() === 'index') {
        const themeVal = $('select').val()
        validate (themeVal,val);
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
    $('.search-input').on('keydown',function(e){
      const themeVal = $('select').val()
      const val = $(this).val().trim()
      $('.search-alert').fadeOut(200)
      if (e.key === 'Enter' || e.keyCode === 13){
        e.preventDefault()
        validate (themeVal,val)
      }
    })

    function validate (themeVal,val) {
      if(themeVal==='hide'|| val === ''){
        themeVal==='hide'? $('.select-alert').fadeIn(200):$('.select-alert').fadeOut(200)
        val === ''?$('.search-alert').fadeIn(200):$('.search-alert').fadeOut(200)
        setTimeout(() => {
          $('.search-alert').fadeOut(200)
          $('.select-alert').fadeOut(200)
        }, 2000);
      }else{
        sessionStorage.setItem('theme', JSON.stringify(themeVal))
        themeVal === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description'
        const searchData = filterData(token, themeVal, '', searchOption, val)
        searchData.then((res) => {
          sessionStorage.setItem('filterData', JSON.stringify(res.data))
          window.location.assign('./searchPage.html')
        })
      }
    }
  },
  init () {
    if (location() === '' || location() === 'index') {
      this.focus()
    }
    this.changeSelect()
    this.search()
  }
}
