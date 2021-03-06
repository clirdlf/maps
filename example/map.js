var pattern = 'http://a.tiles.mapbox.com/v4/wsg4w.6xbtm1m3/14/4823/6160.vector.pbf?access_token=pk.eyJ1Ijoid3NnNHciLCJhIjoiTVd4cXdScyJ9.ypK9cLCVFReavCn9b_hhWQ';
var token = 'pk.eyJ1Ijoid3NnNHciLCJhIjoiTVd4cXdScyJ9.ypK9cLCVFReavCn9b_hhWQ';
L.mapbox.accessToken = token;
var map = L.mapbox.map('map').setView([30.3, -28.1], 2);
// var map = L.mapbox.map('map').setView([38.8922,-77.0348], 14);

var oms = new OverlappingMarkerSpiderfier(map); // spidering
oms.addListener('click', function(marker) {
  console.log(marker);
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  map.openPopup(popup);
});

L.control.layers({
  'Mapbox Streets': L.mapbox.tileLayer('mapbox.streets').addTo(map),
  'Mapbox Light': L.mapbox.tileLayer('mapbox.light')
}).addTo(map);

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

function addPopup(feature, layer) {
  // console.log(feature.properties.program);
  layer.bindPopup('<h1>' + feature.properties.organization + '</h1><p>' + feature.properties.City + ', ' + feature.properties.StateTerri + '</p>');
}

var markers = L.markerClusterGroup();

var clirLayer = L.geoJson(clir, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: clirMarker
    });
  }
});

var dlfLayer = L.geoJson(dlf, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: dlfMarker
    });
  }
});

var escienceLayer = L.geoJson(escience, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: escienceMarker
    });
  }
});

var fryeLayer = L.geoJson(frye, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: fryeMarker
    });
  }
});

var hcgranteesLayer = L.geoJson(hcgrantees, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: hcgranteesMarker
    });
  }
});

var hcpartnersLayer = L.geoJson(hcpartners, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: hcpartnersMarker
    });
  }
});

var mellonLayer = L.geoJson(mellon, {
  onEachFeature: addPopup,
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: mellonMarker
    });
  }
});

markers.addLayer(clirLayer).addTo(map);
markers.addLayer(dlfLayer).addTo(map);
markers.addLayer(escienceLayer).addTo(map);
markers.addLayer(fryeLayer).addTo(map);
markers.addLayer(hcgranteesLayer).addTo(map);
markers.addLayer(hcpartnersLayer).addTo(map);
markers.addLayer(mellonLayer).addTo(map);

L.control.fullscreen().addTo(map);
var hash = L.hash(map);

// map.legendControl.addLegend(document.getElementById('legend').innerHTML);
// var legend = L.control({
//   position: 'bottomright'
// });
//
// legend.onAdd = function(map) {
//
//   var div = L.DomUtil.create('div', 'info legend'),
//     labels = [];
//
//     labels.push('<i style="color: #fff; background-color: #871723;" class="clir fa fa-home"></i> CLIR');
//     labels.push('<i style="color: #fff; background-color: #0D75B6;" class="fa fa-gear"></i> DLF');
//     labels.push('<i style="color: #fff; background-color: #008F44;" class="fa fa-star-o"></i> eScience');
//     labels.push('<i style="color: #fff; background-color: #266372;" class="fa fa-university"></i> LCI');
//     labels.push('<i style="color: #fff; background-color: #F18E39;" class="fa fa-plus-square"></i> Hidden Collections');
//     labels.push('<i style="color: #fff; background-color: #91248B;" class="fa fa-plus-square"></i> Mellon Fellows');
//     labels.push('<i style="color: #fff; background-color: #91248B;" class="fa fa-university"></i> Rovelstad Fellows');
//
//
//   div.innerHTML = labels.join('<br>');
//   return div;
// };
// legend.addTo(map);
