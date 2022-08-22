import $ from 'jquery'
import { createCard } from '../asset/createCard'
export function renderPages (data) {
  const pageData = {
    pageItems: 16,
    currentPage: 1
  }
  // 渲染分頁
  const rows = Math.ceil(data.length / pageData.pageItems)
  for (let idx = 0; idx < rows; idx++) {
    const item = $('<li/>', { class: 'page-item' })
      .append($('<a/>', { class: 'page-link link-secondary', href: 'javascript:;', text: idx + 1 }))
    $('.pagination').children('.page-item').eq(idx).after(item)
  }

  // 渲染出卡片
  function renderCard () {
    const start = pageData.currentPage - 1
    const end = pageData.currentPage * pageData.pageItems
    const currentPageData = data.slice(start, end)
    const str = createCard(currentPageData)
    $('.searchResult').find('.card-content').html(str)
  }

  function renderPagination () {
    const select = $('.pagination').find('.page-item').eq(pageData.currentPage)
    select.addClass('active').siblings().removeClass('active')
    if (pageData.currentPage === 1) {
      $('.pageSub-js>a').removeClass('link-secondary').addClass('text-gray disabled')
      $('.pageAdd-js>a').removeClass('text-gray disabled').addClass('link-secondary')
    } else if (pageData.currentPage === rows) {
      $('.pageAdd-js>a').removeClass('link-secondary').addClass('text-gray disabled')
      $('.pageSub-js>a').removeClass('text-gray disabled').addClass('link-secondary')
    }
  }

  $('.pageSub-js').on('click', function (e) {
    e.preventDefault()
    if (pageData.currentPage > 1) {
      pageData.currentPage--
      renderCard()
      renderPagination()
    }
  })
  $('.pageAdd-js').on('click', function (e) {
    e.preventDefault()
    if (pageData.currentPage < rows) {
      pageData.currentPage++
      renderCard()
      renderPagination()
    }
  })

  renderCard()
  renderPagination()
}
