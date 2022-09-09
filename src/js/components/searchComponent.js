
import { getCity, filterData, filterCityData } from '../asset/getData'
import { changeSelection } from '../asset/changeSelection'
import getToken from '../asset/getToken'
import { location } from '../asset/location'

export default {
  calendarSetting:{
    closeText: "關閉",
    prevText: "上個月",
    nextText: "下個月",
    currentText: "今天",
    monthNames: [ "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月" ],
    monthNamesShort: [ "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月" ],
    dayNames: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
    dayNamesShort: [ "週日", "週一", "週二", "週三", "週四", "週五", "週六" ],
    dayNamesMin: [ "日", "一", "二", "三", "四", "五", "六" ],
    weekHeader: "週",
    dateFormat: "yy-mm-dd",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: "年"
  },
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
  switchDateSearch(){
    $('.main-search').removeClass('col-lg-8').addClass('col-lg-6')
    const calendar = /*html*/`
    <div class="col-lg-2 col-12">
      <div class="position-relative">
      <input type="text" id="datepicker" class="dateInput form-control fs-5 h-100" placeholder='起始日期' onfocus="this.blur()">
      <div class="date-alert alert"><i class="bi bi-exclamation-circle-fill  me-2 text-danger"></i>請選擇日期</div>
      </div>
    </div>`
    $('.main-search').before(calendar)
    $( "#datepicker" ).datepicker(
      this.calendarSetting
    )
  },
  search () {
    let searchOption = ''
    const token = getToken.getCookieToken()

    $('.search-btn').on('click', function (e) {
      e.stopPropagation()
      const val = $('.search-input').val().trim()
      const themeVal = $('select').val()
      const dateData = $('.dateInput').val() 
      validate (themeVal,val,dateData);
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

    function validate (themeVal,val,dateData) {
      const theme = JSON.parse(sessionStorage.getItem('theme') )
      if(themeVal==='hide'|| val === ''||dateData === ''){
        themeVal==='hide'? $('.select-alert').fadeIn(200):$('.select-alert').fadeOut(200)
        dateData === ''?$('.date-alert').fadeIn(200):$('.date-alert').fadeOut(200)
        //判斷是否是活動收尋,關鍵字非必須條件
        if(theme!=='Activity'){
          val === ''?$('.search-alert').fadeIn(200):$('.search-alert').fadeOut(200)
        }else{
          activitySearch(dateData)
        }
        setTimeout(() => {
          $('.search-alert').fadeOut(200)
          $('.select-alert').fadeOut(200)
          $('.date-alert').fadeOut(200)
        }, 2000);
      }else{
        if(location() === 'index'){
          sessionStorage.setItem('theme', JSON.stringify(themeVal))
          themeVal === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description'
          const searchData = filterData(token, themeVal, '', searchOption, val)
          searchData.then((res) => {
            sessionStorage.setItem('filterData', JSON.stringify(res.data))
            window.location.assign('./searchPage.html')
          })
        }else{
          const theme = JSON.parse(sessionStorage.getItem('theme'))
          theme === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description'
          const searchData = filterCityData(token, theme, themeVal, searchOption, val)
          searchData.then((res) => {
            sessionStorage.setItem('filterData', JSON.stringify(res.data))
            window.location.assign('./searchPage.html')
          })
        }
      }

      function activitySearch(dateData){
        const searchData = filterCityData(token, theme, themeVal, 'Description', val)
        searchData.then((res) => {
          const selectTime = parseInt(dateData.split('-').join(''))
          const filterDate = res.data.filter((item)=>{
            const itemTime = parseInt(item['StartTime'].split('T')[0].split('-').join('') )
            return itemTime>=selectTime
          })
          sessionStorage.setItem('filterData', JSON.stringify(filterDate))
          window.location.assign('./searchPage.html')
        })
      }
    }
  },
  init () {
    const theme = JSON.parse(sessionStorage.getItem('theme'))
    if(theme === 'Activity'){
      this.switchDateSearch()
    }
    if (location() === '' || location() === 'index') {
      this.focus()
    }else{
      $('.select-alert').html('<i class="bi bi-exclamation-circle-fill  me-2 text-danger"></i>請選擇城市')
    }
    this.changeSelect()
    this.search()
  }
}
