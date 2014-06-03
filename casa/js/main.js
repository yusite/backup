$(document).ready(function() {
	$('.invis').hide();
	$('.more').on('click', function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		if ($('#ajax').is(':visible')) {
			$('#ajax').css({ display:'block' }).empty();
		}
		$('#ajax').html($(href).html()).hide().fadeIn('slow');
	});
});