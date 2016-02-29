$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97'
  })
  .done( function( response ) {

    var results = response.data.results;
    var resultsLen = results.length;
    var output = '<ul class="final-results-list">';
    var body = $( 'body' );

    var showInfo = function( event ) {
      event.stopPropagation();
      $( this ).find( '.final-results-info' ).slideUp( 500 ).removeClass( 'hidden' );
    };

    var hideInfo = function( event ) {
      event.stopPropagation();
      $( this ).find( '.final-results-info' ).slideDown( 500 ).addClass( 'hidden' );
    };

    var openModal = function( event ) {
      event.stopPropagation();
      body.find( '.js-final-modal' ).removeClass( 'hidden' );
      body.find( '.icon' ).css('display', 'block');
    };

    for(var i=0; i<resultsLen; i++){
      var imgPath = results[i].thumbnail.path + '/standard_large.' + results[i].thumbnail.extension;
      output += '<li class="final-results-list-item"><button class="final-results-link js-final-results-link"><img src="' + imgPath + '"><div class="final-results-info hidden"><h3 class="final-results-heading">'+results[i].name+'</h3><p class="final-results-text">' + results[i].description + '</p></div></button></li>';
    }
    output += '</ul>';

    $( '.js-final-results' ).append( output );

    $('.js-final-results-link').on( 'mouseenter', showInfo );
    $('.js-final-results-link').on( 'mouseleave', hideInfo );
    $('.js-final-results-link').on( 'click', openModal );

  });

});
