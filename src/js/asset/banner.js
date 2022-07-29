
export function renderBanner ($, bannerPic) {
  let str = ''
  $.each(bannerPic, (idx, item) => {
    str +=/* html */
    `<div class="swiper-slide">
      <img class="img-fluid " src="${item.url}" alt="">
    </div>`
    $('.swiper-wrapper-1').html(str)
  })
  const bannerContent = /* html */
  `<div class="banner-content">
      <h1 class="banner-title display-3 fw-bold">探索<span class="banner-title-deco">台灣之美</span><br>讓我們更親近這片土地</h1>
          <h3 class="banner-subTitle  fw-lighter"><i class="bi bi-geo-alt-fill"></i>台灣旅遊景點導覽 <span>Taiwan Travel
            Guide</span>
          </h3>
  <div class="banner-search input-group mt-6">
    <input type="text" class="form-control ps-3 fs-5" placeholder="你想去哪裡? 請輸入關鍵字" aria-label="Recipient's username"
      aria-describedby="button-addon2">
    <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-search"></i><span
        class="ms-3 banner-search-btn">收尋</span></button>
  </div>
</div>
<div class="banner-filter"></div>
`

  $('#main').append(bannerContent)
}
