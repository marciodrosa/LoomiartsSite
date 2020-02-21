$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				aboutLoomiartsText:"Loomiarts é um estúdio de desenvolvimento de jogos independentes. Em parceria com a Fehorama Filmes, a Kiko Ferraz Studios e a Abóbora Filmes, estamos desenvolvendo o nosso primeiro projeto: o ESQUADRÃO 51, um shoot'em up com estética de filmes de ficção científica dos anos 50 e sequências em live-action (FMV) com previsão de lançamento para 2019.",
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
					alt:"Esquadrão 51: clique para acessar a página"
				}
			}
		};
	}

	function englishDictionary()
	{
		return {
			strings: {
				aboutLoomiartsText:"Loomiarts is an indie game studio. In partnership with Fehorama Filmes, Kiko Ferraz Studios and Abóbora Filmes, we are working on our first project: SQUADRON 51, a shoot'em up with a 50's sci-fi movies' aesthetics and live-action cinematics (FMV) with a release date schedule to 2019.",
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
					alt:"Squadron 51: click to access the page"
				}
			}
		};
	}
	
	applyAppropriateLanguage(portugueseDictionary, englishDictionary)
});
