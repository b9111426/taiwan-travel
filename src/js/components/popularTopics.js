import $ from 'jquery'
import { createTopicClass } from '../asset/createCard'

$(() => {
  const str = createTopicClass()
  $('.topics-container').html(str)
})
