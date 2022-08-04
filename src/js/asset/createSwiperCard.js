export function createSwiperCard (sceneData) {
  const filterPicData = sceneData.filter((item) => {
    return item.Picture.PictureUrl1 !== undefined
  }) // 過濾沒有圖片資料

  const swiperWrapper2 = document.querySelectorAll('.swiper-wrapper')[1]
  console.log(filterPicData)

  let str = ''
  filterPicData.forEach((item) => {
    console.log(item.StartTime, item.EndTime)
    let startTime = null
    let endTime = null
    startTime = item.StartTime.split('T')
    endTime = item.EndTime.split('T')
    const times = startTime[0].split('-').join('/') + ' - ' + endTime[0].split('-').join('/')
    str += /* html */`
    <div class="swiper-slide ">
      <div class="card h-100 bg-gray-100">
        <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column">
            <p class="text-secondary mb-2">${times}</p>
            <h4 class="card-text">${item.ActivityName}</h4>
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
  swiperWrapper2.innerHTML = str
}
