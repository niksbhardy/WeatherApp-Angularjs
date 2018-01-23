weatherApp.controller('homeController', ['$scope', 'cityService', '$http',
			 '$location', function($scope, cityService, $http, $location){

	$scope.city = cityService.city;
	$scope.$watch('city', function() {
			cityService.city = $scope.city;
	});

	$scope.submit = function() {
		$location.path('/forecast');
	}

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams',
			 'weatherService', function($scope, cityService, $routeParams, weatherService){

	$scope.isLoading = true;
 	$scope.city = cityService.city;
	$scope.days = $routeParams.days || 2;
	$scope.url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' +
		$scope.city + '&mode=json&cnt=' + $scope.days +
		'&callback=JSON_CALLBACK&APPID=8d12194921a2eeb0f7bbcbb70817a3c3';


	//weatherService returns a promise object. Thus, resolving the promise.
	$scope.weatherDataResponse = weatherService.GetWeather($scope.url)
		.then(function(successResponse){
    $scope.weatherData = successResponse;
		$scope.isLoading = false;
    console.log($scope.weatherData);
  });


	//CONVERT KELVIN TO CELCIUS
	$scope.convertToCelcius = function(degK) {
		return Math.round(degK - 273);
	}
	//CONVERT DATE
	$scope.convertToDate = function(date) {
		return new Date(date * 1000);
	}

}]);
