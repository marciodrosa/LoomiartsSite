$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				aboutLoomiartsText:"Loomiarts é um estúdio de desenvolvimento de jogos. Em parceria com a Fehorama Filmes, lançamos o nosso primeiro projeto: o ESQUADRÃO 51 CONTRA DOS DISCOS VOADORES, um shoot'em up com estética de filmes de ficção científica dos anos 50, publicado pela WhisperGames e Assemble Entertainment.",
				squadron51Title:"ESQUADRÃO 51 CONTRA DOS DISCOS VOADORES",
				squadron51ComingSoon:"Em breve",
				squadron51Text:"Esquadrão 51 Contra dos Discos Voadores é um shoot'em up para PC e consoles com estética de filmes de ficção científica dos anos 50.\n\nDesenvolvido por Loomiarts e Fehorama Filmes e publicado por WhisperGames e Assemble Entertainment.\n\n Já disponível na Steam, em breve para Xbox One, PlayStation 4 e Nintendo Switch.",
				squadron51TrailerLink:"https://www.youtube.com/watch?v=Rd_vTUSy-MQ",
				contactHeadlineText:"CONTATO",
				contactEmailText:"Para entrar em contato com a Loomiarts, envie um e-mail para:",
				contactEmail:"contato@loomiarts.com",
				downloadPresskitText:"Clique no botão abaixo para acessar o press kit do jogo Esquadrão 51 Contra dos Discos Voadores:",
				contactFacebookText:"Curta as nossas páginas no Facebook:",
				contactSquadron51FacebookButton:"Esquadrão 51...",
				contactTwitterText:"Siga a Loomiarts no Twitter:",
				contactYoutubeText:"Inscreva-se no canal do Youtube da Loomiarts:"
			},
			images: {
				squadron51BannerImage: {
					src:"Images/BannerSitePT.jpg",
					alt:"Esquadrão 51 Contra dos Discos Voadores: clique para mais informações"
				}
			}
		};
	}

	function englishDictionary()
	{
		return {
			strings: {
				aboutLoomiartsText:"Loomiarts is a game studio. In partnership with Fehorama Filmes, we developed our first project: SQUAD 51 VS. THE FLYING SAUCERS, a shoot'em up with aesthetics directly inspired by sci-fi movies from the fifties, published by WhisperGames and Assemble Entertainment.",
				squadron51Title:"SQUAD 51 VS. THE FLYING SAUCERS",
				squadron51ComingSoon:"Coming soon",
				squadron51Text:"Squad 51 vs. the Flying Saucers is a shoot'em up for PC and consoles with aesthetics directly inspired by sci-fi movies from the fifties.\n\nDeveloped by Loomiarts and Fehorama Filmes and published by WhisperGames and Assemble Entertainment.\n\nAlready available on Steam, coming soon on Xbox One, PlayStation 4 and Nintendo Switch.",
				squadron51TrailerLink:"https://www.youtube.com/watch?v=sK1WevYwhpI",
				contactHeadlineText:"CONTACT",
				contactEmailText:"To get in touch with Loomiarts, please send an e-mail to:",
				contactEmail:"contact@loomiarts.com",
				downloadPresskitText:"Click the button below to access the Squad 51 vs. the Flying Saucers press kit:",
				contactFacebookText:"Follow our pages on Facebook:",
				contactSquadron51FacebookButton:"Squad 51...",
				contactTwitterText:"Follow Loomiarts on Twitter:",
				contactYoutubeText:"Subscribe to Loomiarts Youtube channel:"
			},
			images: {
				squadron51BannerImage: {
					src:"Images/BannerSiteEN.jpg",
					alt:"Squad 51 vs. the Flying Saucers: click for additional information"
				}
			}
		};
	}

	applyAppropriateLanguage(portugueseDictionary, englishDictionary)
});
