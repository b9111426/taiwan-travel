import $ from 'jquery'
import { createTopicClass } from '../asset/createCard'
import { filterData } from '../asset/getData'
import { location } from '../asset/location'
import getToken from '../asset/getToken'

export default {
  popularTopicsFn () {
    const theme = JSON.parse(sessionStorage.getItem('theme'))
    const themeList = {
      ScenicSpot: 'Class1',
      Activity: 'Class1',
      Restaurant: 'Class'
    }
    const token = getToken.getCookieToken()
    const option = themeList[theme]
    const str = createTopicClass()
    $('.topics-container').html(str)
    $('.topics-container').find('.card').on('click', function () {
      const classes = $(this).find('.topics-title').text()
      const searchData = filterData(token, theme, '', option, classes)
      searchData.then((res) => {
        sessionStorage.setItem('filterData', JSON.stringify(res.data))
        window.location.assign('./searchPage.html')
      })
    })
  },
  init () {
    this.popularTopicsFn()
  }
}
