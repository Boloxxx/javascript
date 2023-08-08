// Initialize and add the map
let map;

async function initMap() {
  // The location of SIMPAPEL
  const position = { 
    lat: 18.482, 
    lng: -69.945 
};
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Santo domingo
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at SIMPAPEL
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "SIMPAPEL",
  });
}

initMap();