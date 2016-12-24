angular.module('airbnb').factory('listings', [function(){
  var o = {
    listings: [
      {name : 'listings 1', city : "Chennai", featured : true ,ameneties : ["canteen","internet"]}, 
      {name : 'listings 1', city : "Chennai", featured : false}, 
      {name : 'listings 1', city : "Mumbai"}, 
      {name : 'listings 1', city : "Delhi"}, 
      {name : 'listings 1', city : "Chennai"}, 
    ]
  };
  return o;
}])