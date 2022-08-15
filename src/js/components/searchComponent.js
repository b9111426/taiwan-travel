
import $ from 'jquery'
import { getAuthorizationHeader } from '../asset/getToken'
import { getCity } from '../asset/getData'

$(() => {
  function getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')// 從cookie取token
  }
  const token = getToken()
  if (token === '') {
    getAuthorizationHeader()
  }
  // getCity(token).then((res) => {
  //  console.log(res.data)
  //  res.data.forEach((item) => {
  //    const option = document.createElement('option')
  //    option.setAttribute('value', item.CityName)
  //    option.innerText = item.CityName
  //    $('.search-selection').append(option)
  //  })
  // })

  // 修改select樣式
  $('select').each(function () {
    const selectEl = $(this)
    const numberOfOptions = $(this).children('option').length

    selectEl.addClass('select-hidden')
    selectEl.wrap('<div class="select h-100 fs-5 text-center  position-relative"></div>')
    selectEl.after('<div class="select-styled pe-3"></div>')
    const styledSelect = selectEl.next('.select-styled')
    styledSelect.text(selectEl.children('option').eq(0).text())
    const listEl = $('<ul/>', { class: 'select-options' }).insertAfter(styledSelect)

    for (let i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: selectEl.children('option').eq(i).text(),
        rel: selectEl.children('option').eq(i).val()
      }).appendTo(listEl)
    }

    styledSelect.on('click', function (e) {
      e.stopPropagation()
      $(this).toggleClass('active').next('ul.select-options').toggle()
    })

    const listItems = listEl.children('li')

    listItems.on('click', function (e) {
      e.stopPropagation()
      styledSelect.text($(this).text()).removeClass('active')
      selectEl.val($(this).attr('rel'))
      listEl.hide()
    })

    $(document).on('click', function (e) {
      e.stopPropagation()
      styledSelect.removeClass('active')
      listEl.hide()
    })
  })

  $('.search-input').trigger('focus')
  // $('.search-btn').on('click', function (e) {
  //  e.stopPropagation()
  //  window.location.assign('../html/pages/searchPage.html')
  // })
})
