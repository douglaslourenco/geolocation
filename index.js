export var latitude;
export var longitude;

function getPosition () {
  navigator.geolocation.watchPosition(function (position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
}

getPosition();
