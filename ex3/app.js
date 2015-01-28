$(document).ready(function() {
	$(window).on("keyup", function() {
		if ($("input[type='password']").val().length < 6) {
			$("p").text("Not long enough!");
		}
		if ($("input[type='password']").val().length >= 6) {
			$("p").text("");
		}
	});
});