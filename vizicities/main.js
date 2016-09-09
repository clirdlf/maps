// Manhattan
// var coords = [40.739940, -73.988801];
// Washington DC
var coords = [38.903748, -77.0391];

var world = VIZI.world('world', {
  skybox: true,
  postProcessing: true
}).setView(coords);

// Set position of sun in sky
world._environment._skybox.setInclination(0.3);

// Add controls
VIZI.Controls.orbit().addTo(world);

// CartoDB basemap
VIZI.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(world);

// Buildings and roads from Mapzen (polygons and linestrings)
var topoJSONTileLayer = VIZI.topoJSONTileLayer('https://vector.mapzen.com/osm/buildings,roads/{z}/{x}/{y}.topojson?api_key=vector-tiles-LY7grxf', {
  interactive: false,
  style: function(feature) {
    var height;

    if (feature.properties.height) {
      height = feature.properties.height;
    } else {
      height = 10 + Math.random() * 10;
    }

    return {
      height: height,
      lineColor: '#f7c616',
      lineWidth: 1,
      lineTransparent: true,
      lineOpacity: 0.2,
      lineBlending: THREE.AdditiveBlending,
      lineRenderOrder: 2
    };
  },
  filter: function(feature) {
    // Don't show points
    return feature.geometry.type !== 'Point';
  },
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
}).addTo(world);

VIZI.geoJSONLayer('./office.geojson', {
  interactive: true,
  style: function(feature) {
    var height = 300;

    return {
      height: height,
      color: '#800080',
      //linewidth: 3,
      //fillColor: '#000000',
      //lineTransparent: false,
      //lineOpacity: 0.8,
      //lineBlending: THREE.AdditiveBlending,
      //lineRenderOrder: 1
    };

    console.log('office', feature);
  },

  onEachFeature: function(feature, layer) {
    layer.on('click', function(layer, point2d, point3d, intersects) {
      console.log('CLIR+DLF Offices');
      console.log(layer, point2d, point3d, intersects);
    });
  },

}).addTo(world);

// // Washington DC Lines
VIZI.geoJSONLayer('./metro.geojson', {
  output: true,
  interactive: true,
  style: function(feature) {
    // var colour = '#ffffff';
    var colour = '';
    try{
      colour = feature.properties.lines[0];
    } catch(e) {
        colour = feature.properties.stroke;
    }

    return {
      height: 100,
      lineColor: colour,
      lineHeight: 15,
      lineWidth: 3,
      lineTransparent: true,
      lineOpacity: 0.5,
      lineBlending: THREE.AdditiveBlending,
      lineRenderOrder: 2
    };
  },
  onEachFeature: function(feature, layer) {
    layer.on('click', function(layer, point2d, point3d, intersects) {
      console.log(layer, point2d, point3d, intersects);
    });
  },
  attribution: '&copy; Transport for Washington DC.'
}).addTo(world);
