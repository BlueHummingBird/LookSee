var showLocation = true;

document.getElementById("location").addEventListener("click", function() {
  if (showLocation){
    
    // show location
    var lat, lng = null;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        
        document.getElementById("latlng").innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
      });

    }


    document.getElementById("location").innerHTML = "hide location";
    // toggle boolean
    showLocation = false;

  } else {
    // hide location
    document.getElementById("latlng").innerHTML = "";
    document.getElementById("location").innerHTML = "show location";
    // toggle boolean
    showLocation = true;
  }
});