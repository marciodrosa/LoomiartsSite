$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				menuItemHomeText:"Início",
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
