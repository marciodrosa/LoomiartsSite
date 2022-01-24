function createNavMenu(navbarId, links) {
	var loomiartsLogoLink = links.loomiartsLogo || "index.html";
	var homeLink = links.home || "index.html";
	var squadron51Link = links.squadron51 || "index.html#game-squadron51";
	var contactLink = links.contact || "index.html#contact";
	var presskitLink = links.presskit || "presskit.html";

	var navbar = $("#" + navbarId);
	navbar.addClass("navbar").addClass("navbar-expand-md").addClass("navbar-dark").addClass("bg-primary").addClass("fixed-top").addClass("shadow");

	// Loomiarts logo:
	navbar.append($(document.createElement("a"))
		.addClass("navbar-brand")
		.attr("href", loomiartsLogoLink)
		.append($(document.createElement("img"))
			.attr("src", "Images/LoomiartsLogoNavBar.png")
			.attr("height", "30")
			.attr("alt", "Loomiarts logo")));

	// Hamburguer button:
	navbar.append($(document.createElement("button"))
		.addClass("navbar-toggler")
		.attr("type", "button")
		.attr("data-toggle", "collapse")
		.attr("data-target", "#navbarcollapse")
		.attr("aria-controls", "navbar")
		.attr("aria-expanded", "false")
		.attr("aria-label", "Toggle navigation")
		.append(document.createElement("span"))
			.addClass("navbar-toggler-icon"));

	// Items:
	navbar.append($(document.createElement("div"))
		.addClass("collapse")
		.addClass("navbar-collapse")
		.attr("id", "navbarcollapse")
		.append($(document.createElement("ul"))
			.addClass("navbar-nav")
			.addClass("mr-auto")
			// Home:
			.append($(document.createElement("li"))
				.addClass("nav-item")
				.append($(document.createElement("a"))
					.addClass("nav-link")
					.attr("href", homeLink)
					.append($(document.createElement("span"))
						.attr("data-loc", "menuItemHomeText"))
					.append($(document.createElement("span"))
						.addClass("sr-only")
						.text("(current)"))))
			// Games:
			.append($(document.createElement("li"))
				.addClass("nav-item")
				.addClass("dropdown")
				.append($(document.createElement("a"))
					.addClass("nav-link")
					.addClass("dropdown-toggle")
					.attr("id", "navbarGamesDropdownMenu")
					.attr("href", "#")
					.attr("role", "button")
					.attr("data-toggle", "dropdown")
					.attr("aria-haspopup", "true")
					.attr("aria-expanded", "false")
					.attr("data-loc", "menuItemGamesText"))
				.append($(document.createElement("div"))
					.addClass("dropdown-menu")
					.attr("aria-labelledby", "navbarGamesDropdownMenu")
					// Game: Squadron 51
					.append($(document.createElement("a"))
						.addClass("dropdown-item")
						.attr("href", squadron51Link)
						.attr("data-loc", "menuItemSquadron51Text"))))
			// Contact:
			.append($(document.createElement("li"))
				.addClass("nav-item")
				.append($(document.createElement("a"))
					.addClass("nav-link")
					.attr("href", contactLink)
					.attr("data-loc", "menuItemContactText")))
			// Presskit:
			.append($(document.createElement("li"))
				.addClass("nav-item")
				.append($(document.createElement("a"))
					.addClass("nav-link")
					.attr("href", presskitLink)
					.attr("data-loc", "menuItemPressKitText")))));

	$("body").attr("data-spy", "scroll").attr("data-target", "#" + navbarId)
	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	})
}