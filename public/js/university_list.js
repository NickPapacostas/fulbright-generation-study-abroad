var universityList = angular.module('universityList', ['ngTable']);

universityList.controller('UniversitiesController', function ($scope, $http, $filter, ngTableParams) {
  $http.get('masters_in_greece.json').then(function (res) {
    universityListInit(res.data)
  });

  universityListInit = function(data){
    $scope.data = data;
    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,           // count per page
      sorting: {
        institution: 'asc'
      }
    }, {
      total: $scope.data.length,

      getData: function($defer, params) {
        console.log(params.sorting());
        var orderedData = params.sorting() ?
            $filter('orderBy')(data, params.orderBy()) :
            data;
        orderedData = params.filter() ?
                   $filter('filter')(orderedData, params.filter()) :
                   orderedData;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });    
    window.universities = data;
  };
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