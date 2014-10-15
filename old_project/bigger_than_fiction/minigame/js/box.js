define(["debug", "canvasManager", "ImageManager", "fluxMovement",
	"Timer", "config", "camera"],
function(debug, cnvs, imageManager, fluxMovement,
	Timer, config, camera){
	var box = function (x, y, w, h, imagePath, boxType, boxID, levelManager) {
		this.levelManager = levelManager;
		this.boxType = 1;
		this.boxCreate(x, y, w, h, imagePath, boxType, boxID);
	}

	box.prototype.boxCreate = function (x, y, w, h, imagePath, boxType, boxID) { // Box object, principaly used to draw map
		this.x = x;
		this.y = y;
		this.currentCase = {
			x : Math.round(this.x / camera.caseWidth),
			y : Math.round(this.y / camera.caseHeight)
		};

		this.w = w;
		this.h = h;
		this.boxType = boxType;
		this.boxID = boxID;
		this.imagePath = imagePath
		this.img = imageManager.get('playgroundTileset');

		var fluxDir = {
				0 : "right",
				1 : "left",
				2 : "top",
				3 : "bot"
		};

		if (this.boxType >= 20 && this.boxType <= 23) {
			fluxMovement.create( {
			"x" : this.currentCase.x,
			"y" : this.currentCase.y
			}, fluxDir[this.boxType - 20], 1);
			this.boxType = 1;
		}


		if (this.boxType == 41 || this.boxType == 54 || this.boxType == 55) { // Si c'est une flèche tournante
			
			// if (this.levelManager.rotatingArrow[0] == "undefined") {
			// 	this.levelManager.rotatingArrow[0] = new Array();
			// 	this.levelManager.rotatingArrow[0].push(this.currentCase.x, this.currentCase.y)
			// 	this.boxType = 37;
			// }

			var createArrowTemp = 1;
			for (var i = 0 ; i < this.levelManager.rotatingArrow.length - 1; i++) { // Check si la flèche est déjà crée
				if ( this.currentCase.x == this.levelManager.rotatingArrow[i][0] && this.currentCase.y == this.levelManager.rotatingArrow[i][1]) {
					createArrowTemp = 0;
				}
			}

			if (createArrowTemp == 1) {
				this.levelManager.rotatingArrow.push( new Array() );
				this.levelManager.rotatingArrow[this.levelManager.rotatingArrow.length - 1].push(this.currentCase.x, this.currentCase.y, this.boxType)
				this.boxType = 39;
			} else {
				this.boxType = this.levelManager.map[this.levelManager.currentMap][ this.levelManager.rotatingArrow[i][1] ][ this.levelManager.rotatingArrow[i][0] ]
			}
		}

		if (this.boxType >= 28 && this.boxType <= 30 || this.boxType >= 56 && this.boxType <= 58) {
			var createTeleporterTemp = 1;
			for (var i = 0 ; i < this.levelManager.teleporterList.length - 1; i++) { // Check si la flèche est déjà crée
				if ( this.currentCase.x == this.levelManager.teleporterList[i][0] && this.currentCase.y == this.levelManager.teleporterList[i][1]) {
					createTeleporterTemp = 0;
				}
			}

			if (createTeleporterTemp) {
				if (this.boxType >= 28 && this.boxType <= 30) {
					for (var i = 0 ; i < this.levelManager.teleporterList.length; i++) {
						if (this.levelManager.teleporterList[i][2] == this.boxType && i != this.levelManager.teleporterList.length - 1) {
							this.levelManager.map[this.levelManager.currentMap] [ this.levelManager.teleporterList[i][1] ] [ this.levelManager.teleporterList[i][0] ] = 1;
						}
					}
				}
				this.levelManager.teleporterList.push( new Array() );
				this.levelManager.teleporterList[this.levelManager.teleporterList.length - 1].push(this.currentCase.x, this.currentCase.y, this.boxType)
			}
		}

	}

	box.prototype.updateBoxType = function(newType) {
		this.boxType = newType;
	} 

	box.prototype.refresh = function() { 

		if(typeof this.imagePath != undefined) {
			if(typeof this.boxType == undefined) {
				//cnvs.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

			// Si le blindfold a été prit, tout les objets de l'id 25 à 34 vont disparaitre pour drawé une case vide.
			} else if (Timer.timerDiff(this.levelManager.blindfoldTimer) <= this.levelManager.blindfoldDuration
					&& this.boxType >= 25 && this.boxType <= 34) {
				cnvs.ctx.drawImage(this.img, 32 * config.sprites[1][0], 32 * config.sprites[1][1], 32, 32, this.x + camera.x, this.y + camera.y, this.w, this.h);

			// Affiche les alarmes si le protocol de securité est activé
			} else if (this.levelManager.protocolSecurity >= 1 && this.boxType == 34) {
				cnvs.ctx.drawImage(this.img, 32 * config.sprites[this.boxType][0], 32 * config.sprites[this.boxType][1], 32, 32, this.x + camera.x, this.y + camera.y, this.w, this.h);

			// N'affiche pas les alarmes si le protocol de securité est desactivé et donc draw une case vide.
			} else if (this.levelManager.protocolSecurity == 0 && this.boxType == 34) {
				cnvs.ctx.drawImage(this.img, 32 * config.sprites[1][0], 32 * config.sprites[1][1], 32, 32, this.x + camera.x, this.y + camera.y, this.w, this.h);

			// Si il n'y a pas de cas particulié, afficher correctement la case.
			} else {
				cnvs.ctx.drawImage(this.img, 32 * config.sprites[this.boxType][0], 32 * config.sprites[this.boxType][1], 32, 32, this.x + camera.x, this.y + camera.y, this.w, this.h);
			}
		}
	}

	return box;
});