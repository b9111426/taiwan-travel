import $ from 'jquery'
import { createTopicClass } from '../asset/createCard'

export default {
  popularTopicsFn () {
    const str = createTopicClass()
    $('.topics-container').html(str)
  },
  init () {
    this.popularTopicsFn()
  }
}
