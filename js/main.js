$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97',
    ts: '1',
    hash: '7c402660a1b4308d0136dc1f764c156de312db95'
  })
    .done( function( response ) {
      var results = response.data.results;
      var resultsLen = results.length;
      var output = '<ul>';

      console.log( results[0] );

      for( var i=0; i<resultsLen; i++ ){
        if( results[i].thumbnail.length > 0 ) {
          var imgPath = results[i].thumbnail[0].path + '/standard_xlarge.' + results[i].thumbnail[0].extension;
          output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
        }
      }
      output += '</ul>';
      $( '#results' ).append( output );
  });

});
