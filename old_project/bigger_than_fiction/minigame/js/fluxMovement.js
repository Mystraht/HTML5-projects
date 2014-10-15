define(["config", "Timer", "canvasManager", "ImageManager", 
	"debug", "objectAction", "gameState", "camera", "Flux", "gameManager"],
function(config, Timer, cnvs, imageManager, 
	debug, objectAction, gameState, camera, Flux, gameManager) {

	var fluxMovement = function () {
		this.fluxList = new Array();
	}

	fluxMovement.prototype.init = function (levelManager) {
		this.levelManager = levelManager;
	}
	fluxMovement.prototype.refresh = function () {
		for(var i = 0 ; i < this.fluxList.length ; i++) {
			var flux = this.fluxList[i];

			// ---------- La partie de code suivante gère la progression des flux au fil du temps


			if (Timer.timerDiff(flux.delay) >= flux.speed) { // Si delay > speed
				var fluxCurrentIndex = new Array(flux.spreadIndex[flux.spreadIndex.length - 1][0], flux.spreadIndex[flux.spreadIndex.length - 1][1]); // Cette variable est égale à la dernière case parcouru par le flux
				// this.levelManager.map[this.levelManager.currentMap][ fluxCurrentIndex[1]][fluxCurrentIndex[0] ] // Case actuel
				// flux.spreadIndex[flux.spreadIndex.length] = new Array(fluxCurrentIndex[0], fluxCurrentIndex[1], flux.axe); // Ajoute une case parcouru
				var dirs = {
					"left" : [-1, 0],
					"top" : [0, -1],
					"bot" : [0, 1],
					"right" : [1, 0]
				};
				if (flux.state == 1) {
					var d = dirs[flux.dir];
					var nextSpread = [fluxCurrentIndex[0] + d[0], fluxCurrentIndex[1] + d[1], flux.axe];
					var map = this.levelManager.map[this.levelManager.currentMap];
					if (nextSpread[1] < 0 || nextSpread[0] < 0 || nextSpread[0] >= this.levelManager.mapRanged.w || nextSpread[1] >= this.levelManager.mapRanged.h) {
						gameManager.Lose();
					} else {
						var objectId = map[nextSpread[1]] [nextSpread[0]];
					}
					if (objectId == 1) {
						flux.spreadIndex.push(nextSpread);
					} else {
						this.checkObject(flux, objectId, nextSpread);
					}
					flux.delay = Timer.timerInit();
				}
			}
			objectAction.refresh(flux); // Gère l'action des objets au fil du temps (timer bomb, virus etc)

			if (cnvs.mouse.down) {
				flux.speed = config.flux.speed - config.flux.clickSpeed;
			} else {
				flux.speed = config.flux.speed;
			}

			if (flux.spreadIndex.length >= flux.fluxLenght + 1) { // Sert à limité la taille du flux (en nb de case)
				flux.spreadIndex.splice(0, 1);
			}

			// ---------- La partie de code suivante draw toutes les cases de flux sur la plateforme

			for (var i = 0 ; i < this.fluxList.length ; i++) {
				var flux = this.fluxList[i];
				for (var j = 0 ; j < flux.spreadIndex.length ; j++) {
					cnvs.ctx.drawImage(imageManager.get('playgroundTileset'),
						32 * config.sprites[ flux.spreadIndex[j][2] ][0],
						32 * config.sprites[ flux.spreadIndex[j][2] ][1],
						32,
						32,
						flux.spreadIndex[j][0] * camera.caseWidth + camera.x,
						flux.spreadIndex[j][1] * camera.caseHeight + camera.y,
						camera.caseWidth,
						camera.caseHeight);
				}
			}
			if (this.levelManager.protocolSecurity >= 2) cnvs.ctx.fillText( Math.abs( Math.round( Timer.timerDiff( this.levelManager.protocolSecurityTimer ) / 1000 + ( this.levelManager.protocolSecurityDuration / 1000 ) * -1) ) , 610, 30); // Affiche le timer du protocol de securité lvl 2 (proto)
		}
	}

	// ---------- checkObject regarde l'id de l'objet et execute la fonction lui correspondant


	fluxMovement.prototype.checkObject = function(flux, objectID, nextSpread) { // Regarde à quoi correspond la case actuel et execute la fonction lui correspondant
		if (objectID >= 16 && objectID <= 19 || objectID >= 37 && objectID <= 40 ) { // Les objets 16, 17, 18 et 19 sont les fleches de direction. 
			this.changeDirection( flux, objectID );
		}

		if (objectID >= 28 && objectID <= 30 || objectID >= 56 && objectID <= 58) { // Les objets 28, 29 et 30 sont les teleporteurs.
			objectAction.teleporter( flux, nextSpread, objectID );
		}

		if (objectID >= 42 && objectID <= 44) { // Les objets 42, 43, 44 sont des changeur de couleurs
			objectAction.changeFluxColor( flux, nextSpread, objectID );
		}

		if (objectID == 51 || objectID == 52) { // Lasers
			objectAction.laserEffect( flux, nextSpread );
		}

		if (objectID >= 20 && objectID <= 23) { // Les starts (accede juste au nextPread)
			flux.spreadIndex[flux.spreadIndex.length] = nextSpread;
		}

		switch (objectID) { // L'id de l'objet ce trouve dans config.js (this.sprite[id])
			case 0:
				objectAction.crash();
			break;
			case 24:
				objectAction.endGame(flux, nextSpread);
			break;
			case 25:
				objectAction.acceleration(flux, nextSpread);
			break;
			case 26:
				objectAction.deceleration(flux, nextSpread);
			break;
			case 27:
				objectAction.enableVirus(flux, nextSpread);
			break;
			case 31:
				objectAction.bomb(flux, nextSpread);
			break;
			case 32:
				objectAction.protocolSecurity(flux, nextSpread);
			break;
			case 33:
				objectAction.blindfold(flux, nextSpread);
			break;
			case 34:
				objectAction.alarme(flux, nextSpread);
			break;
			case 35:
				objectAction.reinitSpeed(flux, nextSpread);
			break;
			case 36:
				objectAction.coin(flux, nextSpread);
			break;
			case 53:
				objectAction.blueSwitch(flux, nextSpread);
			break;
		}

	}



	// ---------- Permet de changer la direction du flux ------------------------------------ DEBUT -

	fluxMovement.prototype.changeDirection = function (flux, dir) { // Change la direction du flux
		if ( dir >= 16 && dir <= 19 ) {
			dir = config.arrow[dir];
		} else {
			dir = config.arrow[dir];
		}

		var fluxCurrentIndex = new Array(flux.spreadIndex[flux.spreadIndex.length - 1][0], flux.spreadIndex[flux.spreadIndex.length - 1][1]);

		var color;
		if (flux.color == 1) {
			color = "g";
		} else if (flux.color == 2) {
			color = "r";
		} else if (flux.color == 3) {
			color = "b";
		}

		var direction = {
			"tl" : {
				"g" : 13,
				"r" : 7,
				"b" : 48
			}, // t-l
			"tr" : {
				"g" : 12,
				"r" : 6,
				"b" : 47
			}, // t-r
			"br" : {
				"g" : 14,
				"r" : 8,
				"b" : 49
			}, // b-r
			"bl" : {
				"g" : 15,
				"r" : 9,
				"b" : 50
			} // b-l
		}

		// Calcule la direction à choisir
		var dirTemp = dir.charAt(0) + flux.dir.charAt(0);
		if (flux.dir.charAt(0) == "b" || flux.dir.charAt(0) == "t") dirTemp = flux.dir.charAt(0) + dir.charAt(0);

		// Calcule le nouvelle axe
		flux.axe = 4;
		if (dir.charAt(0) == "b" || dir.charAt(0) == "t") flux.axe = 5;
		if (flux.color == 1) flux.axe += 6;
		if (flux.color == 3) flux.axe += 41;

		// Calcule l'offset de la prochaine case à aller

		var x = 0;
		var y = 0;
		if (flux.dir == "top") y = -1;
		if (flux.dir == "right") x = 1;
		if (flux.dir == "left") x = -1;
		if (flux.dir == "bot") y = 1;

		if (flux.dir == "top" && dirTemp == "tr") dirTemp = "bl"; // Check si le sens du virage doit être inversé ou pas
		if (flux.dir == "right" && dirTemp == "br") dirTemp = "tl";
		if (flux.dir == "left" && dirTemp == "tl") dirTemp = "br";
		if (flux.dir == "bot" && dirTemp == "bl") dirTemp = "tr";

		if (dirTemp == "bt" // Si on rentre dans une flèche à contresens
			|| dirTemp == "lr"
			|| dirTemp == "rl"
			|| dirTemp == "tb") {
			objectAction.crash();
		}

		//debug.log("Changement de direction : ", dirTemp)
		if (dirTemp == "tl" || dirTemp == "tr" || dirTemp == "bl" || dirTemp == "br") {
			flux.spreadIndex[flux.spreadIndex.length] = new Array(fluxCurrentIndex[0] + x, fluxCurrentIndex[1] + y, direction[dirTemp][color]);
		} else  if (dir.charAt(0) == flux.dir.charAt(0) && dir != "stop") {
			flux.spreadIndex[flux.spreadIndex.length] = new Array(fluxCurrentIndex[0] + x, fluxCurrentIndex[1] + y, flux.axe);
		} else {
			flux.speed = Infinity;
		}

		flux.dir = dir;
	}

	// ---------- Permet de changer la direction du flux ------------------------------------ FIN -


 	// ---------- La partie de code suivante permet de creer un flux ----------

	fluxMovement.prototype.create = function (index, dir, color) {
		if (!this.checkIfFluxAlreadyCreated(index.x, index.y)) {
			var flux = new Flux(index, dir, color, config.flux.speed, config.flux.lenght);
	
			this.fluxList.push(flux);
		}
	}

	// --- fonction pour check si le flux a déjà été crée ou pas
	fluxMovement.prototype.checkIfFluxAlreadyCreated = function (x, y) { // retourne 1 si le flux a déjà été crée, sinon retourne 0;
		for (var i = 0 ; i < this.fluxList.length ; i++) {
			if ( this.fluxList[i].x == x && this.fluxList[i].y == y) {
				return 1;
			}
		}
		return 0;
	}

	fluxMovement.prototype.getMainFlux = function () { // Return le flux du joueur
		return this.fluxList[0];
	}

	fluxMovement.prototype.killMainFlux = function () { // Tue le flux du joueur
		gameManager.Lose();
	}


	return new fluxMovement();
});