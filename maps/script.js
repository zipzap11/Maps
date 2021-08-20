mapboxgl.accessToken = "pk.eyJ1IjoiemlwemFwMTEiLCJhIjoiY2tubGU0aXZ0MGg0ZTJvcnl4d3pjZXhyNCJ9.Q58p90R-X8GTPsdnPq5nVg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([0, 0]);
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 20,
  });
  mapboxgl.addClaimedBoundaries(map, "IN");
  map.addControl(new mapboxgl.NavigationControl());

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
