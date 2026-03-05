document.addEventListener('DOMContentLoaded', function () {
    // Coordonnées par défaut
    const defaultLat = -4.2634;
    const defaultLng = 15.2429;

    // 1. Initialiser la carte
    const map = L.map('carte-de-selection-du-lieu-de-la-rencontre').setView([defaultLat, defaultLng], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let selectionMarker;

    // 2. Gestion du clic sur la carte
    map.on('click', function (e) {
        const lat = e.latlng.lat.toFixed(6);
        const lng = e.latlng.lng.toFixed(6);

        // Mise à jour des champs de saisie
        document.getElementById('champs-de-saisie-de-la-latitude').value = lat;
        document.getElementById('champs-de-saisie-de-la-longitude').value = lng;

        // Déplacer ou créer le marqueur
        if (selectionMarker) {
            selectionMarker.setLatLng(e.latlng);
        } else {
            selectionMarker = L.marker(e.latlng, { draggable: true }).addTo(map);
            
            // Si l'utilisateur déplace le marqueur à la main
            selectionMarker.on('dragend', function (event) {
                const marker = event.target;
                const position = marker.getLatLng();
                document.getElementById('champs-de-saisie-de-la-latitude').value = position.lat.toFixed(6);
                document.getElementById('champs-de-saisie-de-la-longitude').value = position.lng.toFixed(6);
            });
        }
    });
    
    // Correction de bug d'affichage Leaflet
    setTimeout(() => { map.invalidateSize(); }, 500);
});