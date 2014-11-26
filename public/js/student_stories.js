universityList.controller('StoriesController', function($scope, $http){
  $http.get('testimonials.json').then(function (res) {
    testimonialInit(res.data);
  });

  testimonialInit = function(data){
  	$scope.testimonials = data;
  	window.testimonials = data;
  }
});


