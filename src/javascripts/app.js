
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
                { 'name': '635 & Toll Way', 'lat': 32.926193, 'lng': -96.822243 },
                { 'name': 'Micking Bird', 'lat': 32.837806, 'lng': -96.774666 },
                { 'name': 'Holy Grail Pub', 'lat': 32.78014, 'lng': -96.800451 }
            ],
            places: []
        };

        window.markers = $scope.map.markers;
        window.apply = $scope.$apply;
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.map.markers.push({'lat': 32.926193, 'lng': -96});
            });
        }, 5000);

        geolocation.getCurrentLatLng().then(function(latLong) {
            $scope.map.center = latLong;
            $scope.map.markers.push(latLong);
        });
    }]);
}());