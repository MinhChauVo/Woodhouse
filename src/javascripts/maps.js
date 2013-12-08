WH = WH || {};
WH.maps = {};
WH.maps.service = '';
WH.maps.infowindow = '';
WH.maps.bounds = '';
WH.maps.coords =  [ { 'name': 'Spring Vallery', 'lat': 32.938748, 'lng': -96.799017 }, { 'name': '635 & Toll Way', 'lat': 32.926193, 'lng': -96.822243 }, { 'name': 'Micking Bord', 'lat': 32.837806, 'lng': -96.774666 }, { 'name': 'Holy Grail Pub', 'lat': 32.78014, 'lng': -96.800451 } ];
WH.maps.center = '';
WH.maps.map = '';
WH.maps.places =  { count: 0, length: 0, list: [], html: '' };
WH.maps.mapOptions = { zoom: 12 };

WH.maps.initialize = function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var p = WH.maps.getLatLng(position, 'geo');
            WH.maps.setup({
                name: 'Current Location',
                lat: p.lat,
                lng: p.lng,
                marker: 'http://www.googlemapsmarkers.com/v1/7F00FF'
            });
        });
    }else{
        WH.maps.setup();
    }
};

WH.maps.getLatLng = function(l, f){
    // console.log(l, f);
    if(l.geometry){
        return {
            lat: l.geometry.location.lat(),
            lng: l.geometry.location.lng()
        };
    }else if(l.coords){
        return {
            lat: l.coords.latitude,
            lng: l.coords.longitude
        };
    }else if(l.pb && l.qb){
        console.log(l, 'blah');
        return {
            lat: l.pb,
            lng: l.qb
        };
    }else{
        return l;
    }
};

WH.maps.setup = function(loc){
    var bounds = new google.maps.LatLngBounds(),
        c,
        place,
        coords = WH.maps.coords,
        center;

    coords.push(loc);
    for(c in coords){
        bounds.extend(new google.maps.LatLng(coords[c].lat, coords[c].lng));
    }

    WH.maps.center = bounds.getCenter();
    WH.maps.mapOptions.center = WH.maps.center;
    WH.maps.map = new google.maps.Map(document.getElementById('map-canvas'), WH.maps.mapOptions);
    WH.maps.paintRadius();

    center = WH.maps.getLatLng(WH.maps.center, 'center');
    coords.push({
        name: 'center',
        lat: center.lat,
        lng: center.lng,
        'marker': new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/")
    });

    WH.maps.plotMarkers(coords, {marker: 'http://www.googlemapsmarkers.com/v1/3399FF/'});
    place = coords[coords.length - 1];
    WH.maps.requestServices({
        location: new google.maps.LatLng(place.lat, place.lng),
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

WH.maps.findIcon = function(m, d){
    if(m.marker && m.marker.url){
        return m.marker.url;
    }else if(m.marker){
        return m.marker;
    }else if(m){
        return m;
    }else if(d){
        return d;
    }else{
        return '';
    }
};

WH.maps.plotMarkers = function(coords, details){
    var obj, c, place, marker, idMarker;
    for(c in coords){
        idMarker = 'm';// + coords[c];

        console.log(coords[c]);
        place = WH.maps.getLatLng(coords[c], 'plot');
        obj = {
            position: new google.maps.LatLng(place.lat, place.lng),
            map: WH.maps.map,
            id: idMarker
        };
        marker = new google.maps.Marker(obj);
        if(coords[c].id){
        //    WH.maps.listPlaces(coords[c]);
      //      WH.maps.hoverMarker(marker, c);
        }
        if(coords[c].name === 'center'){
        //    WH.maps.bounceMarker(marker);
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

