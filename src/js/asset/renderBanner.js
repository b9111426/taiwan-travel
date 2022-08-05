import $ from 'jquery'

export function renderBanner () {
  const bannerPic = [
    { url: 'https://images.unsplash.com/photo-1630244024081-dc4039254a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80' },
    { url: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80' },
    { url: 'https://images.unsplash.com/photo-1621848296279-7751546e9acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80' },
    { url: 'https://images.unsplash.com/photo-1601061223391-62eaaec5b59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80' },
    { url: 'https://images.unsplash.com/photo-1437315306147-0923bdb3fc12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80' }
  ]

  let str = ''
  $.each(bannerPic, (idx, item) => {
    str +=/* html */
    `<div class="swiper-slide">
      <img class="img-fluid " src="${item.url}" alt="">
    </div>`
  })

  $('.swiper-wrapper:first').html(str)
}
