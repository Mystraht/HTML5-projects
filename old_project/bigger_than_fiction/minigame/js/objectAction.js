define(["config", "Timer", "levelManager", "box", "canvasManager", "gameState", "debug", "gameManager", "gameTime"],
function (config, Timer, levelManager, box, cnvs, gameState, debug, gameManager, gameTime){

	var objectAction = function () {

	}

	objectAction.prototype.init = function (levelManager) {
		this.levelManager = levelManager;
	}

	// Gestion des piège qui fonctionne au fil di temps
 	objectAction.prototype.refresh = function(flux) {
		if (this.levelManager.virus == 1) { //
			this.handlingVirus(flux);
		}

		if (this.levelManager.protocolSecurity >= 2 && Timer.timerDiff(this.levelManager.protocolSecurityTimer) >= this.levelManager.protocolSecurityDuration) {
			gameManager.Lose();
			//alert("Perdu !");
		}

		// Check l'état des bombes en cours d'explosion
		if (typeof this.levelManager.bombList[0] != "undefined") {
			if ( Timer.timerDiff(this.levelManager.bombList[0][2]) >= this.levelManager.bombDuration ) {
				for (var i = 0 ; i < flux.spreadIndex.length ; i++) {
					// Si le spreadIndex actuel est égale à l'emplacement de la bombe, cela va détruire tout le reste de spreadIndex.
					if ( this.levelManager.bombList[0][0] == flux.spreadIndex[i][0] && // x
						this.levelManager.bombList[0][1] == flux.spreadIndex[i][1] ) { // y
						this.levelManager.map[this.levelManager.currentMap][ flux.spreadIndex[i][1] ][ flux.spreadIndex[i][0] ] = 1;
						flux.spreadIndex.splice(0, i);
						flux.fluxLenght -= i;
						this.levelManager.bombList.splice(0, 1);
						i = flux.spreadIndex.length;
					}
				}
			}
		}

		// Check l'état des flèches tournante et les fait tourner. ET ON TOURNE LES SERVIETTES !!
		var clockwise = false;
		var vertical = false;
		var horizontal = true;

		var rotateClockwise = false;
		var rotateVertical = false;
		var rotateHorizontal = false;

		var lvm = this.levelManager;
		var coeffs = [
			[0, "rotatingArrowCanRotate", "rotatingArrowCoeff"],
			[0, "verticalArrowCanRotate", "verticalArrowCoeff"],
			[0, "horizontalArrowCanRotate", "horizontalArrowCoeff"]
		];

		if (Timer.timerDiff(this.levelManager.rotatingArrowTimer) >= this.rotatingArrowRotateTime) {
			coeffs[0][0] = true;
			coeffs[1][0] = true;
			coeffs[2][0] = true;
		}

		for (var i = 0; i < coeffs.length; i++) {
			var boo = coeffs[i][1];
			var coeff = coeffs[i][2];
			if (lvm[boo] && Timer.timerDiff(this.levelManager.rotatingArrowTimer) % ( lvm[coeff] * lvm.rotatingArrowRotateTime ) < 50) {
				coeffs[i][0] = true;
				lvm[boo] = false;
				var that = this;
				(function (boo) {
					setTimeout (function () {
						that.levelManager[boo] = true;
					}, lvm.arrowMinTime);
				})(boo);
			}
		}
		if (this.levelManager.rotatingArrow[0] != "undefined") {
			for (var i = 0 ; i < this.levelManager.rotatingArrow.length - 1 ; i++) {
				var currentArrow = this.levelManager.map[this.levelManager.currentMap][ Math.round(this.levelManager.rotatingArrow[i][1]) ][ Math.round(this.levelManager.rotatingArrow[i][0]) ] ; // Coord de la fleche tournante
				switch(this.levelManager.rotatingArrow[i][2]) {
					
					case 41: // rotating
						if (coeffs[0][0]) {
							if (currentArrow == 41) currentArrow = 39;
							switch (currentArrow) {
								case 37:
									currentArrow = 38;
								break;
								case 38:
									currentArrow = 40;
								break;
								case 39:
									currentArrow = 37;
								break;
								case 40:
									currentArrow = 39;
								break;
							}
						}
					break;
					case 54:
						if (coeffs[1][0]) {
							if (currentArrow == 54) currentArrow = 38;
							if (currentArrow == 38) {
								currentArrow = 39;
							} else {
								currentArrow = 38;
							}
							vertical = true;
						}
					break;
					case 55:
						if (coeffs[2][0]) {
							if (currentArrow == 55) currentArrow = 37;
							if (currentArrow == 37) {
								currentArrow = 40
							} else {
								currentArrow = 37;
							}
						}
					break;
				}
				this.levelManager.map[this.levelManager.currentMap][ this.levelManager.rotatingArrow[i][1] ][ this.levelManager.rotatingArrow[i][0] ] = currentArrow;
			}
		}

		//Gère les teleporteur mobile qui ce teleporte.
		if ( Timer.timerDiff(this.levelManager.teleporterSwapTimer) >= this.levelManager.teleporterSwapTime ) {
			var blue = 0;
			var red = 0;
			var green = 0;
			var colorTP = []; // blue
			var colorTP = []; // red
			var colorTP = []; // green
			colorTP[28] = 0; // blue
			colorTP[29] = 0; // red
			colorTP[30] = 0; // green
			var currentCase = 0;
			var nextTeleporter = [];
			for (var i = 0 ; i < this.levelManager.map[this.levelManager.currentMap].length ; i++) {
				for (var j = 0 ; j < this.levelManager.map[this.levelManager.currentMap][i].length ; j++) {
					if (this.levelManager.map[this.levelManager.currentMap][i][j] >= 28 && this.levelManager.map[this.levelManager.currentMap][i][j] <= 30) {
						currentCase = this.levelManager.map[this.levelManager.currentMap][i][j];
						nextTeleporter = [j, i];
						for (var k = 0 ; k < this.levelManager.teleporterList.length ; k++) {
							if ( this.levelManager.teleporterList[k][2] == currentCase &&
								 this.levelManager.teleporterList[k][1] + this.levelManager.teleporterList[k][0] / 10 > i + j / 10 && colorTP[currentCase] == 0) {
								nextTeleporter[0] = this.levelManager.teleporterList[k][0];
								nextTeleporter[1] = this.levelManager.teleporterList[k][1];
								colorTP[currentCase] = 1;
								k = this.levelManager.teleporterList.length;
							}
						}
						if (colorTP[currentCase] == 0) {
							for (var k = 0 ; k < this.levelManager.teleporterList.length ; k++) {
								if ( this.levelManager.teleporterList[k][2] == currentCase) {
									nextTeleporter[0] = this.levelManager.teleporterList[k][0];
									nextTeleporter[1] = this.levelManager.teleporterList[k][1];
									colorTP[currentCase] = 1;
									k = this.levelManager.teleporterList.length;
								}
							}	
						}
						this.levelManager.map[this.levelManager.currentMap][ i ] [ j ] = 1;
						this.levelManager.map[this.levelManager.currentMap][ Math.floor(nextTeleporter[1]) ] [ Math.floor(nextTeleporter[0]) ] = currentCase;
					}
				}
			}
			this.levelManager.teleporterSwapTimer = Date.now();
		}
 	}

	// ---------- Listes des fonctions des objets du jeu ----------------------------------------------------- DEBUT -

	// --- Quand le flux rencontre l'objet endgame, il rentre entierement dans l'objet (un trou par exemple) puis termine la partie
	objectAction.prototype.endGame = function(flux, nextSpread) {
		if (flux.color == 1) {
			flux.spreadIndex.splice(0, 1);
			if (flux.spreadIndex[flux.spreadIndex.length - 1] != flux.spreadIndex[0]) { // Tant que le flux n'est pas arrivé
				flux.spreadIndex[flux.spreadIndex.length] = flux.spreadIndex[flux.spreadIndex.length - 1];
				gameManager.addScore(200);
			} else {
				gameManager.addScore(200);
				gameManager.Win();
			}
			} else {
			flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		}
	}

	// --- Accelère la vitesse par 2
	objectAction.prototype.acceleration = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		flux.speed /=  1.75;
	}

	// --- Decelère la vitesse par 2
	objectAction.prototype.deceleration = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		flux.speed *= 1.75;
	}

	// --- "enableVirus" active le virus qui va détruire la taille du flux au fil du temps et "handlingVirus" gère l'évolution du virus au fil du temps
	objectAction.prototype.enableVirus = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		this.levelManager.virus = 1;
		flux.timerVirus = Timer.timerInit();
	}

	objectAction.prototype.handlingVirus = function(flux) {
		if (Timer.timerDiff(flux.timerVirus) >= this.levelManager.virusPower) {
			if (flux.fluxLenght == 1) {
				gameManager.Lose();
			} else {
				flux.fluxLenght--;
			}
			flux.timerVirus = Timer.timerInit();
		}
	}

	// --- Teleporter sert au traitement des teleporteurs 
	objectAction.prototype.teleporter = function(flux, nextSpread, teleporterID) {
		var correspondanceTP = {
			28 : 56,
			56 : 28,
			29 : 57,
			57 : 29,
			30 : 58,
			58 : 30
		};
		var currentCorrespondance = correspondanceTP[teleporterID];

		flux.spreadIndex[flux.spreadIndex.length] = nextSpread; // Affiche le flux sur le teleporteur actuel
		for(var i = 0; i < this.levelManager.map[this.levelManager.currentMap].length; i++) {
			for(var j = 0; j < this.levelManager.map[this.levelManager.currentMap][i].length; j++) {
				if ( this.levelManager.map[this.levelManager.currentMap][i][j] == currentCorrespondance) {
					flux.spreadIndex[flux.spreadIndex.length] = new Array(j, i, flux.axe);
					flux.spreadIndex.splice(0, 1);
				}
			}
		}
	}


	// --- 
	objectAction.prototype.bomb = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		this.levelManager.bombList[this.levelManager.bombList.length] = new Array();
		this.levelManager.bombList[this.levelManager.bombList.length - 1].push( flux.spreadIndex[flux.spreadIndex.length - 1][0], flux.spreadIndex[flux.spreadIndex.length - 1][1], Timer.timerInit() );
	}


	// --- 
	objectAction.prototype.protocolSecurity = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		if (this.levelManager.protocolSecurity == 0) {
			this.levelManager.protocolSecurity = 1;
		}
	}

	// --- 
	objectAction.prototype.alarme = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		if (this.levelManager.protocolSecurity == 1) {
			this.levelManager.protocolSecurityTimer = Timer.timerInit();
			this.levelManager.protocolSecurity = 2;
		} else if (this.levelManager.protocolSecurity == 2) {
			gameManager.Lose();
			//alert("Perdu !");
		}
	}


	// --- 
	objectAction.prototype.blindfold = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		this.levelManager.blindfoldTimer = Timer.timerInit();
	}

	// ---
	objectAction.prototype.reinitSpeed = function(flux, nextSpread) {
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		flux.speed = config.flux.speed;
	}

	// --- Cette object est apellé quand le flux ce crash (donc restart le level)

	objectAction.prototype.crash = function() {
		gameManager.Lose();
	}

	// --- Coin, donne +100 au score

	objectAction.prototype.coin = function(flux, nextSpread) {
		this.levelManager.map[this.levelManager.currentMap][nextSpread[1]][nextSpread[0]] = 1;
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		gameManager.addScore(100);
	}


	// --- Change flux color

	objectAction.prototype.changeFluxColor = function(flux, nextSpread, color) {
		switch(color) {
			case 42:
				flux.color = 3; // bleue
			break;
			case 43:
				flux.color = 2; // rouge
			break;
			case 44:
				flux.color = 1; // vert
			break;
		}
		if ( flux.color == 2) {
			if ( flux.dir == "left" || flux.dir == "right") flux.axe = 4; // x
			if ( flux.dir == "top"  || flux.dir == "bot") flux.axe = 5; // y
		} else if ( flux.color == 1) {
			if ( flux.dir == "left" || flux.dir == "right") flux.axe = 10; // x
			if ( flux.dir == "top"  || flux.dir == "bot") flux.axe = 11; // y
		} else if ( flux.color == 3) {
			if ( flux.dir == "left" || flux.dir == "right") flux.axe = 45; // x
			if ( flux.dir == "top"  || flux.dir == "bot") flux.axe = 46; // y
		} 

		nextSpread[2] = flux.axe;
		flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
	}

	// --- Gère les lasers (horizontale & verticale)

	objectAction.prototype.laserEffect = function (flux, nextSpread) {
		if (flux.color != 2) {
			gameManager.Lose();
		} else {
			flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		}
	}

	// --- Interupteur qui enlève les lasers

	objectAction.prototype.blueSwitch = function (flux, nextSpread) {
		if (flux.color == 3) {
			flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
			for(var i = 0; i < this.levelManager.map[this.levelManager.currentMap].length ; i++) {
				for(var j = 0; j < this.levelManager.map[this.levelManager.currentMap][i].length ; j++) {
					//console.log(this.levelManager.map[this.levelManager.currentMap][j][i] );
					if ( this.levelManager.map[this.levelManager.currentMap][i][j] == 51 || this.levelManager.map[this.levelManager.currentMap][i][j] == 52 ) {
						this.levelManager.map[this.levelManager.currentMap][i][j] = 1;
					}
				}
			}
		} else {
			flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		}
	}
	// ---------- Listes des fonctions des objets du jeu ----------------------------------------------------- FIN -


	return new objectAction();
});