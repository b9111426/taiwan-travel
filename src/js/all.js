
// library
import $ from 'jquery'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

// resource
import '../stylesheets/all.scss'
import { createSwiper } from './asset/swiper'
import { renderBanner } from './asset/banner'
import { sceneData } from './asset/getData'

// Html components
import headerHtml from '../html/components/header.html'
import footerHtml from '../html/components/footer.html'

$(() => {
  $('#header').html(headerHtml)
  $('#footer').html(footerHtml)

  renderBanner() // 渲染出banner標題和背景圖

  console.log(sceneData)
  const filterPicData = sceneData.filter((item) => {
    return item.Picture.PictureUrl1 !== undefined
  })
  const aa = document.querySelectorAll('.swiper-wrapper')[1]
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
      str +=/* html */`
      <div class="card h-100">
      <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">

        <h4 class="card-text">${item.ActivityName}</h4>
        <a class="mt-auto text-end" href="javascript:;">詳細介紹<i class="bi bi-chevron-right"></i></a>
      </div>
    </div>`
    })
    return str
  }

  for (let i = 0; i < pages; i++) {
    const el = document.createElement('div')
    el.classList.add('swiper-slide', 'd-flex', 'justify-content-start')
    const cardList = createCard()
    el.innerHTML = cardList
    aa.appendChild(el)
  }
  createSwiper() // 創建swiper實體
})
