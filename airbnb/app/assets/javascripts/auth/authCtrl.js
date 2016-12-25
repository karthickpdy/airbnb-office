angular.module('airbnb')
.controller('AuthCtrl', 
	// onEnter: ['$state', 'Auth', function($state, Auth) {
 //        Auth.currentUser().then(function (){
 //          $state.go('home');
 //        })
	// }],
	[
	'$scope',
	'$state',
	'Auth',
	function($scope, $state, Auth){
		debugger
		$scope.login = function() {
			Auth.login($scope.user).then(function(){
			  $state.go('home');
			});
		};

		$scope.register = function() {
			Auth.register($scope.user).then(function(){
			  $state.go('home');
			});
		};
	}]
);
