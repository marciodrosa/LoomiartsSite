$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				menuItemHomeText:"Início",
				menuItemGamesText:"Jogos",
				menuItemSquadron51Text:"Esquadrão 51",
				menuItemContactText:"Contato",
				menuItemPressKitText:"Press Kit",
			},
			images: {
			}
		};
	}

	function englishDictionary()
	{
		return {
			strings: {
				menuItemHomeText:"Home",
				menuItemGamesText:"Games",
				menuItemSquadron51Text:"Squadron 51",
				menuItemContactText:"Contact",
				menuItemPressKitText:"Press Kit",
			},
			images: {
			}
		};
	}
	
	applyAppropriateLanguage(portugueseDictionary, englishDictionary)
});
