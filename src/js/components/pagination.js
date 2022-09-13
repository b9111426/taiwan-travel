
import { createCard } from '../asset/createCard'
import { cardEvent } from '../asset/cardEvent'
export function renderPages (data) {
  const pageData = {
    pageItems: 16,
    currentPage: 1,
    range: [],
    allData: []
  }
  pageData.allData = data

  // 總頁籤數
  const rows = Math.ceil(pageData.allData.length / pageData.pageItems)

  // 創建過度按鈕
  const transition = $('<li/>', { class: 'page-item transition-item-js' }).append($('<a/>', { class: 'page-link link-secondary disabled', href: 'javascript:;', text: '...' }))
  const transition2 = transition.clone()

  // 創建第1頁和最後頁按鈕
  const firstLink = $('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: 1 })
  const firstItem = $('<li/>', { class: 'page-item firstPage-js' }).append(firstLink)
  $('.pagination').children('.page-item').eq(0).after(firstItem)

  const lastALink = $('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: rows })
  const lastItem = $('<li/>', { class: 'page-item  lastPage-js' }).append(lastALink)
  $('.pagination').children('.page-item').last().before(lastItem)

  // 如果只有5個頁籤
  if (rows <= 5) {
    for (let idx = 1; idx < rows - 1; idx++) {
      const aLink = $('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: idx + 1 })
      const item = $('<li/>', { class: 'page-item pages-js' }).append(aLink)
      $('.lastPage-js').before(item)
    }
  }

  // 如果只有1頁籤或沒有資料
  if (rows === 1 || rows === 0) {
    $('.lastPage-js').remove()
  }

  // 渲染中間頁籤
  function reRenderPages () {
    $('.firstPage-js').after(transition)
    $('.lastPage-js').before(transition2)

    if (pageData.currentPage <= 4) {
      pageData.range = []
      $('.pagination').find('.pages-js').remove()
      $('.transition-item-js').eq(0).hide()
      $('.transition-item-js').eq(1).show()

      for (let idx = 1; idx < 4; idx++) {
        const aLink = $('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: idx + 1 })
        const item = $('<li/>', { class: 'page-item pages-js' }).append(aLink)
        $('.pagination').children().eq(idx + 1).after(item)
      }
    } else if (pageData.currentPage > 4 && pageData.currentPage < rows - 3) {
      $('.transition-item-js').show()
      const isRange = pageData.range.includes(pageData.currentPage)
      // 判斷是否需重新渲染
      if (!isRange) {
        pageData.range = []
        $('.pagination').find('.pages-js').remove()

        for (let idx = 0; idx < 3; idx++) {
          const aLink = $('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: pageData.currentPage + idx })
          const item = $('<li/>', { class: 'page-item pages-js' }).append(aLink)
          $('.transition-item-js').eq(1).before(item)
        }

        $('.pages-js>a').each((idx, item) => {
          pageData.range.push(+item.innerHTML)
        })
      }
    } else {
      $('.transition-item-js').eq(1).hide()
      $('.transition-item-js').eq(0).show()
      $('.pagination').find('.pages-js').remove()
      pageData.range = []
      for (let idx = 3; idx > 0; idx--) {
        const aLink = $('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: rows - idx })
        const item = $('<li/>', { class: 'page-item pages-js' }).append(aLink)
        $('.transition-item-js').eq(1).before(item)
      }
    }

    $('.pagination').find('.firstPage-js,.pages-js,.lastPage-js').on('click', function (e) {
      e.preventDefault()
      pageData.currentPage = +$(this).text()
      renderCard()
      if (rows > 4) { reRenderPages() }
      changeClass()
    })
  }

  // 渲染出卡片
  function renderCard () {
    const theme = JSON.parse(sessionStorage.getItem('theme'))
    const start = (pageData.currentPage - 1) * pageData.pageItems
    const end = start + pageData.pageItems
    const currentPageData = pageData.allData.slice(start, end)
    const str = createCard(currentPageData, theme)
    $('.searchResult').find('.card-content').html(str)
    cardEvent()
    $('.card').addClass('animate__animated animate__fadeIn')
  }

  // 頁籤交互樣式
  function changeClass () {
    const select = $('.page-item').filter(function () {
      return +$(this).text() === pageData.currentPage
    })
    select.addClass('active').siblings().removeClass('active')

    if (pageData.currentPage === 1 && rows > 1) {
      $('.pageSub-js').removeClass('link-secondary').addClass('text-gray disabled')
      $('.pageAdd-js').removeClass('text-gray disabled').addClass('link-secondary')
    } else if (pageData.currentPage === rows && rows > 1) {
      $('.pageAdd-js').removeClass('link-secondary').addClass('text-gray disabled')
      $('.pageSub-js').removeClass('text-gray disabled').addClass('link-secondary')
    } else if (pageData.currentPage === rows && pageData.currentPage === 1) {
      $('.pageSub-js,.pageAdd-js').addClass('text-gray disabled').removeClass('link-secondary')
    } else {
      $('.pageSub-js,.pageAdd-js').removeClass('text-gray disabled').addClass('link-secondary')
    }
  }

  // 綁監聽
  $('.pagination').find('.firstPage-js,.pages-js,.lastPage-js').on('click', function (e) {
    pageData.currentPage = +$(this).text()
    renderCard()
    if (rows > 5) { reRenderPages() }
    changeClass()
  })

  $('.pageSub-js').on('click', function (e) {
    if (pageData.currentPage > 1) {
      pageData.currentPage--
      if (rows > 5) { reRenderPages() }
      renderCard()
      changeClass()
    }
  })
  $('.pageAdd-js').on('click', function (e) {
    if (pageData.currentPage < rows) {
      pageData.currentPage++
      if (rows > 5) { reRenderPages() }
      renderCard()
      changeClass()
    }
  })

  renderCard()
  if (rows > 5) { reRenderPages() }
  changeClass()
}
