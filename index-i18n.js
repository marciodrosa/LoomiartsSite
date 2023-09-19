$(function() {
	function portugueseDictionary()
	{
		return {
			strings: {
				aboutLoomiartsTitle:"Sobre",
				aboutLoomiartsText:"\tOlá. Meu nome é Márcio Rosa e eu sou um desenvolvedor de jogos. Loomiarts é a versão estúdio de mim mesmo, digamos assim. Não é uma empresa com uma estrutura de fato: não tem pessoal, estrutura física ou coisas do tipo e nunca terá - não tenho “mindset” (como dizem) para negócios ou sobre como gerenciar uma companhia.\n\n\tTampouco me considero, no entanto, um desenvolvedor “solo”: embora tenha começado sozinho a concepção do jogo Esquadrão 51 Contra os Discos Voadores, lá nos idos de 2016, sempre foi a intenção evoluir para um projeto colaborativo. E foi assim que, com o passar dos anos, colaboradores como a KF Studios, a FornoFX e a Fehorama Filmes foram se unindo ao projeto para dar forma àquilo que viria a ser lançado em 2022. E é dessa forma que pretendo que futuras produções venham também a acontecer.",
				squadron51Title:"ESQUADRÃO 51 CONTRA DOS DISCOS VOADORES",
				squadron51ComingSoon:"Em breve",
				squadron51Text:"Esquadrão 51 Contra dos Discos Voadores é um shoot'em up para PC e consoles com estética de filmes de ficção científica dos anos 50.\n\nDesenvolvido por Loomiarts e Fehorama Filmes e publicado por WhisperGames e Assemble Entertainment.\n\n Já disponível para PC (Steam), Nintendo Switch, Xbox e PlayStation.",
				squadron51TrailerLink:"https://www.youtube.com/watch?v=Rd_vTUSy-MQ",
				contactHeadlineText:"Contato",
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
				aboutLoomiartsTitle:"About",
				aboutLoomiartsText:"\tHi there. My name is Márcio Rosa and I am a game developer. Loomiarts is a game dev studio version of myself, let’s say this way. It doesn’t have a true structure of a real company, like a physical structure or staff, and it never will - I don’t have the mindset to be a businessman or to manage a company.\n\n\tThis doesn’t mean I am a so-called “solo developer”: although I have started the conception of the game Squad 51 vs. the Flying Saucers by myself, circa 2016, it was always my intention to make it a collaborative project. In the following years, collaborators like KF Studios, FornoFX and Fehorama Filmes joined the project to create and finalize the game that would be finally released in 2022. I have a personal desire to keep making games using this kind of approach.",
				squadron51Title:"SQUAD 51 VS. THE FLYING SAUCERS",
				squadron51ComingSoon:"Coming soon",
				squadron51Text:"Squad 51 vs. the Flying Saucers is a shoot'em up for PC and consoles with aesthetics directly inspired by sci-fi movies from the fifties.\n\nDeveloped by Loomiarts and Fehorama Filmes and published by WhisperGames and Assemble Entertainment.\n\nAlready available on Steam, Nintendo Switch, Xbox and PlayStation.",
				squadron51TrailerLink:"https://www.youtube.com/watch?v=sK1WevYwhpI",
				contactHeadlineText:"Contact",
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
