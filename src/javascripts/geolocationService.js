(function(){
    "use strict";
    angular.module('woodhouse').service('geolocation', ['$q', function ($q) {
        function getCurrentPosition() {
            var deferred = $q.defer();
            navigator.geolocation.getCurrentPosition(function( position) {
                deferred.resolve(position);
            });
            return deferred.promise;
        }

        function getLatLng(l) {
            if (l.geometry) {
                return {
                    lat: l.geometry.location.lat(),
                    lng: l.geometry.location.lng()
                };
            }

            if (l.location) {
                return {
                    lat: l.location.lat(),
                    lng: l.location.lng()
                };
            }

            if (l.coords) {
                return {
                    lat: l.coords.latitude,
                    lng: l.coords.longitude
                };
            }

            if (typeof l.lat === 'function') {
                return {
                    lat: l.lat(),
                    lng: l.lng()
                };
            }
            return l;
        }

        function getCurrentLatLng() {
            return getCurrentPosition().then(getLatLng);
        }

        return {
            getCurrentPosition: getCurrentPosition,
            getCurrentLatLng: getCurrentLatLng
        };
    }]);
}());