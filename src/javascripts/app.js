
(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    angular.module('woodhouse').controller('LunchApp', ['$scope', function($scope) {
        return true;
    }]);

    angular.module('woodhouse').factory('gmap', function () {
        return google.maps;
    });

    angular.module('woodhouse').directive(
        'ngMap', ['$q', 'gmap', 'geolocation',
        function ($q, gmap, geolocation) {
            function link(scope, element) {
                var bounds = new google.maps.LatLngBounds();
                geolocation.getCurrentLatLng().then(function (position) {
                    scope.location = {
                        name: 'Current Location',
                        lat: position.lat,
                        lng: position.lng,
                        icon: 'currentUser'
                    };
                    bounds.extend(new gmap.LatLng(scope.location.lat, scope.location.lng));
                    scope.map = new gmap.Map(element[0], {center: bounds.getCenter(), zoom: 12});
                    scope.marker = new gmap.Marker({position: position, map: scope.map});
                });
            }
            return {
                link: link,
                restrict: 'AE'
            };
        }]
    );
}());