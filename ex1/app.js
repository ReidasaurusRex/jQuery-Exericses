$(document).ready(function() {
	$("form").on("submit", function() {
		$("tr:odd").css("background-color", $("input[type=text]").val());
	});


});


