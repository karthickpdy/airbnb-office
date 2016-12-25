angular.module('airbnb').factory('listings', ['$http',function($http){
  var o = {
    listings: []
  };

  o.getAll = function() {
    return $http.get('/listings.json').then(function(data){
      debugger
      angular.copy(data.data, o.listings);
    });
  };

  o.create = function(listing) {
    return $http.post('/listings.json', angular.toJson(listing)).then(function(data){
      debugger
      o.listings.push(data.data);
    });
  };

  o.get = function(id) {
    return $http.get('/listings/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  return o;
}])