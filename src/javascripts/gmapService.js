(function(){
    "use strict";
	angular.module('woodhouse').service('gmap', function () {
        this.initMap = function (ele, options) {
            var settings = angular.extend({
                zoom: 12
            }, options);

            return new google.maps.Map(ele, settings);
        };

        this.getLatLng = function (lat, lng) {
            return new google.maps.LatLng(lat, lng);
        };

        this.updateCenter = function (map, center) {
            map.panTo({
                'lat': center[0],
                'lng': center[1]
            });
        };
    });
}());