angular.module('airbnb').factory('listings', ['$http',function($http){
  var o = {};
  o.getAll = function() {
    return $http.get('/listings.json').then(function(data){
      debugger
      angular.copy(data.data, o.listings);
    });
  };

  o.create = function(listing) {
    return $http.post('/listings.json', listing).then(function(data){
      debugger
      o.listings.push(data.data);
    });
  };

  return o;
}])