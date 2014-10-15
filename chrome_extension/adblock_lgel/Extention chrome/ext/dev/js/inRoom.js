define([],
function () {
	var inRoom = function () {
		this.newsRead = 1;
		this.refreshRoomDelay = 100000000;
		this.refreshRoomDate = Date.now();
	}

	inRoom.prototype.refresh = function () {
		if (document.getElementById('espace_detente') != null) {// Si le joueur est dans la liste des parties
			if (Date.now() - this.refreshRoomDate >= this.refreshRoomDelay) {
				window.actualiseRoom2(1);
				this.refreshRoomDate = Date.now();
			}
			if (!this.newsRead) {
				if (window.mininewsExt != undefined) {
					setTimeout(function () { 
						window.mininewsExt('Bonjour à tous. Ce sont vos créateurs adblock LGEL qui vous parlent.<br/>Juste une petite info. Ne vous laissez pas influencer par les propos de Lesterpig qui veut faire croire que l\'application est nuisible pour le site. Je suis Orophin , les premières personnes à avoir eu l\'add on sont mes potes de ce jeu, notre unique but est justement de contrer leurs politique capitaliste basée sur le mensonge et l\'intimidation en offrant réellement aux joueurs des choses agréables.<br/>Nous avions même pensé mettre toutes les sources de notre add-on en open source pour montrer patte blanche la seule raison qui nous en empêche est que lgel pourrait anticiper tout ce qu\'on fait. Ne craignez rien, nous avons d\'autres projets (qui eux ne concernent pas du tout LGEL) et il ne serait vraiment pas dans notre intérêt de vouloir nuire au bons fonctionnement du site.<br/>C\'est la première fois que la Gestapo se retrouve face à un problème qui va dans le sens des joueurs. Ils tentent ce qu\'ils peuvent pour nous contrer de façon à continuer leur censure. (Si vous voulez plus d\'informations sur les magouilles du site c\'est <a href="http://delfisakura.com/magouille.png">ici</a> ou encore <a href="http://delfisakura.com/magouille2.png">là</a>, posts qui ont été caché sur le forum par la modération après leurs envois.)<br/><br/>Bonnes parties et à bientôt.');
					}, 1000);
					this.newsRead = 1;
				}
			}
		}
	};

	return new inRoom ();
})