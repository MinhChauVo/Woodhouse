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
                        if (attrs.fitMarkers) {
                            gmap.updateBounds(mapController.getMap(), markers);
                        }
                        if (attrs.watchMarkers) {
                            google.maps.event.trigger(mapController.getMap(), 'markers_changed');
                        }
                    }
                });
                if (scope.events) {
                    $timeout(function() {
                        _.each(scope.events, function(eventFn, eventName) {
                            gmap.addListener(mapController.getMap(), eventName, mapController.getEvent(eventName, eventFn));
                        });
                    });
                }
            }
            return {
                scope: {
                    markers: "=markers",
                    events: "=events"
                },
                require: '^whMap',
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();