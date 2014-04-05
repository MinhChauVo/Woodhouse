
(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    woodhouse.controller('LunchApp', ['$scope', 'geolocation', function($scope, geolocation) {
        $scope.map = {
            center: {
                lat: 33.05,
                lng: -96.80
            }
        };

        geolocation.getCurrentLatLng().then(function(latLong) {
            $scope.map.center = latLong;
        });
    }]);
}());