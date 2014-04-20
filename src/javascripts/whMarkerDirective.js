(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMarker', ['$timeout', 'gmap',
        function ($timeout, gmap) {
            function link(scope, element, attrs, mapController) {
                scope.marker = mapController.addMarker(scope.marker);

                scope.$on('$destroy', function() {
                    scope.marker.setMap(null);
                });
            }
            return {
                scope: {
                    marker: "=marker",
                },
                require: '^whMap',
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();