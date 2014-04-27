(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    var io = window.io.connect(),
        room = 'test';

    // Emit ready event with room name.
    io.emit('ready', room);

    // Listen for the announce event.
    io.on('announce', function(data) {
        console.log(data.message+ new Date().toString());
    });

    woodhouse.controller('LunchApp', ['$scope', 'geolocation', 'gmap', '$timeout', function($scope, geolocation, gmap, $timeout) {
        $scope.map = {
            center: {
                lat: 0,
                lng: 0
            },
            markers: [
                { 'name': '635 & Toll Way', 'lat': 32.926193, 'lng': -96.822243, icon: 'friend' },
                { 'name': 'Micking Bird', 'lat': 32.837806, 'lng': -96.774666, icon: 'friend' },
                { 'name': 'Holy Grail Pub', 'lat': 32.78014, 'lng': -96.800451, icon: 'friend' }
            ],
            placesRadius: null
        };

        $scope.events = {
            'bounds_changed': _.bind(function (map) {
                var center = map.getCenter();
                var self = this;
                gmap.nearbySearch(map, {
                    location: center,
                    radius: '2000',
                    types: ['restaurant', 'cafe']
                }).then(function(results) {
                    self.map.places = results;
                    self.placesRadius = gmap.paintRadius(self.placesRadius, map, center);
                });
            }, $scope)
        };

        geolocation.getCurrentLatLng().then(function(currentLocation) {
            currentLocation.icon = 'currentUser';
            $scope.map.markers.push(currentLocation);
        });
    }]);


}());
