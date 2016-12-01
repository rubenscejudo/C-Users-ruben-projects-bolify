$(document).ready(function() {	
	
	var counter = 0;
	
	$("#addMember").on("click", function (e) {
		e.preventDefault();
	
		var $blockToClone = $('#insertMembers').clone()
		
		counter++
		$blockToClone.find('input').each( function(index,elem) {
     		$elem = $(elem)
     		var name = $elem.attr('name')
     		$elem.attr('name', name + counter)


     	} )
		
		$blockToClone.removeAttr('id')//#generalMembers will be removed. When cloning it will clone one by one instead of 2, 4, 6...
     	

    	$('#generalMembers').append($blockToClone)
    	
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
