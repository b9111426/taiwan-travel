import getToken from './getToken'
import { filterData } from './getData'

export function cardEvent (isNear) {
  const token = getToken.getCookieToken()
  $('.cardContainer').find('.card-imageContainer').on('click', function (e) {
    e.stopPropagation()
    const title = $(this).parent().find('.card-text').text()
    const theme = $(this).parent().attr('data-title')
    sessionStorage.setItem('theme', JSON.stringify(theme))
    const breadArray = JSON.parse(sessionStorage.getItem('breadcrumb'))
    if (isNear) { breadArray.pop() }
    breadArray.push(title)
    sessionStorage.setItem('breadcrumb', JSON.stringify(breadArray))
    const themeName = theme + 'Name'
    filterData(token, theme, '', themeName, title).then((res) => {
      sessionStorage.setItem('selectData', JSON.stringify(res.data))
      window.location.assign('./contentPage.html')
    })
  })
}
