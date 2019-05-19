$(document).ready(function() {
	$('.btn-trigger').on("click", function(event) {
		$('.nav').toggleClass('open');
		event.preventDefault();
	})
});