$(function() {
	createNavMenu("navbar", {loomiartsLogo: "#", home: "#home", contact: "#contact"});
	$(".squadron51-container").hover(
		function() {
			$(".squadron51-container-content").stop().fadeIn({duration: "slow", queue: true});
			$(".squadron51-container-rectangle").stop().animate({width: "300px"}, { duration: "fast", queue: true});
		},
		function() {
			$(".squadron51-container-content").stop().fadeOut({duration: "fast", queue: true});
			$(".squadron51-container-rectangle").stop().animate({width: "0px"}, { queue: true});
		}
	);
});
