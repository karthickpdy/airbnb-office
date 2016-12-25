angular.module('airbnb')
.controller('NavCtrl', [
	'$scope',
	'Auth',
	'$state',
	function($scope, Auth,$state){
		$scope.signedIn = Auth.isAuthenticated;
		$scope.logout = Auth.logout;
		debugger
		Auth.currentUser().then(function (user){
			debugger
	    	$scope.user = user;
		});

		$scope.$on('devise:new-registration', function (e, user){
			$scope.user = user;
		});

		$scope.$on('devise:login', function (e, user){
			$scope.user = user;
		});

		$scope.$on('devise:logout', function (e, user){
			debugger
			$state.go('home');
			$scope.user = {};
		});		
	}
]);