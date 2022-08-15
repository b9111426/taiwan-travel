import $ from 'jquery'

$(() => {
  const location = window.location.href
  const arr = location.split('/')
  const li = $('<li />', { class: 'breadcrumb-item' })

  switch (arr[arr.length - 1]) {
  case 'scenePage.html':
    $('<a/>', { text: '探索景點', href: '../../html/pages/scenePage.html' }).appendTo(li)
    $('.breadcrumb').append(li)
    break
  case 'acitvityPage.html':
    $('<a/>', { text: '節慶活動', href: '../../html/pages/acitvityPage.html' }).appendTo(li)
    $('.breadcrumb').append(li)
    break
  case 'tastyFood.html':
    $('<a/>', { text: '品嚐美食', href: '../../html/pages/tastyFood.html' }).appendTo(li)
    $('.breadcrumb').append(li)
    break
  }
})
