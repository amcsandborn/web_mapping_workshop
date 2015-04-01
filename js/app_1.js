///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'amcsandborn.1176ef1e'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiYW1jc2FuZGJvcm4iLCJhIjoiT3ZKMm1BSSJ9.vR0j91Ube8dJ08GoZ1xJ-A'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);


var dataFileToAdd = 'data/avery_test.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map);

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#ec008c',
    'fillColor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});
