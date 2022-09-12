export function contentIntroMap (selectData, theme) {
  const map = L.map('content-map').setView([selectData.Position.PositionLat, selectData.Position.PositionLon], 16)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  const marker = L.marker([selectData.Position.PositionLat, selectData.Position.PositionLon]).addTo(map)
  marker.bindPopup(`<span class="cd-span">${selectData[theme + 'Name']}</span>`).openPopup()
}
