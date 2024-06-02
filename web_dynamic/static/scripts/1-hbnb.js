// $(document).ready(() => {
// 	const amenityList = [];
// 	$(".amenities .popover input").on("change", () => {
// 		if ($(this).is(":checked")) {
// 			// $(this).attr("data-name");
// 			amenityList.push($(this).attr("data-name"));
// 		} else if ($(this).is(":not(:checked)")) {
// 			amenityList.pop();
// 		}
// 		console.log(amenityList);
// 		$('.amenities h4').text(amenityList);
// 	});
// });


$(document).ready(main);
function main() {
  const amenityObj = {};
  $(".amenities .popover input").change(function () {
    if ($(this).is(":checked")) {
      amenityObj[$(this).attr("data-name")] = $(this).attr("data-id");
    } else if ($(this).is(":not(:checked)")) {
      delete amenityObj[$(this).attr("data-name")];
    }
    const names = Object.keys(amenityObj);
    $(".amenities h4").text(names.sort().join(", "));
  });
}
