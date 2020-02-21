function applyLanguage(language)
{
	for (var key in language.strings)
	{
		var str = language.strings[key];
		$("[data-loc=\"" + key + "\"]").text(str);
	}
	for (var key in language.images)
	{
		var imageData = language.images[key];
		var images = $("[data-loc=\"" + key + "\"]");
		images.attr("src", imageData.src);
		images.attr("alt", imageData.alt);
	}
}

function getLanguageToBeUsed(portuguese, english)
{
	if (document.location.search == "?lang=en")
		return english;
	else if (navigator.language.startsWith("pt") || document.location.search == "?lang=pt")
		return portuguese;
	else
		return english;
}

function applyAppropriateLanguage(portuguese, english)
{
	selectedLanguage = getLanguageToBeUsed(portuguese, english)
	applyLanguage(selectedLanguage())
}
