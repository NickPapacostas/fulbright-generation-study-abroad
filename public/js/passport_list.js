universityList.controller('PassportProgramsController', function ($scope, $http, $filter, ngTableParams) {
  $http.get('passport_greece.json').then(function (res) {
    passportListInit(res.data)
  });

  passportListInit = function(data){
    $scope.data = data;
    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,           // count per page
      // sorting: {
      //   Program: 'asc'
      // }
    }, {
      total: $scope.data.length,

      getData: function($defer, params) {
        var orderedData = params.sorting() ?
            $filter('orderBy')(data, params.orderBy()) :
            data;
        orderedData = params.filter() ?
                   $filter('filter')(orderedData, params.filter()) :
                   orderedData;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });    
  };
  $scope.isLink = function(input) {
    return input instanceof Object
  }
});