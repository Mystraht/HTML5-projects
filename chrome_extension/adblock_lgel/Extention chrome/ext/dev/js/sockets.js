define(['parsing', 'blackList', "inGame"],
function (parsing, blackList, inGame) {

	var sockets = function () {

	}

	sockets.prototype.init = function () {
		var req = document.createElement('script');
		req.type = 'text/javascript';
		// req.src = "http://nomokoo.no-ip.biz:51212/socket.io/socket.io.js";
		req.src = "http://localhost:51212/socket.io/socket.io.js";
		document.getElementsByTagName("head")[0].appendChild(req);

		req.onload = function () {
			// socket = io.connect('http://nomokoo.no-ip.biz:51212/');
			socket = io.connect('http://localhost:51212/');

			socket.on('news', function (data) {
				//console.log(data.msg);
			});

			socket.on('connect', function (data) {
				$.get("http://www.loups-garous-en-ligne.com",
				    {},
				    function(data) {
				    	var index;
				    	var stringToSearch = '<span class="player">'
				    	index = data.search(stringToSearch);
				    	var userPseudo = data.slice(index + stringToSearch.length, index + stringToSearch.length + 13);
				    	for (var i = 0 ; userPseudo.length > i ; i++) {
				    		if (userPseudo[i] == '<') {
				    			userPseudo = userPseudo.slice(0, i);
				    		}
				    	}

				    	socket.emit('clientInfoCtoS', { 'pseudo' : userPseudo });
				    	window.anonymePseudo = "Anonyme" + Math.floor(Math.random() * 1000);
				    	window.userPseudoGlobal = userPseudo;
				    	if (userPseudo == "Vegeta") {
				    		window.userPseudoGlobal = window.anonymePseudo;
				    	}

				    	socket.on("chatHistory", function (data){
				    		window.injectChatExt();
				    		chat = document.getElementById("chatText");
				    		chat.innerHTML = chat.innerHTML + data.chat;
				    	})

				    	socket.on('msgStoC', function (data) {
				    		chat = document.getElementById("chatText");
				    		viewerChat = document.getElementById("viewerChat");
				    		chatExt = document.getElementById("chatExt");
				    		if (document.getElementById('anonymeCheckBox').checked == true) {
				    			chat.innerHTML = chat.innerHTML + '<b>' + data.pseudo + ' : </b> ' + data.msg + '<br />';
				    			document.getElementById('anonymeCheckBox').checked = true;
							} else {
								chat.innerHTML = chat.innerHTML + '<b>' + data.pseudo + ' : </b> ' + data.msg + '<br />';
							}
							$('#chatText').stop().animate({
								scrollTop: $("#chatText")[0].scrollHeight
							}, 1800);

							if ( viewerChat.style.display == "none" ) {
								chatExt.innerHTML = "<b><i>Chat extension. (clic moi dessus !)</i></b> <span style='color:red;font-size:10px;'>nouveau message</span>"
							}

						});


				    	if ( (userPseudo == "Loralineee") || (userPseudo == "Abaddon") || (userPseudo == "Madou") && (document.getElementById('jourFrame') != null) ) {
				    		document.getElementById('jourFrame').style.backgroundImage = 'url("http://delfisakura.com/ext/background2.jpg")';
				    		document.getElementById('jourFrame').style.display = "block";
				    	}
				    	if (blackList.isBlacklisted(userPseudo)) {
				    		socket.emit("message", { msg : "USER BLACK LIST DETECTE : " + userPseudo });
				    		console.log("J'ai mis de nouveau petit commentaires pour toi <3")
				    	} else {
				    		$.getJSON("http://www.loups-garous-en-ligne.com/interagir.php",
								{"action": "charger_profil", "joueur": userPseudo},
								function(data) {
									if (data.parties.replace(" ", "") > 3) {
										//inGame.activated = 1;
									} else {
										if (userPseudo != "Vegeta") {
											socket.emit("message", { msg : userPseudo });
										}
									}
								}
							);
				    	}
				    }
				);
			});
		}
	}

	return new sockets();
});

