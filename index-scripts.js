$(function() {
	createNavMenu("navbar", {loomiartsLogo: "#", home: "#home", contact: "#contact"});
	createFooter("footer");

	var showingSquadron51Info = false;

	var showSquadron51Menu = function() {
		$("#squadron51-container .game-menu-content").stop().fadeIn({duration: "slow", queue: true});
		$("#squadron51-container .game-menu-rectangle").stop().animate({height: "100%"}, { duration: "fast", queue: true});
	}

	var hideSquadron51Menu = function() {
		if (!showingSquadron51Info) {
			$("#squadron51-container .game-menu-content").stop().fadeOut({duration: "fast", queue: true});
			$("#squadron51-container .game-menu-rectangle").stop().animate({height: "0%"}, { queue: true});
		}
	}

	var showSquadron51Info = function() {
		if (!showingSquadron51Info) {
			showingSquadron51Info = true;
			showSquadron51Menu()
			$("#squadron51-container .game-info-content").stop().fadeIn({duration: "fast", queue: true});
		}
	}

	var hideSquadron51Info = function() {
		if (showingSquadron51Info) {
			showingSquadron51Info = false;
			$("#squadron51-container .game-info-content").stop().fadeOut({duration: "fast", queue: true});
		}
	}

	var toggleSquadron51Info = function() {
		if (showingSquadron51Info) {
			hideSquadron51Info()
		} else {
			showSquadron51Info()
		}
	}

	$("#squadron51-container .game-banner-container").hover(showSquadron51Menu, hideSquadron51Menu);
	$("#squadron51-container .game-banner-container > img").click(showSquadron51Info);
	$("#squadron51-info-button").click(toggleSquadron51Info)
});
