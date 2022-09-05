import $ from 'jquery'
export default {
  init () {
    $('.sceneLink,.activityLink,.foodLink').on('click', function () {
      sessionStorage.setItem('theme', JSON.stringify($(this).attr('data-id')))
      const breadcrumb = JSON.parse(sessionStorage.getItem('breadcrumb'))
      breadcrumb.push($(this).attr('data-id'))
      sessionStorage.setItem('breadcrumb', JSON.stringify(breadcrumb))
    })
  }
}
