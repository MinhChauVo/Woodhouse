(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', [])
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }]);

    woodhouse.controller('LunchApp', ['$scope', 'hashids', 'socket', 'geolocation', 'gmap', '$location', function($scope, hashids, socket, geolocation, gmap, $location) {
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
        socket.on('location_added').then(function (data) {
            data.icon = 'friend';
            $scope.map.markers.push(data);
        });

        
        socket.on('all_existing_users').then(function (data) {
            angular.forEach(data, function (pos) {
                $scope.map.markers.push(pos);
            });
        });

        geolocation.getCurrentLatLng().then(function (currentLocation) {
            var roomName = $location.path().replace('/', '');
            if (roomName === '') {
                roomName = hashids.hash(currentLocation);
                $location.path(roomName);
            }
            socket.emit('ready', {'room': roomName, 'location': currentLocation});
            socket.emit('location_added', currentLocation);
            currentLocation.icon = 'currentUser';
            $scope.map.markers.push(currentLocation);
        });
    }]);


}());
