angular.module('bandServices', [])
	.factory('DataService', function($http) {

			function getBands( province, style ) {

				var url = "/bands"

				if (style && province) {
					url += "?province=" + province + "&style=" + style
				}
				else if (province) {
					url += '?province=' + province.toLowerCase()
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

			function getBandByID (id) {
				const url = "/band/" + id;
				return $http.get(url)
			}

			return {
				getBands: getBands,
				addBand: addBand,
				getBandByID: getBandByID
			}
	})