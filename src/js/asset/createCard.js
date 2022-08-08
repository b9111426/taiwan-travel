import $ from 'jquery'
export function createSwiperCard (sceneData) {
  const filterPicData = sceneData.filter((item) => {
    return item.Picture.PictureUrl1 !== undefined
  }) // 過濾沒有圖片資料

  let str = ''
  filterPicData.forEach((item) => {
    let startTime = null
    let endTime = null
    startTime = item.StartTime.split('T')
    endTime = item.EndTime.split('T')
    const times = startTime[0].split('-').join('/') + ' - ' + endTime[0].split('-').join('/')
    str += /* html */`
    <div class="swiper-slide ">
      <div class="card h-100 bg-gray-100">
          <img class="object-fix w-100" src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
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

export function createCard (sceneData) {
  const filterPicData = sceneData.filter((item) => {
    return item.Picture.PictureUrl1 !== undefined && item.City !== undefined
  }) // 過濾沒有圖片資料

  let str = ''
  filterPicData.forEach((item) => {
    const filterPic = item.Picture.PictureUrl1.split('/').indexOf('travel.nantou.gov.tw')
    // 濾掉圖片網址travel.nantou.gov.tw

    if (filterPic === -1) {
      str += /* html */`
      <div class="col">
        <div class="card card-h h-100">
          <div class="card-imageContainer overflow-hidden">
            <img class="card-image object-fix w-100 h-100"  src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
          </div>
          <div class="card-body d-flex flex-column overflow-hidden">
            <h5 class="card-text">${item.ScenicSpotName || item.RestaurantName}</h5>
            <p class="text-secondary mt-auto"><i class="bi bi-geo-alt"></i>${item.City}</p>
          </div>
        </div>
      </div>
      `
    }
  })
  return str
}
