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

     // excel 
     //https://script.google.com/macros/s/AKfycby345JEO58rIzImY5zHzSPD1er1twim1obim-ElNopYToN2qM0/exec
     //https://docs.google.com/spreadsheets/d/e/2PACX-1vQSWi1e_o7PBqh8-QIAtl4bPOq0Q_Yw9ZkZgKZqTVJ4ehN08nIkC4z1GuwaEt4FOIDjfyeRBvxN5JJ9/pubhtml
function onDragEnd() {
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        console.log(lngLat);
        }
         
        marker.on('dragend', onDragEnd);

        document.getElementById("#entry_5").value=lngLat.lat
        document.getElementById("#entry_6").value=lngLat.lng
    }