angular.module('bandControllers')
	.controller('resultsController', function($scope, $rootScope, DataService, $location) {

			$scope.getDetails = function(oBand_id) {

			DataService.getBandByID(oBand_id)

				.then(function(response) {
					console.log(response)
					$location.path('/details')
					$rootScope.detailsBand = response.data;
				})
		}


	})