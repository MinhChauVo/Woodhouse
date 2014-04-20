(function(){
    "use strict";
	angular.module('woodhouse').service('gmap', ['$q', function ($q) {
        this.icons = {
            currentUser: 'http://www.googlemapsmarkers.com/v1/7F00FF/',
            friend: 'http://www.googlemapsmarkers.com/v1/3399FF/',
            center: 'http://www.googlemapsmarkers.com/v1/009900/'
        };

        this.initMap = function (ele, options) {
            var settings = angular.extend({
                zoom: 12
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

            if (location.icon && this.icons[location.icon]) {
                obj.icon = this.icons[location.icon];
            }
            return new google.maps.Marker(obj);
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
        
    }]);
}());