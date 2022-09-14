
export default {
  init () {
    $(window).on('scroll', function () {
      const innerHight = $(window).innerHeight()
      const scrollPos = $(window).scrollTop()

      if (scrollPos > innerHight / 2) {
        $('.fixTop').fadeIn(500)
      } else {
        $('.fixTop').fadeOut(500)
      }
      $('.fixTop').on('click', function () {
        $('html,body').scrollTop(0)
      })
    })
  }
}
