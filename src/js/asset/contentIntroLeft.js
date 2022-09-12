
export function contentIntroLeft (selectData, theme) {
  let list = ''
  switch (theme) {
  case 'Activity' :
    const startTime = selectData.StartTime.split('T')
    const startTimeHour = startTime[1].split('+')[0].substr(0, 5)
    const endTime = selectData.EndTime.split('T')
    const endTimeHour = endTime[1].split('+')[0].substr(0, 5)
    const time = startTime[0].split('-').join('/') + ' ' + startTimeHour + ' ~ ' + endTime[0].split('-').join('/') + ' ' + endTimeHour
    list = /* html */`
        <ul>
            <li class='d-flex'>
            <strong class='flex-shrink-0'>活動時間 :</strong><span class='ms-1'>${time}</span>
            </li>
            <li class='d-flex'>
            <strong  class='flex-shrink-0'>聯絡電話 :</strong>
            <a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone || ''}</a>
            </li>
            <li class='d-flex'>
            <strong class='flex-shrink-0'>主辦單位 :</strong><span class='ms-1'>${selectData.Organizer || ''}</span>
            </li>
            <li class='d-flex'>
            <strong class='flex-shrink-0'>活動地點 :</strong><span class='ms-1'>${selectData.Address || selectData.Location || ''}</span>
            </li>
            <li class='d-flex'>
            <strong class='flex-shrink-0'>官方網址 :</strong>
            <a class='ms-1 link-secondary text-break' href="${selectData.MapUrl || selectData.WebsiteUrl || '#'}">${selectData.MapUrl || selectData.WebsiteUrl || ''}</a>
            </li>
            <li class='d-flex'>
            <strong class='flex-shrink-0'>活動費用 :</strong><span class='ms-1'>${selectData.Charge || ''}</span>
            </li>
            <li class='d-flex'>
            <strong class='flex-shrink-0'>旅遊資訊 :</strong><span class='ms-1'>${selectData.TravelInfo || ''}</span>
            </li>
        </ul>
        `
    $('.content-intro-left').html(list)
    break

  case 'ScenicSpot' :
    list = /* html */`
        <ul>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>開放時間 :</strong><span class='ms-1'>${selectData.OpenTime || ''}</span>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>主辦單位 :</strong><span class='ms-1'>${selectData.Organizer || ''}</span>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>服務電話 :</strong>
        <a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone || ''}</a>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>景點地址 :</strong>
        <span class='ms-1'>${selectData.Address || selectData.Location || ''}</span>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>官方網址 :</strong>
        <a class='ms-1 link-secondary text-break' target="blank" href="${selectData.MapUrl || selectData.WebsiteUrl || '#'}">${selectData.MapUrl || selectData.WebsiteUrl || ''}</a>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>票價資訊 :</strong><span class='ms-1'>${selectData.TicketInfo || ''}</span>
        </li>
        </ul>`
    $('.content-intro-left').html(list)
    break
  case 'Restaurant' :

    list = /* html */`
        <ul>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>營業時間 :</strong><span class='ms-1'>${selectData.OpenTime || ''}</span>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>聯絡電話 :</strong>
        <a class='ms-1 link-secondary' href="tel:${selectData.Phone}">${selectData.Phone || ''}</a>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>餐廳名稱 :</strong>
        <span class='ms-1'>${selectData.RestaurantName || ''}</span>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>餐廳地址 :</strong>
        <span class='ms-1'>${selectData.Address || selectData.Location || ''}</span>
        </li>
        <li class='d-flex'>
        <strong class='flex-shrink-0'>官方網址 :</strong>
        <a class='ms-1 link-secondary text-break' target="blank" href="${selectData.MapUrl || selectData.WebsiteUrl || '#'}">${selectData.MapUrl || selectData.WebsiteUrl || ''}</a>
        </li>
        </ul>`
    $('.content-intro-left').html(list)
    break
  }
}
