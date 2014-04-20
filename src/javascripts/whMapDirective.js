(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMap', ['gmap',
        function (gmap) {
            var controller = ['$scope', '$q', function ($scope, $q) {
                this.getMap = function(){
                    return $scope.gmap;
                };
                this.addMarker = function(marker) {
                    return gmap.addMarker($scope.gmap, marker);
                };
                this.initMap = function (element) {
                    var center = $scope.center,
                        mapEle = element.prepend('<div/>')[0].childNodes[0];
                    $scope.gmap = gmap.initMap(mapEle, {
                        'center': {
                            'lat': center.lat,
                            'lng': center.lng
                        }
                    });
                };

            }];

            function link(scope, element, attrs, controller) {
                controller.initMap(element);
                scope.$watch('center', function (newcenter, oldcenter) {
                    if (newcenter != oldcenter) {
                        gmap.updateCenter(scope.gmap, newcenter);
                    }
                }, true);
                scope.$watchCollection('markers', function (markers) {
                    gmap.updateBounds(scope.gmap, markers);
                    var center = gmap.updateBounds(scope.gmap, markers);
                    gmap.nearbySearch(scope.gmap, {
                        location: center.getCenter(),
                        radius: '2000',
                        types: ['restaurant', 'cafe' ]
                    }).then(function(results) {
                        scope.places = results;
                        var result;
                        for (result in results) {
                            gmap.addMarker(results[result]);
                        }
                    });
                });
            }

            return {
                scope: {
                    center: "=center",
                    markers: "=markers",
                    places: "=places"
                },
                controller: controller,
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();