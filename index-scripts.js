$(function() {
	createNavMenu("navbar", {loomiartsLogo: "#", home: "#home", contact: "#contact"});
	createFooter("footer");

	var showGameMenu = function() {
		$(this).parents(".game-container").find(".game-menu-content").stop().fadeIn({duration: "slow", queue: true});
		$(this).parents(".game-container").find(".game-menu-rectangle").stop().animate({height: "100%"}, { duration: "fast", queue: true});
	}

	var hideGameMenu = function() {
		if ($(this).parents(".game-container").find(".game-menu-item-info").attr("data-active") != "true") {
			$(this).parents(".game-container").find(".game-menu-content").stop().fadeOut({duration: "fast", queue: true});
			$(this).parents(".game-container").find(".game-menu-rectangle").stop().animate({height: "0%"}, { queue: true});
		}
	}

	var showGameInfo = function() {
		if ($(this).parents(".game-container").find(".game-menu-item-info").attr("data-active") != "true") {
			showGameMenu.call(this);
			toggleGameInfo.call(this);
		}
	}

	var toggleGameInfo = function() {
		if ($(this).attr("data-active") == "true") {
			$(this).parents(".game-container").find(".game-info-content").fadeOut({duration: "fast", queue: true});
			$(this).parents(".game-container").find(".game-menu-item-info").attr("data-active", "false");
		} else {
			$(this).parents(".game-container").find(".game-info-content").fadeIn({duration: "fast", queue: true});
			$(this).parents(".game-container").find(".game-menu-item-info").attr("data-active", "true");
		}
	}

	$(".game-banner-container").hover(showGameMenu, hideGameMenu);
	$(".game-banner-container > img").click(showGameInfo);
	$(".game-menu-item-info").click(toggleGameInfo)
});
