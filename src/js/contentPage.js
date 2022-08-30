
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
  $('.content-image-title').text(selectData.Picture.PictureDescription1)
  $('.content-image-2').attr('src',selectData.Picture.PictureUrl2)
  $('.content-image-3').attr('src',selectData.Picture.PictureUrl3)
  $('.content-image-2,.content-image-3').on('click',function(){
    const toggleAttr = $('.content-image-1').attr('src')
    const dataId = $('.content-image-1').attr('data-id')
    $('.content-image-1').attr('src',$(this).attr('src')).attr('data-id',$(this).attr('data-id'))
    $(this).attr('src',toggleAttr).attr('data-id',dataId)
    const id = $('.content-image-1').attr('data-id')
    $('.content-image-title').text(selectData.Picture['PictureDescription'+id])
  })

  $('.content-title').text(selectData[theme+'Name'])

  selectData.Class1||selectData.Class?$('.content-class1').text('#' + (selectData.Class1||selectData.Class)):$('.content-class1').hide()
  selectData.Class2?$('.content-class2').text('#' + selectData.Class2):$('.content-class2').hide()
  selectData.Class3?$('.content-class3').text('#' + selectData.Class3):$('.content-class3').hide()

  
  $('.content-intro-title').text(data[theme]+'介紹:')
  $('.content-article').text(selectData.Description||selectData.DescriptionDetail)

  let list = ''
  switch(theme){
    case 'Activity' :
      
        const startTime = selectData.StartTime.split('T')
        const startTimeHour = startTime[1].split('+')[0].substr(0,5)
        const endTime = selectData.EndTime.split('T')
        const endTimeHour = endTime[1].split('+')[0].substr(0,5)
        const time = startTime[0].split('-').join('/') + ' ' +startTimeHour+' ~ ' + endTime[0].split('-').join('/') + ' ' +endTimeHour
        list = /*html*/`
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
      break

    case 'ScenicSpot' :
        list = /*html*/`
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
      break
    case 'Restaurant' :
      
        list = /*html*/`
        <ul>
        <li class='d-flex'><strong class='flex-shrink-0'>營業時間 :</strong><span class='ms-1'>${selectData.OpenTime||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>聯絡電話 :</strong><a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone||''}</a></li>
        <li class='d-flex'><strong class='flex-shrink-0'>餐廳名稱 :</strong><span class='ms-1'>${selectData.RestaurantName||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>餐廳地址 :</strong><span class='ms-1'>${selectData.Address||selectData.Location||''}</span></li>
        <li class='d-flex'><strong class='flex-shrink-0'>官方網址 :</strong>
        <a class='ms-1 link-secondary' target="blank" href="${selectData.MapUrl||selectData.WebsiteUrl||'#'}">${selectData.MapUrl||selectData.WebsiteUrl||''}</a></li>
        </ul>`
        $('.content-intro-left').html(list)
        break
      }

    const map = L.map('content-map').setView([selectData.Position.PositionLat, selectData.Position.PositionLon], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([selectData.Position.PositionLat, selectData.Position.PositionLon]).addTo(map);
    marker.bindPopup(`<span class="cd-span">${selectData[theme+'Name']}</span>`).openPopup();
  }
)
