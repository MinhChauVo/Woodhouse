(function(){
    "use strict";
	angular.module('woodhouse').service('gmap', ['$q', function ($q) {
        var icons = {
            currentUser: 'http://www.googlemapsmarkers.com/v1/7F00FF/',
            friend: 'http://www.googlemapsmarkers.com/v1/3399FF/',
            center: 'http://www.googlemapsmarkers.com/v1/009900/'
        };
        var skipMapOptions = [
            'markers',
            'center',
            'events',
            'places'
        ];

        this.initMap = function (ele, center, attrs) {
            var options = {
                'center': {
                    'lat': center.lat,
                    'lng': center.lng
                }
            };
            _.each(attrs, function(val, key){
                if(!_.contains(skipMapOptions, key)) {
                    options[key] = val;
                }
            });
            var settings = angular.extend({
                zoom: 12,
                draggable: false,
                panControl: false
            }, options);

            return new google.maps.Map(ele, settings);
        };

        this.getLatLng = function (lat, lng) {
            return new google.maps.LatLng(lat, lng);
        };

        this.updateCenter = function (map, center) {
            map.panTo({
                'lat': center.lat,
                'lng': center.lng
            });
        };

        this.addMarker = function (map, location) {
            if (!location) { return; }
            var position = location.geometry ? location.geometry.location : this.getLatLng(location.lat, location.lng);
            var obj = {
                    position: position,
                    map: map
                };

            if (location.icon && icons[location.icon]) {
                obj.icon = icons[location.icon];
            }
            return new google.maps.Marker(obj);
        };

        this.removeMarker = function (marker) {
            return marker.setMap(null);
        };

        this.updateBounds = function (map, positions) {
            var bounds = new google.maps.LatLngBounds();
            positions.forEach(function(position) {
                var latLng = this.getLatLng(position.lat, position.lng);
                bounds.extend(latLng);
            }, this);
            map.fitBounds(bounds);
            if (map.getZoom() > 14) {
                map.setZoom(14);
            }

            return bounds;
        };

        this.nearbySearch = function (map, request) {
            var service = new google.maps.places.PlacesService(map),
                deferred = $q.defer();
            service.nearbySearch(request, function callback(results) {
                deferred.resolve(results);
            });

            return deferred.promise;
        };

        this.paintRadius = function (circle, map, center) {
            var color = "#006600",
                circleSettings = {
                    strokeColor: color,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: color,
                    fillOpacity: 0.35,
                    map: map,
                    center: center,
                    radius: 2000
                };

            if (circle) {
                circle.setCenter(center);
                return circle;
            }
            return new google.maps.Circle(circleSettings);
        };

        this.updateRadius = function (circle, center) {
            circle.setCenter(center);
        };

        this.addListener = function (map, listener, fn) {
            google.maps.event.addListener(map, listener, fn);
        };
        
    }]);
}());