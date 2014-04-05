
(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', []);

    woodhouse.controller('LunchApp', ['$scope', function($scope) {
        $scope.map = {
            center: [33.0478078, -96.7918966],
            'center2': [33.0478078, -96.7918966]
        };

        setInterval(function(){
            $scope.$apply(function(){
                $scope.map['center2'][0] = $scope.map['center2'][0] + 0.01;
            });
        }, 1000);
    }]);
}());