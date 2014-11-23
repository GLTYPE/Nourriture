$('#signupForm').on('submit', function(e) {
    var formData = $(this).serializeArray();
    
    $.ajax({
        type: "POST",
        timeout: 5000,
        url: "http://localhost:4242/users",
        data: formData,
	success: function(response) {
    	    alert(response);
	},
	error: function(jqXHR, textStatus, errorThrown) {
    	    alert(jqXHR.responseText);
	}
    });
    return false;
});
