(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMap', ['gmap',
        function (gmap) {
            var controller = ['$scope', function ($scope) {
                this.getMap = function(){
                    return $scope.gmap;
                };
                this.addMarker = function(marker) {
                    gmap.addMarker($scope.gmap, marker);
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
            }

            return {
                scope: {
                    center: "=center"
                },
                controller: controller,
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();