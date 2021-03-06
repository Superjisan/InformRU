function initMap() {
    var mapDiv = document.getElementById('map');
    var googleMap = new google.maps.Map(mapDiv, {
        center: {lat: 44.540, lng: -78.546},
        zoom: 8
    });
    window.googleMap = googleMap;
}

function renderMap(address, googleMap) {
    var googleMap = googleMap || window.googleMap;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address }, function(results, status){
            if(status === 'OK'){
                const location = results[0].geometry.location;
                renderMapWithLocation(location);
            }else{
                alert('Geocode was not successful for the following reason: ' + status);
            }
    });
}

function renderMapWithLocation(location) {
    googleMap.setCenter(location);
    googleMap.setZoom(15);
    if (window.marker) {
        window.marker.setMap(null);
    }
    window.marker = new google.maps.Marker({
      map: googleMap,
      position: location
    });
}