$(function() {
	$('#search-btn').on('click', function() {
		var searchTerm = $('#search-term').val();
		searchTerm = searchTerm.replace( /\s/g, '+' );
		var searchScript = document.createElement('script');
		searchScript.src = 'https://itunes.apple.com/search?term=' + searchTerm + '&callBack=getSongs';
		$('body').append(searchScript);
	});
});

/**********
 * JSONP
 **********/

function getSongs(){
 	var resultHTML = '';

 	for (var i = 0; i < data.resultCount; i++) {
 		resultHTML += '<td><img src=' +  + '></td>'
 		resultHTML += '<td>' +  + '</td>'
 		resultHTML += '<td>' +  + '</td>'
 		resultHTML += '<td>' +  + '</td>'
 		resultHTML += '<td>' +  + '</td>'
 		resultHTML += '<td>' +  + '</td>'
 		resultHTML += '<td>' +  + '</td>'
 		resultHTML += '<td><audio src=' +  + '></audio></td>'
 	}

 	document.getElementById('table-rows').innerHTML = resultHTML;
}