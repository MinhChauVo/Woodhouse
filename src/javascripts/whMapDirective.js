(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMap', ['gmap',
        function (gmap) {
            var controller = ['$scope', function ($scope) {
                this.initMap = function (element) {
                    var center = $scope.center,
                        mapEle = element.append('<div/>')[0].childNodes[0];
                    this.map = gmap.initMap(mapEle, {
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
                        gmap.updateCenter(controller.map, newcenter);
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