angular.module('bandControllers')
	.controller('detailsController', function($scope, $rootScope, spotifyService, $location){
			$scope.albums = $rootScope.album;

			$scope.findTracks = function(albums) {
				console.log(albums)
				var idAlbum = albums.id
				console.log(idAlbum)
				spotifyService.getTracks(idAlbum)
				.then (function(response) {
					//console.log(response)
				$scope.tracks = response.data.items;
				})
			}


		})