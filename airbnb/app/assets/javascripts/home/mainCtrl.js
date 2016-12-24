angular.module('airbnb').controller('MainCtrl', ['$scope','listings',
    function($scope,listings){
        debugger
        $scope.test = 'Hello world!';       
        $scope.listings = listings.listings
        $scope.addPost = function(){
            // debugger
          if(!$scope.name || $scope.name === '') { return; }
          $scope.listings.push({name : $scope.name, city : "Chennai"});
          $scope.name = '';
        };

    }
])