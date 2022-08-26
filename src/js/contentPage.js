
// library
import $ from 'jquery'

// resource
import getToken from './asset/getToken'
import { filterCardData } from './asset/createCard'
// component
import searchFn from './components/searchComponent'
import breadcrumbFn from './components/breadcrumb'
import { renderPages } from './components/pagination'

// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'
import searchComponent from '../html/components/searchComponent.html'
import card from '../html/components/card.html'
import pagination from '../html/components/pagination.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)
  $('#breadcrumb').html(breadcrumb)
  breadcrumbFn.init()
  const [selectData] = JSON.parse(sessionStorage.getItem('selectData'))
  const theme = JSON.parse(sessionStorage.getItem('breadcrumb'))
  const data = { ScenicSpot:'景點', Activity:'活動', Restaurant:'美食'}
  console.log(theme)
  console.log(selectData)
  
  $('.content-image').append($('<img/>',{ class:'w-100 h-100 object-fix' ,src:selectData.Picture.PictureUrl1}))
  $('.content-title').text(selectData[theme+'Name'])

  selectData.Class1?$('.content-class1').text('#' + selectData.Class1):$('.content-class1').hide()
  selectData.Class2?$('.content-class2').text('#' + selectData.Class2):$('.content-class2').hide()
  selectData.Class3?$('.content-class3').text('#' + selectData.Class3):$('.content-class3').hide()

  
  $('.content-intro-title').text(data[theme]+'介紹:')
  $('.content-article').text(selectData.Description)

  switch(theme){
    case 'Activity' :
      {
        const time = selectData.StartTime.split('T')[0]+'-'+selectData.EndTime.split('T')[0]
        const list = /*html*/`
        <ul>
            <li><strong class='d-inline'>活動時間:</strong><p class='d-inline'>${time}</p></li>
        </ul>
        
        `
        $('.content-intro-left').html(list)
      }
  }
  $('.content-intro-left')
})
