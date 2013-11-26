$(function(){
    var service,
        infowindow,
        bounds,
        coords =  [ { 'name': 'Spring Vallery', 'ob': 32.938748, 'pb': -96.799017 }, { 'name': '635 & Toll Way', 'ob': 32.926193, 'pb': -96.822243 }, { 'name': 'Micking Bord', 'ob': 32.837806, 'pb': -96.774666 }, { 'name': 'Holy Grail Pub', 'ob': 32.78014, 'pb': -96.800451 } ],
        center,
        map,
        mapOptions = { zoom: 10 };


    function initialize() {
        $('section').hide();
        var bounds = new google.maps.LatLngBounds(), c, place;
        for(c in coords){
            bounds.extend(new google.maps.LatLng(coords[c]['ob'], coords[c]['pb']));
        }

        center = bounds.getCenter();
        mapOptions.center = center;
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        paintRadius();

        coords.push({
            'name': 'center',
            'geometry': { 'location': center },
            'marker': new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/")
        });

        plotMarkers(coords);
        place = coords[coords.length - 1]['geometry']['location'];
        requestServices({
            location: new google.maps.LatLng(place['ob'], place['pb']),
            radius: '2000',
            types: ['restaurant', 'cafe' ]
        });

    }

    function requestServices(request){
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function callback(results, status) {
            plotMarkers(results);
        });
    }

    function plotMarkers(coords){
        var obj, c, place, marker;
        for(c in coords){
            if(coords[c]['geometry']){
                place = coords[c]['geometry']['location'];
                obj = {
                    position: new google.maps.LatLng(place['ob'], place['pb']),
                    icon: coords[c]['marker'],
                    map: map
                };
            }else{
                place = coords[c];
                obj = {
                    position: new google.maps.LatLng(place['ob'], place['pb']),
                    map: map
                };
            }
            marker = new google.maps.Marker(obj);
            if(coords[c]['name'] === 'center'){
                bounceMarker(marker);
            }
        }
    }

    function bounceMarker(marker){
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){
            marker.setAnimation(null);
            console.log('stop');
        }, 1760);
    }

    function paintRadius(){
        var color = "#006600",
            circle = {
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: color,
                fillOpacity: 0.35,
                map: map,
                center: center,
                radius: 2000
            };
        new google.maps.Circle(circle);
    }


    google.maps.event.addDomListener(window, 'load', initialize);
});
