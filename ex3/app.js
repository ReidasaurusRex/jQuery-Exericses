$(document).ready(function() {
	$("h3").hide();
	$(window).on("keyup", function(e) {
		if ($("input[type='password']").val().length < 6) {
			$("p:first").text("Not long enough!");
		}
		if ($("input[type='password']").val().length >= 6) {
			$("p:first").text("");
		}
		if (e.keyCode !== 13) {
			$("#error").text("");
		}
	});
	$("form").on("submit", function(e) {
		if (($("input[type='password']").val().length < 6) && ($("input[type='password']").val().length >= 1)) {
			$("#error").text("Your password must be longer than 6 characters.");
		}
		else if ($("input[type='password']").val().length === 0) {
			$("#error").text("Please enter a password");
		}
		else if ($("input[type='password']").val().length >= 6) {
			$("h3").fadeIn(500);
		}
	});
});