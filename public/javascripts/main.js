$(document).ready(function() {
	
	$("#tagSearch").keyup(function() {
		search();
	}); 
	
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
					content += "<div class='result'>";
					content += "<a>Onion</a>";
					content += "</div>";
	       		});		
		$("#searchResults").show();
		$(content).appendTo("#searchResults");
		}
	});
}