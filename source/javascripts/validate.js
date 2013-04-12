(function ($) {
	$(document).ready(function() {
		$('form').validate({
			onKeyup: true,
			eachValidField: function () {
				$(this).removeClass('error');
			},
			eachInvalidField: function () {
				$(this).addClass('error');
			}
		});
	});
})(window.jQuery);