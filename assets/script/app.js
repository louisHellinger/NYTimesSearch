        
function displayResults(){

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "986e6c8b8c984222a6d248b5f4aed76f",
	  'q': searchTerm,
	  "fq": "pub_year:(\"2012\")", 
	  "fq": "pub_year:(\"2012\")", 
	});

	$.ajax({
	  url: url,
	  method: "GET",
	}).done(function(response) {
	  console.log(response.data);

	  var results = response.data;

/*
		  for (var i = 0; i < results ;i++){
		if (recordNumber === 1){


		}
		if (recordNumber === 5){

		}
		if (recordNumber === 10){
		}
	}
	*/
	
});




$("#submitButton").on("click", function(submit) {
	debugger

		var searchTerm = $("#searchTerm").val().trim();

		var records = $("#records").val().trim();
		
		var startYear = $("#startYear").val().trim();
		
		var endYear = $("#endYear").val().trim();

});

$("#clearButton").on("click", function(clear) {
        $("#searchResults").empty();

});

