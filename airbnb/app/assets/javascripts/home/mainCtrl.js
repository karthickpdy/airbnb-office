angular.module('airbnb').controller('MainCtrl', ['$scope','listings',
    function($scope,listings){
        $scope.test = 'Hello world!';       
        $scope.listings = listings.listings
        $scope.addPost = function(){
          if(!$scope.name || $scope.name === '') { return; }
          listings.create({name : $scope.name, city : "Chennai",featured:false,ameneties:["haha"]});
          $scope.name = '';
        };

    }
])