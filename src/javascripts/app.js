
(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    woodhouse.controller('LunchApp', ['$scope', 'geolocation', function($scope, geolocation) {
        $scope.map = {
            center: {
                lat: 0,
                lng: 0
            },
            markers: []
        };

        window.markers = $scope.map.markers;

        geolocation.getCurrentLatLng().then(function(latLong) {
            $scope.map.center = latLong;
            $scope.map.markers.push(latLong);
            window.setTimeout(function() {
                $scope.$apply(function() {
                    $scope.map.markers.push({
                        lat: 33.04,
                        lng: -96.80
                    });
                    $scope.map.markers = $scope.map.markers.slice(1, 2);
                });
            }, 1000);
        });
    }]);
}());