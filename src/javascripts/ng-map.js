angular.module('woodhouse', [])
	.controller('LunchApp', function($scope) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var p = WH.maps.getLatLng(position);
            $scope.location = {
                name: 'Current Location',
                lat: 0,
                lng: 0,
                icon: 'currentUser'
            };
        });
	})
    .directive('ngMap', function() {
        return {
            restrict: 'AE',
            template: '<div id="map-canvas"></div>'
        };
    });