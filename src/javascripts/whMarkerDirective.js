(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMarker', ['$timeout', 'gmap',
        function ($timeout, gmap) {
            function link(scope, element, attrs, mapController) {
                var gMarkers = [];
                scope.$watchCollection('markers', function (markers, oldMarkers) {
                    if ( markers != oldMarkers ) {
                        angular.forEach(gMarkers, function (marker) {
                            mapController.removeMarker(marker);
                        });

                        gMarkers = [];
                        angular.forEach(markers, function (marker) {
                            gMarkers.push(mapController.addMarker(marker));
                        });
                    }
                });
            }
            return {
                scope: {
                    markers: "=markers",
                },
                require: '^whMap',
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();