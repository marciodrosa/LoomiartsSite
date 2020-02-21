$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				squadron51HeadlineText:"ALIENÍGENAS DESCOBREM A TERRA!",
				squadron51Text1:"Junte-se ao ESQUADRÃO 51 e lute contra os inimigos extraterrestres!",
				squadron51Text2:"ESQUADRÃO 51 é um SHMUP que coloca o jogador na pele da Tenente Kaya em batalhas nos céus de todo o planeta! Jogue como se estivesse em uma autêntica ficção científica dos anos 50!",
				squadron51MainFeaturesHeadlineText:"PRINCIPAIS CARACTERÍSTICAS",
				squadron51FeatureText1:"• Seis fases, diferentes tipos de ambientes: sobre o oceano, montanhas geladas, cavernas, tempestades e muitos outros",
				squadron51FeatureText2:"• Quatro diferentes aeronaves pilotadas ao longo do jogo",
				squadron51FeatureText3:"• Narrativa contada através de cutscenes (filmadas em live-action, como um filme!) e diálogos entre os pilotos, que podem ser ouvidos durante o gameplay",
				squadron51FeatureText4:"• Multiplayer local cooperativo para dois jogadores",
			},
			images: {
				squadron51BannerImage: {
					src:"Images/BannerSitePT.jpg",
					alt:"Logo do jogo Esquadrão 51"
				}
			}
		};
	}

	function englishDictionary()
	{
		return {
			strings: {
				squadron51HeadlineText:"THE ALIENS DISCOVER EARTH!",
				squadron51Text1:"Join the SQUADRON 51 and fight against extraterrestrial enemies!",
				squadron51Text2:"SQUADRON 51 is a SHMUP game where the player plays as Lieutenant Kaya in aircraft battles all around the world! Play as you were in an authentic sci-fi movie from the fifties!",
				squadron51MainFeaturesHeadlineText:"MAIN FEATURES",
				squadron51FeatureText1:"• Six levels, many kinds of environments: above the ocean, glacial montains, caves, storms and many others",
				squadron51FeatureText2:"• Four different aircrafts to play along the game",
				squadron51FeatureText3:"• Story that is told through cutscenes (FMV sequences, like a movie!) and dialogues between the pilots during gameplay",
				squadron51FeatureText4:"• Local and cooperative multiplayer mode for two players",
			},
			images: {
				squadron51BannerImage: {
					src:"Images/BannerSiteEN.jpg",
					alt:"Squadron 51 game logo"
				}
			}
		};
	}

	applyAppropriateLanguage(portugueseDictionary, englishDictionary)
});
