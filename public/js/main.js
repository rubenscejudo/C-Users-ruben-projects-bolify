// -------------search from index --------------------------------

$("#searchClick").on('click', function(event) {
	event.preventDefault();
	const clientProvince =  $("#searchProvince").val();
	const clientProvinceLowerCase = clientProvince.toLowerCase();
	console.log("El sitio que buscas es....: " + clientProvinceLowerCase)
	$.ajax ({
		url: '/province/' + clientProvinceLowerCase,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			console.log(data);

		}
	})

});

$("#searchClick").on('click', function(event) {
	event.preventDefault();
	const clientStyle =  $("#searchStyle").val();
	const clientStyleLowerCase = clientStyle.toLowerCase();
	console.log("El estilo que buscas es....: " + clientStyleLowerCase)
	$.ajax ({
		url: '/style/' + clientStyleLowerCase,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			console.log(data);

		}
	})

});

// -----------------redirect from index to search-----------------

/*$(document).ready(function () {
    $("#searchClick").click(function () {
    window.location.replace("/search"); 
 	})
 })
*/