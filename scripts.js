$(initLanguage);

function createPortugueseLanguage()
{
	return {
		strings: {
			menuItemHomeText:"Início",
			menuItemSquadron51Text:"Esquadrão 51",
			menuItemContactText:"Contato",
			aboutLoomiartsText1:"Loomiarts é um estúdio brasileiro de desenvolvimento de jogos independentes localizado em São Leopoldo, RS.",
			aboutLoomiartsText2:"A empresa foi fundada em 2017 e atualmente desenvolve o Esquadrão 51, um SHMUP com previsão de lançamento para 2018.",
			squadron51BannerImage:"Images/Squadron51BannerSitePT.png",
			squadron51HeadlineText:"ALIENÍGENAS DESCOBREM A TERRA!",
			squadron51Text1:"Junte-se ao ESQUADRÃO 51 e lute contra os inimigos extraterrestres!",
			squadron51Text2:"ESQUADRÃO 51 é um SHMUP que coloca o jogador na pele da Tenente Kaya em batalhas nos céus de todo o planeta! Jogue como se estivesse em uma autêntica ficção científica dos anos 50!",
			squadron51MainFeaturesHeadlineText:"PRINCIPAIS CARACTERÍSTICAS",
			squadron51FeatureText1:"&bull; Seis fases, diferentes tipos de ambientes: sobre o oceano, montanhas geladas, cavernas, tempestades etc.",
			squadron51FeatureText2:"&bull; Quatro diferentes aeronaves pilotadas ao longo do jogo.",
			squadron51FeatureText3:"&bull; Narrativa contada através de cutscenes e diálogos entre os pilotos, que podem ser ouvidos durante o gameplay.",
			squadron51FeatureText4:"&bull; Multiplayer local cooperativo para dois jogadores.",
			squadron51FeatureText5:"&bull; Previsão de lançamento: segundo semestre de 2018.",
			contactHeadlineText:"CONTATO",
			contactEmailText:"Para entrar em contato com a Loomiarts, mande um e-mail para <b>contato@loomiarts.com</b>",
			contactFacebookText:"Curta as nossas páginas no Facebook:",
			contactSquadron51FacebookButton:"Esquadrão 51",
			contactTwitterText:"Siga a Loomiarts no Twitter:",
			contactYoutubeText:"Para acompanhar os vídeos dos jogos da Loomiarts, inscreva-se no canal do Youtube:"
		},
		images: {
			squadron51BannerImage: {
				src:"Images/Squadron51BannerSitePT.png",
				alt:"Logo do jogo Esquadrão 51"
			}
		}
	};
}

function createEnglishLanguage()
{
	return {
		strings: {
			menuItemHomeText:"Home",
			menuItemSquadron51Text:"Squadron 51",
			menuItemContactText:"Contact",
			aboutLoomiartsText1:"Loomiarts is an indie game studio located in São Leopoldo, Brazil.",
			aboutLoomiartsText2:"The company was founded in 2017 and it's currently developing the game Squadron 51, a SHMUP with release date schedule to the end of 2018.",
			squadron51BannerImage:"Images/Squadron51BannerSiteEN.png",
			squadron51HeadlineText:"ALIENS DISCOVER THE EARTH!",
			squadron51Text1:"Join the SQUADRON 51 and fight agains the alien enemies!",
			squadron51Text2:"SQUADRON 51 is a SHMUP game where the player plays as Lieutenant Kaya in aircraft battles all around the world! Play as you were in an authentic sci-fi movie from the fifties!",
			squadron51MainFeaturesHeadlineText:"MAIN FEATURES",
			squadron51FeatureText1:"&bull; Six levels, many kinds of environments: above the ocean, glacial montains, caves, storms and others.",
			squadron51FeatureText2:"&bull; Four different aircrafts to play along the game.",
			squadron51FeatureText3:"&bull; Story that is told through cutscenes and dialogues between the pilots during gameplay.",
			squadron51FeatureText4:"&bull; Local and cooperative multiplayer mode for two players.",
			squadron51FeatureText5:"&bull; Target release date: ending of 2018.",
			contactHeadlineText:"CONTACT",
			contactEmailText:"To talk with Loomiarts, please send an e-mail to <b>contact@loomiarts.com</b>",
			contactFacebookText:"Like our pages on Facebook:",
			contactSquadron51FacebookButton:"Squadron 51",
			contactTwitterText:"Follow Loomiarts on Twitter:",
			contactYoutubeText:"To see all gameplay videos and trailers, subscribe to the Loomiarts Youtube channel:"
		},
		images: {
			squadron51BannerImage: {
				src:"Images/Squadron51BannerSiteEN.png",
				alt:"Squadron 51 game logo"
			}
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
		$("#" + key).html(str);
	}
	for (var key in language.images)
	{
		var imageData = language.images[key];
		var images = $("#" + key);
		images.attr("src", imageData.src);
		images.attr("alt", imageData.alt);
	}
}

function initLanguage()
{
	applyLanguage(getLanguageToBeUsed());
}
