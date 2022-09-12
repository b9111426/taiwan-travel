
export default {
  init () {
    const urlList = {
      探索景點: 'scenePage.html',
      節慶活動: 'activityPage.html',
      品嚐美食: 'foodPage.html'
    }
    const breadArray = JSON.parse(sessionStorage.getItem('breadcrumb'))
    const now = breadArray[breadArray.length - 1]
    breadArray.pop()
    breadArray.forEach((item) => {
      const aLink = $('<a/>', { href: './' + urlList[item], class: 'link-secondary', text: item })
      const li = $('<li/>', { class: 'breadcrumb-item' }).append(aLink)
      $('.breadcrumb').append(li)
    })
    $('.breadcrumb').append($('<li/>', { class: 'breadcrumb-item text-gray', text: now }))
  }
}
