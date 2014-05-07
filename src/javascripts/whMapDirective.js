(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMap', ['gmap', '$timeout',
        function (gmap, $timeout) {
            var controller = ['$scope', function ($scope) {
                this.getMap = function(){
                    return $scope.gmap;
                };
                this.addMarker = function (marker) {
                    return gmap.addMarker($scope.gmap, marker);
                };
                this.removeMarker = function (marker) {
                    return gmap.removeMarker(marker);
                };
                this.initMap = function (element, attrs) {
                    var center = $scope.center,
                        mapEle = element.prepend('<div/>')[0].childNodes[0];
                    $scope.gmap = gmap.initMap(mapEle, center, attrs);
                };

                this.getEvent = function (eventName, eventFn) {
                    return function () {
                        return eventFn.apply($scope, [$scope.gmap, eventName, arguments]);
                    };
                };

            }];

            function link(scope, element, attrs, controller) {
                controller.initMap(element, attrs);
                scope.$watch('center', function (newcenter, oldcenter) {
                    if (newcenter != oldcenter) {
                        gmap.updateCenter(scope.gmap, newcenter);
                    }
                }, true);

                if (scope.events) {
                    _.each(scope.events, function(eventFn, eventName) {
                        gmap.addListener(scope.gmap, eventName, controller.getEvent(eventName, eventFn));
                    });
                }
            }

            return {
                scope: {
                    center: "=center",
                    markers: "=markers",
                    events: "=events"
                },
                controller: controller,
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();