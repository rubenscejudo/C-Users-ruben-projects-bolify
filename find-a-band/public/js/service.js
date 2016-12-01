angular.module('bandServices', [])
	.factory('spotifyService', function($http) {

			function getArtists( artistName ) {
				return $http.get("https://api.spotify.com/v1/search?type=artist&query=" + artistName);
			}

			function getAlbums( artistId ) {
				return $http.get("https://api.spotify.com/v1/artists/" + artistId + "/albums");
			}

			function getTracks( albumId ) {
				return $http.get("https://api.spotify.com/v1/albums/" + albumId + "/tracks");
			}

			return {
				getArtists: getArtists,
				getAlbums: getAlbums,
				getTracks: getTracks
			}
	})