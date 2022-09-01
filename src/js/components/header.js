import $ from 'jquery'
export default{
  init(){
    $('.sceneLink,.activityLink,.foodLink').on('click',function(){
      sessionStorage.setItem('theme',JSON.stringify($(this).attr('data-id')))
    })
  }
}