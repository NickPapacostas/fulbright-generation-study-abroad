var universityList = angular.module('universityList', ['ngTable']);

universityList.controller('UniversitiesController', function ($scope, $http, ngTableParams) {
  $http.get('masters_in_greece.json')
    .then(function (res) {
      $scope.universities = res.data;
      window.universities = res.data;
    });
  $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10           // count per page
  });
  $scope.isLink = function(input) {
    return input instanceof Object
  }
});

universityList.filter('isLink', function(){
  // potentially gonna use this for spitting out html links etc. instead of conditional in markup
  return function(input){
    return null;
  }
})