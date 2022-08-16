export function location () {
  const url = window.location.href
  const arr = url.split('/')
  return arr[arr.length - 1]
}
