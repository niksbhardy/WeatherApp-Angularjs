weatherApp.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: './components/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	};
});
