angular.module('bandControllers')
	.controller('createController', function($scope, $rootScope, DataService, $location) {

		$scope.addBand = function( ) {

			//const band = $scope.band;
			const { band, description, style, provinces_play } = $scope;
			const dataToSend = { band, description, style, provinces_play }

			DataService.addBand(dataToSend)
				.then(() => console.log("it works!!!"))

		}


	})