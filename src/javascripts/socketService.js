(function(){
    "use strict";
    angular.module('woodhouse').factory('socket', ['$q', function ($q) {
        var slice = Array.prototype.slice;
        var Socket = function () {
            this.io = io.connect();
        };

        Socket.prototype.on = function (eventName) {
            var deferred = $q.defer();
            this.io.on(eventName, function () {
                deferred.resolve.apply(null, slice.call(arguments, 0));
            });
            return deferred.promise;
        };

        Socket.prototype.emit = function (eventName, eventData) {
            var deferred = $q.defer();
            this.io.emit(eventName, eventData, function () {
                deferred.resolve.apply(null, slice.call(arguments, 0));
            });
            return deferred.promise;
        };

        return new Socket();
    }]);
}());