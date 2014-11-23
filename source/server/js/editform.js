function changeNameSession(firstname, lastname) {
    $.ajax({
        type: "POST",
        timeout: 5000,
        url: "http://localhost:5000/session",
        data: {name: firstname + " " + lastname}
    });
}

$('#editForm').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serializeArray();

    $.ajax({
        type: "PUT",
        timeout: 5000,
        url: "http://localhost:4242/users/" + formData[3].value,
        data: formData,
    	success: function(response) {
	    changeNameSession(formData[0].value, formData[1].value);
    	},
    	error: function(jqXHR, textStatus, errorThrown) {
    	    alert(jqXHR.responseText);
    	}
    });
    return false;
});
