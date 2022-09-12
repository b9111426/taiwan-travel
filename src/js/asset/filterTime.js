export function filterTime (data) {
  const currentTime = parseInt(new Date().toISOString().split('T')[0].split('-').join(''))
  const filterTime = data.filter((item) => {
    const activityTime = parseInt(item.StartTime.split('T')[0].split('-').join(''))
    return activityTime >= currentTime
  })

  return filterTime
}
