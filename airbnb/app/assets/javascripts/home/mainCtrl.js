angular.module('airbnb').controller('MainCtrl', ['$scope','listings','Auth',
    function($scope,listings,Auth){
        $scope.test = 'Hello world!';       
        $scope.listings = listings.listings
		$scope.signedIn = Auth.isAuthenticated;
        $scope.addPost = function(){
          if(!$scope.name || $scope.name === '') { return; }
          listings.create({name : $scope.name, city : "Chennai",featured:false,ameneties:["haha"]});
          $scope.name = '';
        };

    }
])