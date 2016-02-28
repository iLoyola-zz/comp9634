$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97'
  })
  .done( function( response ) {
    var results = response.data.results;
    var resultsLen = results.length;
    var output = '<ul class="final-results-list">';

    console.log( results[0] );

    for(var i=0; i<resultsLen; i++){
      var imgPath = results[i].thumbnail.path + '/standard_large.' + results[i].thumbnail.extension;
      console.log( imgPath );
      output += '<li class="final-results-list-item"><img src="' + imgPath + '"><h3 class="final-results-heading">'+results[i].name+'</h3><p class="final-results-text">' + results[i].description + '</p></li>';

    }
    output += '</ul>';
    $( '.js-final-results' ).append( output );
  });

});
