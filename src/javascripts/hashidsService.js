(function(){
    "use strict";
    angular.module('woodhouse').service('hashids', function () {
        var hashids = new Hashids(Date.now().toString(), 8);

        this.hash = function (position) {
            return hashids.encrypt(Math.abs(Math.round(position.lat)), Math.abs(Math.round(position.lng)));
        };
    });
}());