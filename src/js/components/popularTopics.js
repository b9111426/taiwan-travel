import $ from 'jquery'
import { createTopicClass } from '../asset/createCard'
import { filterData } from '../asset/getData'
import { location } from '../asset/location'
import getToken from '../asset/getToken'

export default {
  popularTopicsFn () {
    const data = {
      scenePage: ['ScenicSpot', 'Class1'],
      activityPage: ['Activity', 'Class1'],
      foodPage: ['Restaurant', 'Class']
    }
    const token = getToken.getCookieToken()
    const url = location()
    const themeVal = data[url][0]
    const option = data[url][1]
    const str = createTopicClass()
    $('.topics-container').html(str)
    $('.topics-container').find('.card').on('click', function () {
      const classes = $(this).find('.topics-title').text()
      const searchData = filterData(token, themeVal, '', option, classes)
      searchData.then((res) => {
        sessionStorage.setItem('filterData', JSON.stringify(res.data))
        sessionStorage.setItem('breadcrumb', JSON.stringify(themeVal))
        window.location.assign('./searchPage.html')
      })
    })
  },
  init () {
    this.popularTopicsFn()
  }
}
