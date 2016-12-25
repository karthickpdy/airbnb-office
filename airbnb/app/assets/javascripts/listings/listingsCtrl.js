angular.module('airbnb').controller('ListingsCtrl', ['$scope','$stateParams','listings','listing',
    function($scope, $stateParams, listings,listing){        
      debugger
        $scope.listing = listing;
    }]
);