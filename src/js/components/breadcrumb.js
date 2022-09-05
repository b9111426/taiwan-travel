import $ from 'jquery'
import { location } from '../asset/location'
export default {
  init () {
    const now = JSON.parse(sessionStorage.getItem('breadcrumb'))
    $('.breadcrumb').append($('<li/>', { class: 'breadcrumb-item text-gray', text: now }))
  }
}
