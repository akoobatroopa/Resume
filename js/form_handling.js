jQuery(function($) {
	$("#person_Tel").mask("(999) 999-9999");
});
jQuery(function($) {
    $("#person_Tel2").mask("(999) 999-9999");
});



var message = "";
$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//akoobatroopa.github.io/resume/", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});