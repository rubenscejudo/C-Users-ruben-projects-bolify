angular.module('bandServices', [])
	.factory('DataService', function($http) {

			function getBands( province, style ) {

				var url = "/bands"

				if (style && province) {
					url += "?province=" + province + "&style=" + style
				}
				else if (province) {
					url += '?province=' + province
				}
				else if (style) {
					url += '?style=' + style.toLowerCase()
				}

				return $http.get(url);
			}

			function addBand( data ) {
				const url = "/bands";
				data = JSON.stringify(data);

				return $http.post(url, data);
			}

			return {
				getBands: getBands,
				addBand: addBand
			}
	})