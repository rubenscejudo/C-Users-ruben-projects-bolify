/*angular.module('bandControllers')
	.controller('detailsController', function($scope, $rootScope, DataService, $location){
			
		$scope.getDetails = function(oBand_id) {
			const id = $scope.oBand_id;
			DataService.getBandById(id)
				.then(function(response) {
					console.log(response)
					$location.path('/details')
					$rootScope.detailsBand = response.data;
				})
		}

	})*/