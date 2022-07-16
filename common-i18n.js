$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				menuItemHomeText:"Início",
				menuItemGamesText:"Jogos",
				menuItemSquadron51Text:"Esquadrão 51 Contra os Discos Voadores",
				menuItemContactText:"Contato",
				menuItemPressKitText:"Press Kit",
				footerEmail:"E-mail: contato@loomiarts.com",
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
				menuItemSquadron51Text:"Squad 51 vs. the Flying Saucers",
				menuItemContactText:"Contact",
				menuItemPressKitText:"Press Kit",
				footerEmail:"E-mail: contact@loomiarts.com",
			},
			images: {
			}
		};
	}
	
	applyAppropriateLanguage(portugueseDictionary, englishDictionary)
});
