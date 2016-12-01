angular.module('bandControllers')
	.controller('searchController', function($scope, $rootScope, DataService,$location) {

		$scope.findArtist = function() {
			const province = $scope.province;
			const style = $scope.style;
			DataService.getBands( province, style )
				.then( function(response) {
					console.log(response)
					//console.log(response.data.artists.items)
					debugger;
					$rootScope.bands = response.data;
					$location.path('/results')
				})
		}

	})