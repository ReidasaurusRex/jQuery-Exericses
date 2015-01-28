$(document).ready(function() {
	$("form").on("submit", function(e) {
		$("body").append("<li><input type = 'checkbox'>" + $("input[type='text']").val() + "<button>X</button></li>");
	});
	$("body").on("click", "input[type='checkbox']", function(e) {
		if($(this).parent().hasClass("strikeThrough")) {
			$(this).parent().removeClass("strikeThrough");
		}
		else {
			$(this).parent().addClass("strikeThrough");
		}
	});
	$("body").on("click", "button", function(e) {
		$(this).parent().remove();
	});
});