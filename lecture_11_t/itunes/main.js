var jsonObj = {
	"firstName":"Tommy",
	"lastName":"Trojan",
	"age":21,
	"phone":{
		"cell":"123-123-1234",
		"home":"789-789-7890"
	},
	"friends":[
	{
		"firstName":"John", 
		"lastName":"Smith"
	},
	{
		"firstName":"Jane", 
		"lastName":"Doe"
	}
	]
};

jsonObj.firstName;


var jsonStr = '{"firstName":"Tommy","lastName":"Trojan","age":21,"phone":{"cell":"123-123-1234","home":"789-789-7890"},"friends":[{"firstName":"John", "lastName":"Smith"},{"firstName":"Jane", "lastName":"Doe"}]}';

jsonStr = JSON.parse(jsonStr);



/**********
 * JSONP
 **********/


 function getSongs(data){
	// process data
	// console.log(data);

	// console.log(data.resultCount);
	// console.log(data.results.length);

	$('#results-table tbody').html('');

	var resultsHTML = '';

	for(var i = 0; i < data.resultCount; i++){

		resultsHTML += '<tr>';

		resultsHTML += '<td><img src="' + data.results[i].artworkUrl100 + '"></td>';

		resultsHTML += '<td>' + data.results[i].artistName + '</td>';

		resultsHTML += '<td>' + data.results[i].trackName + '</td>';

		resultsHTML += '<td>' + data.results[i].collectionName + '</td>';

		resultsHTML += '<td><audio src="' + data.results[i].previewUrl + '" controls></audio></td>';

		resultsHTML += '</tr>';

		// console.log( data.results[i].trackName );
	}

	$('#results-table tbody').html(resultsHTML);
}


$(function(){

	$('#search-btn').on('click', function(){

		// $('#search-term').val() == document.querySelector('#search-term').value;
		var searchTerm = $('#search-term').val();
		
		searchTerm = searchTerm.replace( /\s/g, '+' );

		var searchScript = document.createElement('script');

		searchScript.src = 'https://itunes.apple.com/search?term=' + searchTerm + '&callback=getSongs';
		$('body').append(searchScript);

	});

});











