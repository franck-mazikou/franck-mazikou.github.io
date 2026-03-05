const map = L.map('carte-de-visualisation-du-lieu-de-rencontre').setView([-4.261669, 15.252400], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([-4.261669, 15.252400]).addTo(map).bindPopup("<p class = 'poppins-light'>Reférence : En face de l'hotel Péfaco</p>").openPopup();

map.on('click', onMapClick);
