$(document).ready(() => {
	$.get(() => {
		type: 'GET',
		url: 'http://0.0.0.0:5001/api/v1/status/',
		success: (data) => {
			if (data.status === "OK") {
				$('#api_status').addClass("available");
			} else {
				$('#api_status').removeClass("available");
			}
		},
	})
});
