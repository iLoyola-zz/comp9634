$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97'
  })
  .done( function( response ) {
    var results = response.data.results;
    var resultsLen = results.length;
    var output = '<ul class="final-list">';

    console.log( results );

    for(var i=0; i<resultsLen; i++){
      if(results[i].thumbnail.length > 0) {
        var imgPath = results[i].thumbnail[0].path + '/standard_large.' + results[i].thumbnail[0].extension;
        output += '<li class="final-list-item"><img src="' + imgPath + '"><h3 class="final-list-item-heading">'+results[i].name+'</h3><p class="final-list-item-text">' + results[i].description + '</p></li>';

      }
    }
    output += '</ul>';
    $( '.js-final-results' ).append( output );
  });

});
