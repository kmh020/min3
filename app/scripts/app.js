'use strict';

var myApp = angular.module('min3App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

myApp.service('Math', function () {
  this.multiply = function (x, y) {
    return x * y;
  };
});

myApp.controller('MainCtrl2',['$scope', function ($scope) {
  $scope.user = {};
  $scope.user.details = {
    "username": "Todd motto",
    "id": "12321321"
  }

  $scope.text = "minhyung huyn huynh yunh uy";
}]);

myApp.directive('customButton', function() {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    template: '<a href=""class="myawesomebutton" ng-transclude>'+
                '<i class="icon-ok-sign"></i>'+
                '</a>',
    link: function (scope, element, attrs) {

     }           
  };
});

myApp.factory('Server', function () {
  return {
    get: function(url) {
      return $http.get(url);
    },
    post: function(url) {
      return $http.post(url);
    },
  };
});

myApp.controller('MainCtrl4', ['$scope', 'Server', function ($scope, Server) {
    var jsonGet = 'http://myserver/getURL';
    var jsonPost = 'http://myserver/postURL';
    Server.get(jsonGet);
    Server.post(jsonPost);
}]);

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        var out = '';
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});

// Controller included to supply data
myApp.controller('MainCtrl5', ['$scope', function ($scope) {
    $scope.greeting = 'Todd Motto';

    $scope.numbers = [10, 25, 35, 45, 60, 80, 100];
    
    $scope.lowerBound = 42;
    
    // Does the Filters
    $scope.greaterThanNum = function (item) {
        return item > $scope.lowerBound;
    };
}]);