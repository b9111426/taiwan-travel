import $ from 'jquery'
import { location } from './location'
export function createSwiperCard (data) {
  let str = ''
  data.forEach((item) => {
    let startTime = null
    let endTime = null
    startTime = item.StartTime.split('T')
    endTime = item.EndTime.split('T')
    const times = startTime[0].split('-').join('/') + ' - ' + endTime[0].split('-').join('/')
    str += /* html */`
    <div class="swiper-slide h-auto">
      <div class="card h-100 bg-gray-100">
        <div class="card-imageContainer overflow-hidden">
          <img class="card-image object-fix w-100" src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
        </div>
            <div class="card-body d-flex flex-column px-2">
              <p class="text-secondary ">${times}</p>
              <h5 class="card-text mt-2 mb-3">${item.ActivityName}</h5>
                <div class="row mt-auto">
                <p class="col-6 text-secondary"><i class="bi bi-geo-alt"></i>${item.City}</p>
                <a class="col-6 text-end" href="javascript:;">詳細介紹
                <i class="bi bi-chevron-right"></i></a>
                </div>
            </div>
      </div>
    </div>
    `
  })

  $('.swiper-wrapper').eq(1).html(str)
}

export function createCard (data) {
  let str = ''
  data.forEach((item) => {
    const city = item.Address.split('').slice(0, 3).join('')

    str += /* html */`
      <div class="col">
        <div class="card h-100">
          <div class="card-imageContainer overflow-hidden">
            <img class="card-image object-fix w-100 h-100"  src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
          </div>
          <div class="card-body d-flex flex-column overflow-hidden">
            <h5 class="card-text mb-2">${item.ScenicSpotName || item.RestaurantName || item.ActivityName}</h5>
            <p class="text-secondary mt-auto"><i class="bi bi-geo-alt"></i>${item.City || city}</p>
          </div>
        </div>
      </div>
      `
  })
  return str
}

export function createTopicClass () {
  const url = location()
  let str = ''
  const obj = {
    scene: ['自然風景類', '觀光工廠類', '遊憩類', '休閒農業類', '生態類', '溫泉類', '古蹟類'],
    activity: ['節慶活動', '自行車活動', '遊憩活動', '產業文化活動', '年度活動', '四季活動'],
    food: ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食']
  }
  if (url === 'scenePage.html') {
    create(1, obj.scene)
  } else if (url === 'activityPage.html') {
    create(8, obj.activity)
  } else if (url === 'foodPage.html') {
    create(14, obj.food)
  }

  function create (num, arr) {
    arr.forEach((item, idx) => {
      str += /* html */`
      <div class="col">
        <div class="card card-h h-100 ">
          <div class="card-imageContainer overflow-hidden">
            <img class="card-image object-fix w-100 h-100"  src="./topics-${idx + num}.jpg" class="card-img-top" alt="...">
          </div>
          <h3 class="topics-title">${item}</h3>
        </div>
      </div>
      `
    })
  }

  return str
}

export function filterCardData (data) {
  const filterData = []
  const filterPicData = data.filter((item) => {
    return item.Picture.PictureUrl1 !== undefined
  }) // 過濾沒有圖片資料
  filterPicData.forEach((item) => {
    const Pic1 = item.Picture.PictureUrl1.split('/').indexOf('travel.nantou.gov.tw')
    const Pic2 = item.Picture.PictureUrl1.split('/').indexOf('210.69.151.212')
    // 濾掉沒圖片的網址
    if (Pic1 === -1 && Pic2 === -1) {
      filterData.push(item)
    }
  })
  return filterData
}
