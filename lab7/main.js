$(function() {
	$('#search-btn').on('click', function() {
		var searchTerm = $('#search-term').val();
		var limitTerm = $('#limit-search').val();
		searchTerm = searchTerm.replace( /\s/g, '+' );
		var searchScript = document.createElement('script');
		searchScript.src = 'https://itunes.apple.com/search?term=' + searchTerm + '&limit=' + limitTerm + '&callback=getSongs';
		$('body').append(searchScript) ;
	});
});

function getSongs(data){
	console.log(data);

	document.getElementById('table-rows').innerHTML = '';

 	var resultHTML = '';

 	for (var i = 0; i < data.resultCount; i++) {
 		resultHTML += '<tr>';
 		resultHTML += '<td><img src="' + data.results[i].artworkUrl100 + '"></td>'
 		resultHTML += '<td>' + data.results[i].artistName + '</td>'
 		resultHTML += '<td>' + data.results[i].trackName + '</td>'
 		resultHTML += '<td>' + data.results[i].collectionName + '</td>'
 		resultHTML += '<td>' + data.results[i].primaryGenreName + '</td>'
 		resultHTML += '<td>' + data.results[i].trackPrice + '</td>'
 		resultHTML += '<td>' + data.results[i].collectionPrice + '</td>'
 		resultHTML += '<td><audio src="' + data.results[i].previewUrl + '" controls></audio></td>'
 		resultHTML += '</tr>';
 	}

 	document.getElementById('table-rows').innerHTML = resultHTML;
}