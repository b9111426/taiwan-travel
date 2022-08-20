import $ from 'jquery'
import { location } from '../asset/location'
export default {
  init () {
    const url = location()

    switch (url) {
    case 'scenePage.html':
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: '探索景點' }).appendTo('.breadcrumb')

      break
    case 'activityPage.html':
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: '節慶活動' }).appendTo('.breadcrumb')
      break
    case 'foodPage.html':
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: '品嚐美食' }).appendTo('.breadcrumb')
      break

    case 'searchPage.html':{
      const data = { ScenicSpot: '探索景點', Activity: '節慶活動', Restaurant: '品嘗美食' }
      const theme = sessionStorage.getItem('breadcrumb')
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: data[theme] }).appendTo('.breadcrumb')
      break
    }
    }
  }
}
