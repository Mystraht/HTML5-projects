define(["emoticone", "parsing"],
function (emoticone, parsing ) {

	inGame = function () {
		this.playerArray = [] ;
		this.adskiped = 0 ;
		this.aUs = 1484 ;
		this.rangFonction = 89;
	}

	inGame.prototype.refresh = function () {
		try {
			if (document.getElementById('colonneGauche') != null ) { // Si le joueur est en parti
				var joueursTableau = document.getElementById("joueursTableau")
				for ( var i = 0 ; i < 50 ; i++ ) {
					var playerClassObj = parsing.getElementByClass(joueursTableau, "player", i);
					var trInner = parsing.getElementByTr(joueursTableau, i)
					if ( (typeof (playerClassObj) != 'undefined') && (trInner.innerHTML.search("checkbox") == -1) ) {
						if (this.playerArray[playerClassObj.innerHTML] == 1) {
							var random = Math.floor(Math.random() * 1000000);
							trInner.innerHTML = '<input type="checkbox" name="'+ playerClassObj.innerHTML +'" value="playerBox" id="' + random + '"> <img src="http://www.loups-garous-en-ligne.com/jeu/assets/images/i_world.gif" alt="Profil du joueur" onclick="Infos(\'' + playerClassObj.innerHTML + '\')">' + trInner.innerHTML;
							document.getElementById(random).checked = true;
						} else {
							trInner.innerHTML = '<input type="checkbox" name="'+ playerClassObj.innerHTML +'" value="playerBox"> <img src="http://www.loups-garous-en-ligne.com/jeu/assets/images/i_world.gif" alt="Profil du joueur" onclick="Infos(\'' + playerClassObj.innerHTML + '\')">' + trInner.innerHTML;
						}
					}
				}
				emoticone.displayOnChat();
				this.checkHighlights();
				
				// Pre-enlève la pub coté interface
				var immViewer = document.getElementById('immViewer');
				var colonneGaucheDiv = document.getElementById('colonneGauche');
				var aylPubDiv = document.getElementById('ayl_0_root');
				var selfpromoteWrapperDiv = document.getElementById('selfpromoteWrapper');
				var blackoutDiv = document.getElementById('blackout');
				colonneGaucheDiv.style.display = "block";
				if (aylPubDiv != null) {
					aylPubDiv.innerHTML = "";
				}
				if (selfpromoteWrapperDiv != null) {
					selfpromoteWrapperDiv.style.display = "none"
				}
				blackoutDiv.style.display = "none";
				immViewer.style.left = "100000px";
				immViewer.removeAttribute("align");
				try {
					if (document.getElementById("lien").innerHTML.indexOf("jouer") > 0) {
						document.getElementById("lien").innerHTML = "La pub a été bloqué. <br />Vous allez bientôt pouvoir mettre prêt."
						document.getElementById("lien").onclick = "";
						document.getElementById("lien").onMouseOver = "";
						document.getElementById("lien").style.cursor = "auto";
						document.getElementById("lien").style.textDecoration = "none";
					}
				}
				catch(err) {

				}

				// Enleve la pub en arrière plan
				if ( ( immViewer.style.display == "block" ) && (this.adskiped != 1) ||
					 (document.getElementById("lien").innerHTML.indexOf("jouer") > 0) && (this.adskiped != 1) || 
					 (document.getElementById("lien").innerHTML.indexOf("pub") > 0) && (this.adskiped != 1) ) {

					var that = this;
					that.adskiped = 1;
					// recherche le player ID
					var text = "";
				    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
				    for( var i=0; i < 5; i++ ) text += possible.charAt(Math.floor(Math.random() * possible.length));
					var playerID;
					var dataLength;
					var myId;
					var found;
					found = 0
					try {
						window.IWannaPlay[text]();
					}
					catch(err) {
						// console.log( "e" + err );
						data = "e" + err;
						data = data.toString();
						index = data.search('\\("') ;
						myId = data.substr(index + 5) ;
						while (found != 1) {
							index = myId.search('\\("') ;
							if ( Math.floor(myId[index + 2]) >= 0 ) {
								if (( myId.substr(index + 2, 8).search('"') == -1 ) || ( myId.substr(index + 2, 8).search("'") == -1 )) {
									myId = myId.substr(index + 2, 8) ;
								} else {
									myId = myId.substr(index + 2, 8) ;
								}
								playerID = myId;
								found = 1;
							}
							myId = myId.substr(index + 5) ;
						}
					}
					if (Math.floor(playerID) < 10000) {
						found = 0
						try {
							window.IWannaPlay[text]();
						}
						catch(err) {
							// console.log( "e" + err );
							data = "e" + err;
							data = data.toString();
							index = data.search("\\('") ;
							myId = data.substr(index + 5) ;
							while (found != 1) {
								index = myId.search("\\('") ;
								if ( ( Math.floor(myId[index + 2]) >= 0 ) && (myId[index - 35] != "/") ) {
									myId = myId.substr(index + 2, 8) ;
									playerID = myId;
									found = 1;
								}
								myId = myId.substr(index + 5) ;
							}
						}
					}
					if (Math.floor(playerID) >= 1) {
						setTimeout(function () {
							$.post("http://www.loups-garous-en-ligne.com/jeu/externe/adWatched.php", {
								"adblock" : "false",
								"hopeYouLikePonies" : playerID
							}, function () {
								setTimeout("window.location = 'index.php';", 1000);
							});
						}, 20000);
					}
				}
			}
		}
		catch(err) { console.log("Error to get class" + err); }
	}


	inGame.prototype.checkHighlights = function () {
		var checkBox = document.getElementsByTagName('input');
		for(var i = 0 ; i < checkBox.length ; i++)
		{
		    if(checkBox[i].value == "playerBox") {
		    	if (checkBox[i].checked == true) {
		    		this.highlights(checkBox[i].name, 1);
		    		this.playerArray[checkBox[i].name] = 1;
		    	} else {
					this.highlights(checkBox[i].name, 0);
					this.playerArray[checkBox[i].name] = 0;
		    	}
		    }
		}
	}

	inGame.prototype.highlights = function (pseudo, state) {
		var canal_meneur = document.getElementsByClassName('canal_joueurs');
		for(i = 0 ; i < canal_meneur.length ; i++)
		{
		    if(canal_meneur[i].innerHTML.search(pseudo) != -1) {
		    	if (state == 1) {
		    		canal_meneur[i].style.backgroundColor = "#FCC518";
		    	} else {
		    		canal_meneur[i].style.backgroundColor = "";
		    	}
		    }
		}
	}
	return new inGame();
});