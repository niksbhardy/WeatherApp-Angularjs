weatherApp.service('cityService', function() {
	this.city = 'Delhi';
});

weatherApp.service('weatherService', ['$http', function($http) {
	this.GetWeather = function(url) {

		return weatherData = $http.jsonp(url)
			.then(function mySuccess(response) {
				//console.log(response.data);
				return response.data;
			}, function myError(response) {
				//$scope.status = response.statusText;
				return response;
			});

	}
}]);
