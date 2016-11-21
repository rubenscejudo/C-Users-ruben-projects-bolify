$(document).ready(function() {

    var insertMembers = $("#insertMembers"); //ID container
    var addButton = $("#addMember"); //ID addButton

    //var filds = number of fields in div
    var fields = $("#insertMembers div").length + 1;
    var FieldCount = fields; 

    $(addButton).click(function (e) {
    
            FieldCount++;
            $(insertMembers).append('<div><input type="text" name="name" id="fieldName_'+ FieldCount + '"/><input type="text" name="surname" id="fieldSurname_'+ FieldCount + '"/><input type="text" name="role" id="fieldRole_'+ FieldCount + '"/><a href="#" class="delete">&times;</a></div>');
            // $(insertMembers).append('<div><input type="text" name="surname[]" id="fieldSurname_'+ FieldCount +'" placeholder="Knopfler'+ FieldCount'"/><a href="#" class="delete">&times;</a></div>');
            // $(insertMembers).append('<div><input type="text" name="role[]" id="fieldRole_'+ FieldCount +'" placeholder="Guitarrista y cantante'+ FieldCount'"/><a href="#" class="delete">&times;</a></div>');
            fields++; 
            // debugger;
        return false;
    });

    $("body").on("click",".delete", function(e){ //click delete field
        if( fields > 1 ) {
            $(this).parent('div').remove(); //delete field
            fields--;
        }
        return false;
    });
});


/*---------------------read more/in search------------------*/
function growDiv() {
    var growDiv = document.getElementById('grow');
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
    }
document.getElementById("more-button").value=document.getElementById("more-button").value=='Read more'?'Read less':'Read more';
}
// -------------search from index --------------------------------
/*

Con post no es necesario hacer una peticion ajax

$("#searchBand").click(function (event) {	

	event.preventDefault();

	const province =  $("#searchProvince").val();
	const provinceLowCase = province.toLowerCase();
	const style =  $("#searchStyle").val();
	const styleLowCase = style.toLowerCase();

	$.ajax ({
		url: '/api/bands?' + 'province='+provinceLowCase+'&'+'style='+styleLowCase,
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			console.log(data);

		}
	})
	.done(function(){
    window.location.replace('/search'); 
 	})
	
})

*/

// -----------------redirect from index to search-----------------

/*$(document).ready(function () {
    $("#searchBand").click(function () {
    window.location.replace("/search"); 
 	})
 })
*/