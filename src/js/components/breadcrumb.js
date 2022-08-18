import $ from 'jquery'
import { location } from '../asset/location'
export default {
  init () {
    const url = location()
    const li = $('<li />', { class: 'breadcrumb-item' })

    switch (url) {
    case 'scenePage.html':
      $('<a/>', { text: '探索景點' }).appendTo(li)
      $('.breadcrumb').append(li)
      break
    case 'activityPage.html':
      $('<a/>', { text: '節慶活動' }).appendTo(li)
      $('.breadcrumb').append(li)
      break
    case 'foodPage.html':
      $('<a/>', { text: '品嚐美食' }).appendTo(li)
      $('.breadcrumb').append(li)
      break
    }
  }
}
