function portugueseDictionary()
{
	return {
		strings: {
			menuItemHomeText:"Início",
			menuItemSquadron51Text:"Esquadrão 51",
			menuItemContactText:"Contato",
			aboutLoomiartsText:"Loomiarts é um estúdio de desenvolvimento de jogos independentes. Em parceria com a Fehorama Filmes, a Kiko Ferraz Studios e a Abóbora Filmes, estamos desenvolvendo o nosso primeiro projeto: o ESQUADRÃO 51, um shoot'em up com estética de filmes de ficção científica dos anos 50 e sequências em live-action (FMV) com previsão de lançamento para 2019.",
			squadron51BannerImage:"Images/Squadron51BannerSitePT.png",
			squadron51HeadlineText:"ALIENÍGENAS DESCOBREM A TERRA!",
			squadron51Text1:"Junte-se ao ESQUADRÃO 51 e lute contra os inimigos extraterrestres!",
			squadron51Text2:"ESQUADRÃO 51 é um SHMUP que coloca o jogador na pele da Tenente Kaya em batalhas nos céus de todo o planeta! Jogue como se estivesse em uma autêntica ficção científica dos anos 50!",
			squadron51MainFeaturesHeadlineText:"PRINCIPAIS CARACTERÍSTICAS",
			squadron51FeatureText1:"• Seis fases, diferentes tipos de ambientes: sobre o oceano, montanhas geladas, cavernas, tempestades e muitos outros",
			squadron51FeatureText2:"• Quatro diferentes aeronaves pilotadas ao longo do jogo",
			squadron51FeatureText3:"• Narrativa contada através de cutscenes (filmadas em live-action, como um filme!) e diálogos entre os pilotos, que podem ser ouvidos durante o gameplay",
			squadron51FeatureText4:"• Multiplayer local cooperativo para dois jogadores",
			contactHeadlineText:"CONTATO",
			contactEmailText:"Para entrar em contato com a Loomiarts, envie um e-mail para:",
			contactEmail:"contato@loomiarts.com",
			downloadPresskitText:"Clique no botão abaixo para acessar o press kit do jogo Esquadrão 51:",
			contactFacebookText:"Curta as nossas páginas no Facebook:",
			contactSquadron51FacebookButton:"Esquadrão 51",
			contactTwitterText:"Siga a Loomiarts no Twitter:",
			contactYoutubeText:"Inscreva-se no canal do Youtube da Loomiarts:"
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
			menuItemHomeText:"Home",
			menuItemSquadron51Text:"Squadron 51",
			menuItemContactText:"Contact",
			aboutLoomiartsText:"Loomiarts is an indie game studio. In partnership with Fehorama Filmes, Kiko Ferraz Studios and Abóbora Filmes, we are working on our first project: SQUADRON 51, a shoot'em up with a 50's sci-fi movies' aesthetics and live-action cinematics (FMV) with a release date schedule to 2019.",
			squadron51BannerImage:"Images/Squadron51BannerSiteEN.png",
			squadron51HeadlineText:"THE ALIENS DISCOVER EARTH!",
			squadron51Text1:"Join the SQUADRON 51 and fight against extraterrestrial enemies!",
			squadron51Text2:"SQUADRON 51 is a SHMUP game where the player plays as Lieutenant Kaya in aircraft battles all around the world! Play as you were in an authentic sci-fi movie from the fifties!",
			squadron51MainFeaturesHeadlineText:"MAIN FEATURES",
			squadron51FeatureText1:"• Six levels, many kinds of environments: above the ocean, glacial montains, caves, storms and many others",
			squadron51FeatureText2:"• Four different aircrafts to play along the game",
			squadron51FeatureText3:"• Story that is told through cutscenes (FMV sequences, like a movie!) and dialogues between the pilots during gameplay",
			squadron51FeatureText4:"• Local and cooperative multiplayer mode for two players",
			contactHeadlineText:"CONTACT",
			contactEmailText:"To get in touch with Loomiarts, please send an e-mail to:",
			contactEmail:"contact@loomiarts.com",
			downloadPresskitText:"Click the button below to access the Squadron 51 press kit:",
			contactFacebookText:"Follow our pages on Facebook:",
			contactSquadron51FacebookButton:"Squadron 51",
			contactTwitterText:"Follow Loomiarts on Twitter:",
			contactYoutubeText:"Subscribe to Loomiarts Youtube channel:"
		},
		images: {
			squadron51BannerImage: {
				src:"Images/BannerSiteEN.jpg",
				alt:"Squadron 51 game logo"
			}
		}
	};
}

$(window).on('load', function ()
{
	applyAppropriateLanguage(portugueseDictionary, englishDictionary)
	$(".loading-spinner").hide();
	$("#navbar").show();
	$("#main").show();
});

$(function() {
	$("#squadron51").click(function() {
		window.open("squadron51.html", "_self");
	});
	$("#squadron51").mouseenter(function() {
		$("#squadron51").animate({transform: "scale(0.7)"});
	});
});
