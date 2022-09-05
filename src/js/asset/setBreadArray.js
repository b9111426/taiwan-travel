export function setBreadArray(){
  const themeList = { ScenicSpot: '探索景點', Activity: '節慶活動', Restaurant: '品嚐美食' }
  const theme = JSON.parse(sessionStorage.getItem('theme'))
  const breadArray = new Array
  breadArray.push(themeList[theme])
  sessionStorage.setItem('breadcrumb',JSON.stringify(breadArray))
}