// -------------search from index --------------------------------


$("#searchBand").on('click', function(event) {
	event.preventDefault();

	const province =  $("#searchProvince").val();
	const provinceLowCase = province.toLowerCase();
	const style =  $("#searchStyle").val();
	const styleLowCase = style.toLowerCase();

	$.ajax ({
		url: '/api/bands?' + 'province'+provinceLowCase+'&'+'style='+styleLowCase,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			console.log(data);

		}
	})
	
});

$(document).ready(function () {
    $("#searchBand").click(function () {
    window.location.replace("/search"); 
 	})
 })


// -----------------redirect from index to search-----------------

/*$(document).ready(function () {
    $("#searchBand").click(function () {
    window.location.replace("/search"); 
 	})
 })
*/