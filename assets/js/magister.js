// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 400;
var section_show_time = 400;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function()
	{
		if( ! $(this).hasClass('active') ) {
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});

	$('#btn-download').click(function()
	{
		if( $('a[href^="'+this.getAttribute('href')+'"]', '.mainmenu').hasClass('active')  ) {
			// close all visible divs with the class of .section
			current_item = $('a[href^="'+this.getAttribute('href')+'"]', '.mainmenu');
			$('.section:visible').fadeOut( section_hide_time, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});
});
