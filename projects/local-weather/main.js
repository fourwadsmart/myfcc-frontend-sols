let weatherRequest = new XMLHttpRequest(),
// I use this heroku mirror as a dirty hack to solve the CORS issue
url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0237cf63d322be7070ccf5c67e2af7d7/",
// geolocation and XHR response variables
lon, lat, resp,
// local weather content variables
tmz, sum, tmp, mea, cvt, swap
// geolocation
geoloc = navigator.geolocation;

geoloc.getCurrentPosition(function(pos) {
  
  // get coordinates and concat it to the URL
  lat = pos.coords.latitude;
  lon = pos.coords.longitude;
  url += `${lat},${lon}?exclude=minutely,daily,alerts,flags`;
  // ?exclude=minutely,hourly,daily,alerts,flags
  // query weather data from Dark Sky
  weatherRequest.open('GET', url);
  weatherRequest.setRequestHeader('Content-Type', 'application/json');
  weatherRequest.onload = function() {
    if(weatherRequest.status === 200){
      resp = JSON.parse(weatherRequest.responseText);
    }
    
    // elements where data will be appended
    tmz = document.getElementById("timezone");
    sum = document.getElementById("summary");
    tmp = document.getElementById("temperature");
    mea = document.getElementById("measure");
    swap = document.getElementById("swap");
    
    // console.log(resp);
    
    // append data to content to elements
    tmz.appendChild(document.createTextNode(resp.timezone));
    sum.appendChild(document.createTextNode(resp.currently.summary));
    mea.appendChild(document.createTextNode("°F"));
 tmp.appendChild(document.createTextNode(Math.round(resp.currently.temperature)));
    swap.appendChild(document.createTextNode(resp.hourly.summary));
    // change canvas id to the icon value
    document.getElementsByTagName("canvas")[0].setAttribute("id", resp.currently.icon);
    
      // Skycons canvas icons
      var icons = new Skycons({"color":"black"});
      icons.set(resp.currently.icon, resp.currently.icon);
      icons.play();
    
  } // end of weatherRequest.onload function
  
  weatherRequest.send();
  
  // toggle the temperature from farenheit to celsius
  (function() {
    cvt = document.getElementById("convert");
    cvt.onclick = function() {
      var fah = resp.currently.temperature;
      var cel = Math.round((fah - 32) / 1.8);
      
      tmp.innerHTML == Math.round(fah) ? tmp.innerHTML = cel: tmp.innerHTML = Math.round(fah);
      mea.innerHTML == "°F" ? mea.innerHTML = "°C" : mea.innerHTML = "°F";
    }
  }()); // IIFE: Immediately-invoked function expression - anonymous function that self-executes immediately after it is created!
  
}); // end of geolocation success function