$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97',
    limit: '20',
    offset: '1231'
  })
  .done( function( response ) {

    var results = response.data.results;
    var resultsLen = results.length;
    var body = $( 'body' );
    var outputGrid = '<ul class="final-results-list">';
    var closeButton = '<span class="final-modal-close js-final-modal-close"></span>';

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
      var currentData = $( this ).parent().data( 'current' );
      var imgBig = results[currentData].thumbnail.path + '/landscape_incredible.' + results[currentData].thumbnail.extension;
      body.find( '.icon' ).css('display', 'block');
      body.find( '.js-final-modal' ).removeClass( 'hidden' );
      $( '.js-final-modal-meta' ).html( '<div class="final-modal-area">' + closeButton + '<img src="' + imgBig + '"><div class="final-modal-area-info"><h3 class="final-modal-area-heading">'+results[currentData].name+'</h3><p class="final-modal-area-text">' + results[currentData].description + '</p></div>' );
      if( currentData === '0' ){
        $( '.final-modal-left' ).prop( 'disabled', true );
      } else {
        $( '.final-modal-left' ).on( 'click', leftModal );
      }
      if( currentData === resultsLen ){
        $( '.final-modal-right' ).prop( 'disabled', true );
      } else {
        $( '.final-modal-right' ).on( 'click', rightModal );
      }
    };

    var closeModal = function( event ) {
      console.log( this );
      body.find( '.icon' ).css('display', 'none');
      body.find( '.js-final-modal' ).addClass( 'hidden' );
    };

    var leftModal = function( event ) {
      event.stopPropagation();
      var currentData = currentData - 1;
      $( '.js-final-modal-meta' ).html( '<div class="final-modal-area">' + closeButton + '<img src="' + imgBig + '"><div class="final-modal-area-info"><h3 class="final-modal-area-heading">'+results[currentData].name+'</h3><p class="final-modal-area-text">' + results[currentData].description + '</p></div>' );
    };

    var rightModal = function( event ) {
      event.stopPropagation();
      var currentData = currentData + 1;
      $( '.js-final-modal-meta' ).html( '<div class="final-modal-area">' + closeButton + '<img src="' + imgBig + '"><div class="final-modal-area-info"><h3 class="final-modal-area-heading">'+results[currentData].name+'</h3><p class="final-modal-area-text">' + results[currentData].description + '</p></div>' );
    };

    for( var i=0; i<resultsLen; i++ ){
      var currentResult = i;
      var imgThumb = results[i].thumbnail.path + '/standard_large.' + results[i].thumbnail.extension;
      outputGrid += '<li class="final-results-list-item" data-current="' + currentResult + '"><button class="final-results-link js-final-results-link"><img src="' + imgThumb + '"><div class="final-results-info hidden"><h3 class="final-results-heading">'+results[i].name+'</h3><p class="final-results-text">' + results[i].description + '</p></div></button></li>';
    }
    outputGrid += '</ul>';



    $( '.js-final-results' ).append( outputGrid );

    $( '.js-final-results-link' ).on( 'mouseenter', showInfo );
    $( '.js-final-results-link' ).on( 'mouseleave', hideInfo );
    $( '.js-final-results-link' ).on( 'click', openModal );
    $( '.js-final-modal-close' ).on( 'click', 'js-final-modal-close', closeModal );
  });

});
