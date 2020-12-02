
// coordenadas
mapboxgl.accessToken = 'pk.eyJ1IjoieXVraW9kdWFsIiwiYSI6ImNraGFxaGp0ZTB6YnAyeGtodG5uaDB4dnEifQ.YO-NBhgHfDYGNSomXjyeaA'
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-99.104534,19.629206],
zoom: 14
})
map.addControl(new mapboxgl.NavigationControl());
var marker = new mapboxgl.Marker({
    draggable: true
    })
.setLngLat( [-99.104534,19.629206])
.addTo(map);

     
    function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }
     
    marker.on('dragend', onDragEnd);