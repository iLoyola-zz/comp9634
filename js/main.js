$( document ).ready( function() {

  var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
  $.getJSON( marvelAPI, {
    apikey: '1024760f96a058cf6804cd870f6fdc97'
  })
  .done( function( response ) {

    var results = response.data.results;
    var resultsLen = results.length;
    var body = $( 'body' );
    var outputGrid = '<ul class="final-results-list">';
    var outputModal = '<div class="final-modal-area">';
    var closeButton = '<svg class="icon icon-cancel-circle js-icon-cancel-circle"><use xlink:href="#icon-cancel-circle"></use></svg>';

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
      body.find( '.icon' ).css('display', 'block');
      body.find( '.js-final-modal' ).removeClass( 'hidden' );
      $( '.js-final-modal-meta' ).append( outputModal );
    };

    var closeModal = function( event ) {
      body.find( '.js-final-modal' ).addClass( 'hidden' );
    };

    var leftModal = function( event ) {
      event.stopPropagation();
    };

    var rightModal = function( event ) {
      event.stopPropagation();
    };

    for( var i=0; i<resultsLen; i++ ){
      var imgThumb = results[i].thumbnail.path + '/standard_large.' + results[i].thumbnail.extension;
      var imgBig = results[i].thumbnail.path + '/landscape_incredible.' + results[i].thumbnail.extension;
      outputModal += closeButton + '<img src="' + imgBig + '"><div class="final-modal-area-info"><h3 class="final-modal-area-heading">'+results[i].name+'</h3><p class="final-modal-area-text">' + results[i].description + '</p>';
      outputGrid += '<li class="final-results-list-item"><button class="final-results-link js-final-results-link"><img src="' + imgThumb + '"><div class="final-results-info hidden"><h3 class="final-results-heading">'+results[i].name+'</h3><p class="final-results-text">' + results[i].description + '</p></div></button></li>';
    }
    outputGrid += '</ul>';
    outputModal += '</div>';

    $( '.js-final-results' ).append( outputGrid );

    $( '.js-final-results-link' ).on( 'mouseenter', showInfo );
    $( '.js-final-results-link' ).on( 'mouseleave', hideInfo );
    $( '.js-final-results-link' ).on( 'click', openModal );
    $( '.js-icon-cancel-circle' ).on( 'click', closeModal );
  });

});
