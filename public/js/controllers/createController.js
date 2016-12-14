angular.module('bandControllers')
	.controller('createController', function($scope, $rootScope, DataService, $location) {

		$scope.addBand = function( ) {

			//const band = $scope.band;
			const { band, style, provinces_play, description, phone, email, listenToUs } = $scope;
			const dataToSend = { band, style, provinces_play, description, phone, email, listenToUs }

			DataService.addBand(dataToSend)
				.then(() => console.log("it works!!!"))

		}


	})