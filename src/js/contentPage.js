
// library
import $ from 'jquery'

// component
import breadcrumbFn from './components/breadcrumb'


// html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'
import breadcrumb from '../html/components/breadcrumb.html'


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
  
  $('.content-image-1').attr('src',selectData.Picture.PictureUrl1)
  $('.content-image-2').attr('src',selectData.Picture.PictureUrl2)
  $('.content-image-3').attr('src',selectData.Picture.PictureUrl3)
  $('.content-image-2,.content-image-3').on('click',function(){
    const toggleAttr = $('.content-image-1').attr('src')
    $('.content-image-1').attr('src',$(this).attr('src'))
    $(this).attr('src',toggleAttr)
  })

  $('.content-title').text(selectData[theme+'Name'])

  selectData.Class1||selectData.Class?$('.content-class1').text('#' + (selectData.Class1||selectData.Class)):$('.content-class1').hide()
  selectData.Class2?$('.content-class2').text('#' + selectData.Class2):$('.content-class2').hide()
  selectData.Class3?$('.content-class3').text('#' + selectData.Class3):$('.content-class3').hide()

  
  $('.content-intro-title').text(data[theme]+'介紹:')
  $('.content-article').text(selectData.Description||selectData.DescriptionDetail)

  switch(theme){
    case 'Activity' :
      {
        const startTime = selectData.StartTime.split('T')
        const endTime = selectData.EndTime.split('T')
        const time = startTime[0].split('-').join('/') + ' - ' + endTime[0].split('-').join('/')
        const list = /*html*/`
        <ul>
            <li><strong>活動時間 :</strong><span class='ms-1'>${time}</span></li>
            <li><strong>聯絡電話 :</strong><a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone||''}</a></li>
            <li><strong>主辦單位 :</strong><span class='ms-1'>${selectData.Organizer||''}</span></li>
            <li><strong>活動地點 :</strong><span class='ms-1'>${selectData.Address||selectData.Location||''}</span></li>
            <li><strong>官方網址 :</strong>
            <a class='ms-1 link-secondary' href="${selectData.MapUrl||selectData.WebsiteUrl||'#'}">${selectData.MapUrl||selectData.WebsiteUrl||''}</a></li>
            <li><strong>活動費用 :</strong><span class='ms-1'>${selectData.Charge||''}</span></li>

        </ul>
        `
        $('.content-intro-left').html(list)
      }

    case 'ScenicSpot' :
      { 
        const list = /*html*/`
        <ul>
        <li class='d-flex'><strong class='flex-shrink-0'>開放時間 :</strong><span class='ms-1'>${selectData.OpenTime||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>主辦單位 :</strong><span class='ms-1'>${selectData.Organizer||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>服務電話 :</strong><a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone||''}</a></li>
        <li class='d-flex'><strong class='flex-shrink-0'>景點地址 :</strong><span class='ms-1'>${selectData.Address||selectData.Location||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>官方網址 :</strong>
        <a class='ms-1 link-secondary' target="blank" href="${selectData.MapUrl||selectData.WebsiteUrl||'#'}">${selectData.MapUrl||selectData.WebsiteUrl||''}</a></li>
        <li class='d-flex'><strong class='flex-shrink-0'>票價資訊 :</strong><span class='ms-1'>${selectData.TicketInfo||''}</span></li>
        </ul>`
        $('.content-intro-left').html(list)
      }
    case 'Restaurant' :
      {
        const list = /*html*/`
        <ul>
        <li class='d-flex'><strong class='flex-shrink-0'>營業時間 :</strong><span class='ms-1'>${selectData.OpenTime||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>聯絡電話 :</strong><a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone||''}</a></li>
        <li class='d-flex'><strong class='flex-shrink-0'>餐廳名稱 :</strong><span class='ms-1'>${selectData.RestaurantName||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>餐廳地址 :</strong><span class='ms-1'>${selectData.Address||selectData.Location||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>官方網址 :</strong>
        <a class='ms-1 link-secondary' target="blank" href="${selectData.MapUrl||selectData.WebsiteUrl||'#'}">${selectData.MapUrl||selectData.WebsiteUrl||''}</a></li>
        </ul>`
        $('.content-intro-left').html(list)
      }
  }
})
