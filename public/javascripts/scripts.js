$(function(){
    var service,
        infowindow,
        bounds,
        coords =  [
            {
                'name': 'Spring Vallery',
                'lat': 32.938748,
                'long': -96.799017
            },
            {
                'name': '635 & Toll Way',
                'lat': 32.926193,
                'long': -96.822243
            },
            {
                'name': 'Micking Bord',
                'lat': 32.837806,
                'long': -96.774666
            },
            {
                'name': 'Holy Grail Pub',
                'lat': 32.78014,
                'long': -96.800451
            },
        ];
    function initialize() {
        $('section').hide();
        var bounds = new google.maps.LatLngBounds(), c, mapOptions, map;
        for(c in coords){
            bounds.extend(new google.maps.LatLng(coords[c]['lat'], coords[c]['long']));
            center = bounds.getCenter();
        }
        mapOptions = {
            zoom: 10,
            center: center
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        coords.push({'name': 'center', 'lat': center['ob'], 'long': center['pb'] });

        for(var c in coords){
            new google.maps.Marker({
                position: new google.maps.LatLng(coords[c]['lat'], coords[c]['long']),
                map: map
            });
        }
        //var request = {
        //    location: add,
        //    radius: '500',
        //    types: ['store']
        //};

        //service = new google.maps.places.PlacesService(map);
        //service.nearbySearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});
