angular.module('airbnb').controller('ListingsCtrl', ['$scope','$stateParams','listings',
    function($scope, $stateParams, listings){        
      debugger
        $scope.listing = listings.listings[$stateParams.id];
    }]
);