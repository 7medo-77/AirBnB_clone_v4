$(document).ready(() => {
	$.get({
		type: 'GET',
		// url: 'http://0.0.0.0:5001/api/v1/status/',
		url: 'http://127.0.0.1:5001/api/v1/status/',
		success: (data) => {
			if (data["status"] === "OK") {
				$('#api_status').addClass("available");
				$('#api_status').css("background-color", "#ff545f");
			} else {
				$('#api_status').removeClass("available");
				$('#api_status').css("background-color", "#cccccc");
			}
		},
	})
});
