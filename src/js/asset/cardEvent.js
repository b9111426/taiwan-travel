
import $ from 'jquery'
import getToken from './getToken'
import { filterData } from './getData'
export function cardEvent(){
  const token = getToken.getCookieToken()
  $('.cardContainer').find('.card-imageContainer').on('click',function(e){
    e.stopPropagation()
    const title = $(this).parent().find('.card-text').text()
    const section = $(this).parent().attr('data-title')
    const selectName = section +'Name'
    filterData(token, section, '', selectName, title).then((res)=>{
      sessionStorage.setItem('selectData', JSON.stringify(res.data))
      sessionStorage.setItem('breadcrumb', JSON.stringify(section))
      window.location.assign('./contentPage.html')
    })
  })
}