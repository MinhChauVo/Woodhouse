WH = WH || {};
WH.maps = {};
WH.maps.service = '';
WH.maps.infowindow = '';
WH.maps.bounds = '';
WH.maps.friendCoords =  [ { 'name': 'Spring Vallery', 'lat': 32.938748, 'lng': -96.799017 }, { 'name': '635 & Toll Way', 'lat': 32.926193, 'lng': -96.822243 }, { 'name': 'Micking Bord', 'lat': 32.837806, 'lng': -96.774666 }, { 'name': 'Holy Grail Pub', 'lat': 32.78014, 'lng': -96.800451 } ];
WH.maps.center = '';
WH.maps.map = '';
WH.maps.places =  { count: 0, length: 0, list: [], html: '' };
WH.maps.mapOptions = { zoom: 12 };
WH.maps.locationType = {
    currentUser: 'http://www.googlemapsmarkers.com/v1/7F00FF/',
    friends: 'http://www.googlemapsmarkers.com/v1/3399FF/',
    center: 'http://www.googlemapsmarkers.com/v1/009900/'
};

WH.maps.initialize = function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var p = WH.maps.getLatLng(position);

            center = p.lat && p.lng ? {
                name: 'Current Location',
                lat: p.lat,
                lng: p.lng,
                icon: 'currentUser'
            } : WH.maps.getCurrentUserLocation();
            WH.maps.setup(center);
        });
    }else{
        //note to self if location fails or is denied ask to put address
        WH.maps.setup();
    }
};


WH.maps.getCurrentUserLocation = function(){
    console.log('GET CURRENT USER LOCATION');
    return {};
};

WH.maps.getLatLng = function(l, f){
    if(l.geometry){
        return {
            lat: l.geometry.location.lat(),
            lng: l.geometry.location.lng()
        };
    }else if(l.location){
        return {
            lat: l.location.lat(),
            lng: l.location.lng()
        };
    }else if(l.coords){
        return {
            lat: l.coords.latitude,
            lng: l.coords.longitude
        };
    }else if(typeof l.lat === 'function' && typeof l.lat === 'function'){
        return {
            lat: l.lat(),
            lng: l.lng()
        };
    }else{
        return l;
    }
};

WH.maps.setup = function(curLoc){
    var bounds = new google.maps.LatLngBounds(),
        c,
        place,
        coords = WH.maps.friendCoords,
        center;

    coords.push(curLoc);
    for(c in coords){
        coords[c].icon = coords[c].icon || 'friends';
        bounds.extend(new google.maps.LatLng(coords[c].lat, coords[c].lng));
    }

    WH.maps.center = bounds.getCenter();
    WH.maps.mapOptions.center = WH.maps.center;
    WH.maps.map = new google.maps.Map(document.getElementById('map-canvas'), WH.maps.mapOptions);
    WH.maps.paintRadius();

    console.log('wh', WH.maps.center);
    center = WH.maps.getLatLng(WH.maps.center);
    console.log('2', center);
    WH.maps.plotMarkers([{ lat: center.lat, lng: center.lng, icon: 'center' }]);

    WH.maps.plotMarkers(coords); // current user and friend coords
    WH.maps.requestServices({
        location: new google.maps.LatLng(center.lat, center.lng),
        radius: '2000',
        types: ['restaurant', 'cafe' ]
    });

};

WH.maps.requestServices = function(request){
    console.log(request);
    var service = new google.maps.places.PlacesService(WH.maps.map);
    service.nearbySearch(request, function callback(results, status) {

        WH.maps.places.list = results;
        WH.maps.places.length = results.length;
        WH.maps.plotMarkers(results);
    });
};

WH.maps.listPlaces = function(p){
    //note to self remove when angular appears
    var places = WH.maps.places,
        str = '';
        str += '<div class="places" id="p' + places.count + '">';
        str += '<img src="' + p.icon + '" />';
        str += '<ul>';
        str += '<li>' + p.name  + '</li>';
        str += '<li>' + p.vicinity  + '</li>';
        str += '</ul>';
        str += '</div>';
    places.html += str;
    places.count++;
    if(places.count == places.length - 1){
        $('.directions').append('<div id="places">' + places.html + '</div>');
    }
};

WH.maps.plotMarkers = function(coords){
    var obj, c, place, marker, idMarker;
    for(c in coords){
        place = WH.maps.getLatLng(coords[c]);
        obj = {
            position: new google.maps.LatLng(place.lat, place.lng),
            map: WH.maps.map,
        };

        if(coords[c].icon){
            obj.icon = WH.maps.locationType[coords[c].icon];
        }

        marker = new google.maps.Marker(obj);
        if(coords[c].id){
            WH.maps.listPlaces(coords[c]);
        }
    }
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
            radius: 2000
        };
    new google.maps.Circle(circle);
};

