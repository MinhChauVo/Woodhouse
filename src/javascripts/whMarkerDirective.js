(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMarker', ['$timeout', 'gmap',
        function ($timeout, gmap) {
            function link(scope, element, attrs, mapController) {
                // So... this timeout lets us wait until the map directive's
                // link function method finishes. Feels like there should be a better way to do this.
                $timeout(function(){
                    angular.forEach(scope.markers, function(marker){
                        mapController.addMarker(marker);
                    });
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