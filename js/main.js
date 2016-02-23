$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97'
  })
    .done( function( response ) {
      var results = response.data.results;
      var resultsLen = results.length;
      var output = '<ul>';

      for( var i=0; i<resultsLen; i++ ){
        if( results[i].images.length > 0 ) {
          var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
          output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
        }
      }
      output += '</ul>';
      $( '#results' ).append( output );
  });

});
