export function createSwiperCard (sceneData) {
  const filterPicData = sceneData.filter((item) => {
    return item.Picture.PictureUrl1 !== undefined
  }) // 過濾沒有圖片資料

  const swiperWrapper2 = document.querySelectorAll('.swiper-wrapper')[1]
  const rows = 4
  let start = 0
  let end = start + rows

  const pages = Math.ceil(filterPicData.length / rows)

  function createCard () {
    start += rows
    end += rows
    let str = ''
    const pageItems = filterPicData.slice(start - rows, end - rows)
    pageItems.forEach((item) => {
      // console.log(item)
      str +=/* html */`
      <div class="col">
        <div class="card h-100">
          <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column">
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
    return str
  }

  for (let i = 0; i < pages; i++) {
    const swiperEl = document.createElement('div')
    swiperEl.classList.add('swiper-slide')
    const colEl = document.createElement('div')
    colEl.classList.add('swiper-wrapper-2-cards', 'row', 'row-cols-4')
    swiperEl.appendChild(colEl)
    const cardList = createCard()
    colEl.innerHTML = cardList
    swiperWrapper2.appendChild(swiperEl)
  }
}
