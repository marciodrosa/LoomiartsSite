$(function() {
	$(".squadron51-container").hover(
		function() {
			$(".squadron51-container-content").fadeIn("slow")
			$(".squadron51-container-rectangle").animate( { width: "300px" }, "fast");
		},
		function() {
			$(".squadron51-container-content").fadeOut("fast")
			$(".squadron51-container-rectangle").animate( { width: "0px" });
		}
	);
});
