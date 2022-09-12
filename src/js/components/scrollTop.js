
export default {
  init () {
    $(window).on('scroll', function () {
      const pageHight = $(window).innerHeight()
      const scrollPos = $(window).scrollTop()

      if (scrollPos > pageHight / 2) {
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
