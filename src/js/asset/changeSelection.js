import $ from 'jquery'

export function changeSelection (data) {

  if (data) {
    $('select').find('option').eq(0).html('-全部縣市-')
    $('select').find('option').eq(0).siblings().remove()
    data.forEach(function (item) {
      $('<option />', {
        value: item.City,
        text: item.CityName
      }).appendTo($('select'))
    })
  }

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

  if (data) {
    $('.select-options').addClass('select-overflowY')
  } else {
    $('.select-options').removeClass('select-overflowY')
  }
}
