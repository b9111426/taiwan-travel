import $ from 'jquery'
export default {
  init () {
    $('.sceneLink,.activityLink,.foodLink').on('click', function () {
      const theme = $(this).attr('data-id')
      sessionStorage.setItem('theme', JSON.stringify(theme))
    })
  }
}
