function createPortugueseLanguage()
{
	return {
		strings: {
			pressKitTitle:"PRESS KIT ESQUADRÃO 51",
			internationalTitleLabel:"Título internacional",
			originalTitleLabel:"Título original",
			publisherAndDeveloperLabel:"Publisher e desenvolvedora",
			publisherAndDeveloperInfoText:"São Leopoldo, RS, Brasil\nloomiarts.com\nfacebook/loomiarts\ntwitter/loomiarts\ncontato@loomiarts.com",
			synopsisLabel:"Sinopse",
			synopsisText:"Há algumas décadas, a Terra foi descoberta por alienígenas. Após o primeiro contato com os seres humanos, os extraterrestres logo se instalaram por todo o planeta, trazendo muitas promessas de progresso e modernidade. No entanto, a relação logo se mostrou opressora e violenta. Surge então o grupo antiextraterrestre Esquadrão 51, que combate a opressão alienígena em batalhas aéreas pelos céus de todo o mundo.",
			styleLabel:"Gênero",
			styleText:"SHMUP",
			platformsLabel:"Plataformas",
			releaseDateLabel:"Lançamento",
			mainFeaturesLabel:"Principais características",
			mainFeaturesText1:"Seis fases em variados ambientes: alto-mar, neve, floresta etc.",
			mainFeaturesText2:"Estética audiovisual que remete a filmes antigos de ficção científica de discos voadores e monstros",
			mainFeaturesText3:"Quatro tipos de aviões para controlar (de acordo com a fase)",
			mainFeaturesText4:"Multiplayer local para dois jogadores (cooperativo)",
			mainFeaturesText5:"Narrativa contada através de cutscenes em FMV e diálogos durante o gameplay (conversas entre os pilotos, via rádio) (dublados em português)",
			awardsLabel:"Premiações",
			awardsText1:"BIG Festival 2017: Melhor Arte (finalista), Melhor Jogo Brasileiro (finalista)",
			awardsText2:"Festival de Jogos do SBGames 2017: Melhor Visual (vencedor), Melhor Áudio (finalista), Melhor Tecnologia (finalista)",
			inGameScreenshotsLabel:"Screenshots do jogo",
			inGameScreenshotsInfoLabel:"(Botão direito do mouse > \"Salvar imagem como...\" para baixar a imagem em alta resolução)",
			logosAndPromotionalImagesLabel:"Logos e imagens promocionais",
			fmvProductionStillsLabel:"Stills das filmagens das sequências em FMV",
		},
		images: {
		}
	};
}

function createEnglishLanguage()
{
	return {
		strings: {
			pressKitTitle:"SQUADRON 51 PRESS KIT",
			internationalTitleLabel:"International title",
			originalTitleLabel:"Original title (portuguese)",
			publisherAndDeveloperLabel:"Publisher and developer",
			publisherAndDeveloperInfoText:"São Leopoldo, RS, Brazil\nloomiarts.com\nfacebook/loomiarts\ntwitter/loomiarts\ncontact@loomiarts.com",
			synopsisLabel:"Synopsis",
			synopsisText:"Decades ago, Earth was discovered by aliens. After the first encounter with the human beings, the extraterrestrials soon arrived by all over the planet, bring with them a lot of promises of progress and modernity. However, the relationship soon became oppressor and violent. Then, the antiextraterrestrial group Squadron 51 arrives, fighting the alien oppresion in aircraft battles all around the world.",
			styleLabel:"Style",
			styleText:"SHMUP",
			platformsLabel:"Platforms",
			releaseDateLabel:"Release date",
			mainFeaturesLabel:"Main features",
			mainFeaturesText1:"Six levels, many kinds of environments: above the ocean, glacial montains, caves, storms and others",
			mainFeaturesText2:"Sound and graphics that refer to old sci-fi movies from the fifties, including flying saucers and monsters",
			mainFeaturesText3:"Four different aircrafts to play along the game",
			mainFeaturesText4:"Local multiplayer mode for two players (cooperative)",
			mainFeaturesText5:"Story that is told through FMV cutscenes and dialogues between the pilots during gameplay",
			awardsLabel:"Awards",
			awardsText1:"BIG Festival 2017: Best Arte (finalist), Best Brazilian Game (finalist)",
			awardsText2:"SBGames 2017: Best Graphics (winner), Best Sound (finalist), Best Technology (finalist)",
			inGameScreenshotsLabel:"In-game screenshots",
			inGameScreenshotsInfoLabel:"(Right click > \"Save image as...\" to download high resolution images)",
			logosAndPromotionalImagesLabel:"Logos and promotional images",
			fmvProductionStillsLabel:"FMV production stills",
		},
		images: {
		}
	};
}



function getLanguageToBeUsed()
{
	if (document.location.search == "?lang=en")
		return createEnglishLanguage();
	else if (navigator.language.startsWith("pt") || document.location.search == "?lang=pt")
		return createPortugueseLanguage();
	else
		return createEnglishLanguage();
}

function applyLanguage(language)
{
	for (var key in language.strings)
	{
		var str = language.strings[key];
		$("#" + key).text(str);
	}
	for (var key in language.images)
	{
		var imageData = language.images[key];
		var images = $("#" + key);
		images.attr("src", imageData.src);
		images.attr("alt", imageData.alt);
	}
}

$(window).on('load', function ()
{
	applyLanguage(getLanguageToBeUsed());
});
