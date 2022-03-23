const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic3dpa3JpdGIiLCJhIjoiY2t3bjl3MGR4MGtlcDJ2cWpnOTA4N3F4ZCJ9.y9DDkQuF9NTanqrTNnWGIA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directonControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directonControls, "top-left");
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation(position) {
  setupMap([-2.24, 53.48]);
}
