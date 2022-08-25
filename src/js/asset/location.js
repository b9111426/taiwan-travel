export function location(){
  const last = window.location.pathname.split('/').length -1
  return window.location.pathname.split('/')[last].split('.')[0]
}