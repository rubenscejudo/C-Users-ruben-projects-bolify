angular.module('bandControllers')
	.controller('createController', function($scope, $rootScope, DataService, $location) {
		createdBand = {};
		this.addBand = function() {

			//const band = $scope.band;
			//const { band, style, provinces_play, description} = $scope;
			//const dataToSend = { band, style, provinces_play, description}
			createdBand = this.band;

			DataService.addBand(dataToSend)
				.then(() => console.log("it works!!!"))

		}


	})