WH.maps = {};
WH.maps.service = '';
WH.maps.infowindow = '';
WH.maps.bounds = '';
WH.maps.coords =  [ { 'name': 'Spring Vallery', 'lat': 32.938748, 'lng': -96.799017 }, { 'name': '635 & Toll Way', 'lat': 32.926193, 'lng': -96.822243 }, { 'name': 'Micking Bord', 'lat': 32.837806, 'lng': -96.774666 }, { 'name': 'Holy Grail Pub', 'lat': 32.78014, 'lng': -96.800451 } ];
WH.maps.center = '';
WH.maps.map = '';
WH.maps.radius = 5000;
WH.maps.mapOptions = { zoom: 12 };

WH.maps.initialize = function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var p = WH.maps.returnLatLng(position);
            WH.maps.setup({
                name: 'Current Location',
                lat: p['lat'],
                lng: p['lng'],
                marker: 'http://www.googlemapsmarkers.com/v1/7F00FF'
            });
        });
    }else{
        WH.maps.setup();
    }
};

WH.maps.setup = function(loc){
    var bounds = new google.maps.LatLngBounds(),
        c,
        place,
        coords = WH.maps.coords;

    coords.push(loc);
    for(c in coords){
        bounds.extend(new google.maps.LatLng(coords[c].lat, coords[c].lng));
    }

    WH.maps.center = bounds.getCenter();
    WH.maps.mapOptions.center = WH.maps.center;
    WH.maps.map = new google.maps.Map(document.getElementById('map-canvas'), WH.maps.mapOptions);
    WH.maps.paintRadius();

    coords.push({
        'name': 'center',
        'geometry': { 'location': WH.maps.center },
        'marker': new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/")
    });

    WH.maps.plotMarkers(coords, {marker: 'http://www.googlemapsmarkers.com/v1/3399FF/'});
    place = WH.maps.returnLatLng(coords[coords.length - 1]);
    WH.maps.requestServices({
        location: new google.maps.LatLng(place.lat, place.lng),
        radius: WH.maps.radius,
        types: ['restaurant', 'cafe' ]
    });

};

WH.maps.requestServices = function(request){
    console.log(request);
    var service = new google.maps.places.PlacesService(WH.maps.map);
    service.nearbySearch(request, function callback(results, status) {
        console.log(results, status);
        WH.maps.plotMarkers(results);
    });
};

WH.maps.returnLatLng = function(c){
    var place;
    console.log(c);
    if(c.geometry){
        if(c.geometry.location){
            place = c.geometry.location
            return {
                lat: place.lat(),
                lng: place.lng()
            };
        }
        return {
            lat: c.geometry.lat || coords.geometry.pb,
            lng: c.geometry.lng || coords.geometry.qb
        };
    }else if(c.coords){
        return {
            lat: c.coords.lat,
            lng: c.coords.lng
        }
    }else{
        return {
            lat: c.lat,
            lng: c.lng
        }
    }
}

WH.maps.plotMarkers = function(coords, details){
    var obj, c, place, marker;
    for(c in coords){
        place = WH.maps.returnLatLng(coords[c]);
        //place = returnLatLng(coords[c].geometry.location);
        //place = coords[c];
        details.marker = coords[c].marker || details.marker;
        obj = {
            position: new google.maps.LatLng(place.lat, place.lng),
            map: WH.maps.map,
            icon: details.marker
        };
        marker = new google.maps.Marker(obj);
        if(coords[c].name === 'center'){
            WH.maps.bounceMarker(marker);
        }
    }
};

WH.maps.bounceMarker = function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){
        marker.setAnimation(null);
    }, 1760);
};

WH.maps.paintRadius = function(){
    var color = "#006600",
        circle = {
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            map: WH.maps.map,
            center: WH.maps.center,
            radius: WH.maps.radius
        };
    new google.maps.Circle(circle);
};

