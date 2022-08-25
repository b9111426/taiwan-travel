import $ from 'jquery'
import { location } from '../asset/location'
export default {
  init () {
    const url = location()
    const data = { ScenicSpot: {txt:'探索景點',location:'scenePage'}, Activity:{txt:'節慶活動',location:'activityPage'} , Restaurant: {txt:'品嘗美食',location:'foodPage'} }
    const theme = JSON.parse(sessionStorage.getItem('breadcrumb'))
    const [selectData] = JSON.parse(sessionStorage.getItem('selectData'))
    const city = selectData.Address?.split('').slice(0, 3).join('')


    switch (url) {
    case 'scenePage':
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: '探索景點' }).appendTo('.breadcrumb')

      break
    case 'activityPage':
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: '節慶活動' }).appendTo('.breadcrumb')
      break
    case 'foodPage':
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: '品嚐美食' }).appendTo('.breadcrumb')
      break

    case 'searchPage':{
      $('<li/>', { class: 'breadcrumb-item breadcrumb-now', text: data[theme].txt }).appendTo('.breadcrumb')
      break
    }

    case 'contentPage':{
      const location = data[theme].location
      const link1 = $('<li/>', { class: 'breadcrumb-item'}).append($('<a/>',{class:'link-secondary',text: data[theme].txt,href : `/${location}.html`}))
      const link2 = $('<li/>', { class: 'breadcrumb-item'}).append($('<a/>',{class:'link-secondary',text: selectData.City || city ,href : '/searchPage.html'}))
      const link3 = $('<li/>', { class: 'breadcrumb-item text-gray',text:selectData[theme+'Name']})
      $('.breadcrumb').append(link1).append(link2).append(link3)
      break
      }
    }
  } 
}
