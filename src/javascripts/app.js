(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    // var io = window.io.connect(),
    //     room = 'test';

    // // Emit ready event with room name.
    // io.emit('ready', room);

    woodhouse.controller('LunchApp', ['$scope', 'socket', 'geolocation', 'gmap', '$timeout', function($scope, socket, geolocation, gmap, $timeout) {
        var updatePlaces = _.bind(function (map) {
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
        }, $scope);

        socket.emit('ready', 'test');

        $scope.map = {
            center: {
                lat: 0,
                lng: 0
            },
            markers: [],
            placesRadius: null
        };

        $scope.events = {
            'markers_changed': updatePlaces
        };

        // Listen for the announce event.
        socket.on('announce').then(function (data) {
            console.log(data);
        });

        geolocation.getCurrentLatLng().then(function (currentLocation) {
            currentLocation.icon = 'currentUser';
                $scope.map.markers.push(currentLocation);
        });
    }]);


}());
