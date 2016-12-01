angular.module('FindABandApp', ['ngRoute', 'bandControllers', 'bandServices'])
	.config( function($routeProvider){
		
		//$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'views/search.html',
				controller: 'searchController'
			})
			.when('/results', {
				templateUrl: 'views/results.html',
				controller: 'resultsController'
			})

			.when('/details', {
				templateUrl: 'views/details.html',
				controller: 'detailsController'
			})
			/*.when('/create', {
				templateUrl: 'views/create.html',
				controller: 'createController'
			})*/
			.otherwise({redirectTo: '/'});

})			


