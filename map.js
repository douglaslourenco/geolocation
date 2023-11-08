import { MAP_KEY } from './config.js';
import { latitude, longitude } from './getPosition.js';

if (latitude == undefined) {
    console.log("map: "+ latitude, longitude);
    setTimeout(GetMap, 1000)
}

function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
      credentials: MAP_KEY,
      center: new Microsoft.Maps.Location(latitude, longitude),
      zoom: 12
    });
  
    var center = map.getCenter();
  
    // Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {
      title: 'Esther',
      subTitle: 'Artista',
      //text: 'E',
      //color: 'black',
      icon: 'esther.png'
    });
  
    // Add the pushpin to the map
    map.entities.push(pin);
  
  };

  
  