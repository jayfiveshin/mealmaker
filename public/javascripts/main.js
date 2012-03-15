$(document).ready(function() { 
	
});

function search() {
	$("#searchResults").empty();
	var query = $("#ingredientSearch").val();
	$.ajax({
	 			url: "search",
	 			type: "POST",
	 			data: {query: query},
				dataType: "json",
	 			beforeSend: function(x) {
	   			if (x && x.overrideMimeType) {
	     			x.overrideMimeType("application/j-son;charset=UTF-8");
	   			}
	 		},
	 		success: function(result) {
				$.each(result, function(i,instance){
					content += "</tr>";
	       		});		
		$("#searchResults").show();
		$(content).appendTo("#invTbody");
		}
	});
}