var $RMjQuery = jQuery.noConflict();$RMjQuery( document ).ready( function( ){function openRM(){$RMjQuery( '#responsive-menu' ).css( 'display', 'block' );$RMjQuery( '#responsive-menu' ).stop().animate({left: "0"}, 300, 'linear', function(){$RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() )})}function closeRM(){$RMjQuery( '#responsive-menu' ).animate({left: "-100%"}, 300, 'linear', function(){$RMjQuery( '#responsive-menu' ).css( 'display', 'none' )})}isOpen = false;$RMjQuery( '#click-menu' ).click( function(){$RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );if( !isOpen ){openRM();isOpen = true}else{closeRM();isOpen = false}});$RMjQuery( window ).resize( function(){$RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() );if( $RMjQuery( window ).width() > 600 ){if( $RMjQuery( '#responsive-menu' ).css( 'left' ) != '-100%' ){closeRM()}}});clickLink = '<span class="appendLink">&#9660;</span>';$RMjQuery( '#responsive-menu .responsive-menu .sub-menu' ).css( 'display', 'none' );$RMjQuery( '#responsive-menu .responsive-menu .menu-item-has-children' ).prepend( clickLink );$RMjQuery( '.appendLink' ).on( 'click', function(){$RMjQuery( this ).nextAll( 'ul.sub-menu' ).toggle();if( $RMjQuery( this ).html() == '▼' ){$RMjQuery( this ).html( '&#9650;' )}else{$RMjQuery( this ).html( '&#9660;' )}$RMjQuery( '#responsive-menu' ).css( 'height', $RMjQuery( document ).height() )});$RMjQuery( '#responsive-menu .responsive-menu li a' ).on( 'click', function(){closeRM()})});