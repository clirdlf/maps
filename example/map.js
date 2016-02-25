var pattern = 'http://a.tiles.mapbox.com/v4/wsg4w.6xbtm1m3/14/4823/6160.vector.pbf?access_token=pk.eyJ1Ijoid3NnNHciLCJhIjoiTVd4cXdScyJ9.ypK9cLCVFReavCn9b_hhWQ';
var token = 'pk.eyJ1Ijoid3NnNHciLCJhIjoiTVd4cXdScyJ9.ypK9cLCVFReavCn9b_hhWQ';
L.mapbox.accessToken = token;
var map = L.mapbox.map('map').setView([38.8922,-77.0348], 14);

var baseballIcon = L.icon({
  iconUrl: 'baseball-marker.png',
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

L.control.layers({
  'Mapbox Streets': L.mapbox.tileLayer('mapbox.streets').addTo(map),
  'Mapbox Light': L.mapbox.tileLayer('mapbox.light')
});

var clusterGroup = new L.MarkerClusterGroup();

// see https://github.com/coryasilva/Leaflet.ExtraMarkers#icons
var clirMarker = L.ExtraMarkers.icon({
  icon: 'fa-home',
  markerColor: 'red',
  shape: 'square',
  prefix: 'fa'
});

var dlfMarker = L.ExtraMarkers.icon({
  icon: 'fa-gear',
  markerColor: 'blue',
  shape: 'circle',
  prefix: 'fa'
});

var escienceMarker = L.ExtraMarkers.icon({
  icon: 'fa-star-o',
  markerColor: 'green',
  shape: 'star',
  prefix: 'fa'
});

var fryeMarker = L.ExtraMarkers.icon({
  icon: 'fa-university',
  markerColor: 'blue-dark',
  shape: 'penta',
  prefix: 'fa'
});

var hcgranteesMarker = L.ExtraMarkers.icon({
  icon: 'fa-plus-square',
  markerColor: 'orange',
  shape: 'penta',
  prefix: 'fa'
});

var hcpartnersMarker = L.ExtraMarkers.icon({
  icon: 'fa-plus-square',
  markerColor: 'orange-dark',
  shape: 'penta',
  prefix: 'fa'
});

var mellonMarker = L.ExtraMarkers.icon({
  icon: 'fa-plus-square',
  markerColor: 'purple',
  shape: 'start',
  prefix: 'fa'
});

function addPopup(feature, layer){
  layer.bindPopup('<h1>' + feature.properties.organization + '</h1><p>' + feature.properties.City + '</p>');
}

var markers = L.markerClusterGroup();

var clirLayer = L.geoJson(clir, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng){
    return L.marker(latlng, { icon: clirMarker });
  }
}).addTo(map);

var dlfLayer = L.geoJson(dlf, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, { icon: dlfMarker });
  }
}).addTo(map);

// var escienceLayer = L.geoJson(escience, {
//   onEachFeature: addPopup,
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng, { icon: escienceMarker });
//   }
// }).addTo(map);

// var fryeLayer = L.geoJson(frye, {
//   onEachFeature: addPopup,
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng, { icon: fryeMarker });
//   }
// }).addTo(map);

// var hcgranteesLayer = L.geoJson(hcgrantees, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng, { icon: hcgranteesMarker });
//   }
// }).addTo(map);

// var hcpartnersLayer = L.geoJson(hcpartners, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng, { icon: hcpartnersMarker });
//   }
// }).addTo(map);

// var mellonLayer = L.geoJson(mellon, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng, { icon: mellonMarker });
//   }
// }).addTo(map);

markers.addLayer(clirLayer).addTo(map);
markers.addLayer(dlfLayer).addTo(map);
// markers.addLayer(escienceLayer).addTo(map);
// markers.addLayer(fryeLayer).addTo(map);
// markers.addLayer(hcgranteesLayer).addTo(map);
// markers.addLayer(hcpartnersLayer).addTo(map);
// markers.addLayer(mellonLayer).addTo(map);

L.control.fullscreen().addTo(map);
var hash = L.hash(map);
