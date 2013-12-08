WH = WH || {};
WH.maps = {};
WH.maps.service = '';
WH.maps.infowindow = '';
WH.maps.bounds = '';
WH.maps.coords =  [ { 'name': 'Spring Vallery', 'ob': 32.938748, 'pb': -96.799017 }, { 'name': '635 & Toll Way', 'ob': 32.926193, 'pb': -96.822243 }, { 'name': 'Micking Bord', 'ob': 32.837806, 'pb': -96.774666 }, { 'name': 'Holy Grail Pub', 'ob': 32.78014, 'pb': -96.800451 } ];
WH.maps.center = '';
WH.maps.map = '';
WH.maps.places =  { count: 0, length: 0, list: [], html: '' };
WH.maps.mapOptions = { zoom: 12 };

WH.maps.initialize = function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var p = position.coords;
            WH.maps.setup({
                name: 'Current Location',
                ob: p['latitude'],
                pb: p['longitude'],
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
        bounds.extend(new google.maps.LatLng(coords[c].ob, coords[c].pb));
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
    place = coords[coords.length - 1].geometry.location;
    WH.maps.requestServices({
        location: new google.maps.LatLng(place.ob, place.pb),
        radius: '2000',
        types: ['restaurant', 'cafe' ]
    });

};

WH.maps.requestServices = function(request){
    var service = new google.maps.places.PlacesService(WH.maps.map);
    service.nearbySearch(request, function callback(results, status) {
        WH.maps.places.list = results;
        WH.maps.places.length = results.length;
        WH.maps.plotMarkers(results);
    });
};

WH.maps.listPlaces = function(p){
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

WH.maps.plotMarkers = function(coords, details){
    var obj, c, place, marker, idMarker;
    for(c in coords){
        idMarker = 'm' + coords[c];
        if(coords[c].geometry){
            place = coords[c].geometry.location;
            obj = {
                position: new google.maps.LatLng(place.ob, place.pb),
                icon: coords[c].marker,
                map: WH.maps.map,
                id: idMarker
            };
        }else{
            place = coords[c];
            details.marker = coords[c].marker || details.marker;
            obj = {
                position: new google.maps.LatLng(place.ob, place.pb),
                map: WH.maps.map,
                icon: details.marker,
                id: idMarker
            };
        }
        marker = new google.maps.Marker(obj);
        if(coords[c].id){
            WH.maps.listPlaces(coords[c]);
            WH.maps.hoverMarker(marker, c);
        }
        if(coords[c].name === 'center'){
            WH.maps.bounceMarker(marker);
        }
    }
};

WH.maps.hoverMarker = function(marker, c){
    google.maps.event.addListener(marker, 'mouseover', function() {
        $('#p' + c).css('background', '#F5F5F5').hover(function(){
            WH.maps.bounceMarker(marker);
        });
    });

    google.maps.event.addListener(marker, 'mouseout', function(o) {
         $('#p' + c).css('background', '#fff');
    });
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
            radius: 2000
        };
    new google.maps.Circle(circle);
};

;var WH = WH || {};

WH.initialize = function(){
    google.maps.event.addDomListener(window, 'load', WH.maps.initialize);
};
WH.initialize();





