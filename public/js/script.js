// create the module and name it taskmanApp
var taskmanApp = angular.module('taskmanApp', ['ngRoute']);

// configure our routes
taskmanApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'HomeController'
		})

		// route for the tasks page
		.when('/settings', {
			templateUrl : 'pages/settings.html',
			controller  : 'SettingsController'
		});
});

