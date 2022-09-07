import $ from 'jquery'

export function contentImage(selectData){
  $('.content-image-1').attr('src',selectData.Picture.PictureUrl1)
  $('.content-image-title').text(selectData.Picture.PictureDescription1)
  $('.content-image-2').attr('src',selectData.Picture.PictureUrl2)
  $('.content-image-3').attr('src',selectData.Picture.PictureUrl3)
  $('.content-image-2,.content-image-3').on('click',function(){
    const toggleAttr = $('.content-image-1').attr('src')
    const dataId = $('.content-image-1').attr('data-id')
    $('.content-image-1').attr('src',$(this).attr('src')).attr('data-id',$(this).attr('data-id'))
    $(this).attr('src',toggleAttr).attr('data-id',dataId)
    const id = $('.content-image-1').attr('data-id')
    $('.content-image-title').text(selectData.Picture['PictureDescription'+id])
  })
}