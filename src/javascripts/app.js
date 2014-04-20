
(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    woodhouse.controller('LunchApp', ['$scope', 'geolocation', function($scope, geolocation) {
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
            places: []
        };

        window.markers = $scope.map.markers;

        geolocation.getCurrentLatLng().then(function(currentLocation) {
            $scope.map.center = currentLocation;
            currentLocation.icon = 'currentUser';
            $scope.map.markers.push(currentLocation);
        });
    }]);
}());