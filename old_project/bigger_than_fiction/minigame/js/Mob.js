define(["debug", "camera", "ImageManager", "canvasManager", "config", "gameTime", "fluxMovement"],
function(debug, camera, imageManager, canvasManager, config, gameTime, fluxMovement){

	var Mob = function (args) {
		this.lastStep = {
			x : 0,
			y : 0
		}
		this.x = Math.floor(args.x * camera.caseWidth);
		this.y = Math.floor(args.y * camera.caseHeight);
		this.index = {
			"x" : Math.floor(this.x / camera.caseWidth) + 1,
			"y" : Math.floor(this.y / camera.caseHeight) + 1
		}
		this.dir = args.dir;

		this.dirOffset = {
			"right" : {
				"x" : 1,
				"y" : 0
			},
			"left" : {
				"x" : -1,
				"y" : 0
			},
			"top" : {
				"x" : 0,
				"y" : -1
			},
			"bot" : {
				"x" : 0,
				"y" : 1
			} 
		}

		this.sens = {
			"left" : "right",
			"right" : "left",
			"top" : "bot",
			"bot" : "top"
		}

		this.collisionOffset = {
			"right" : {
				"x" : 0,
				"y" : 0
			},
			"left" : {
				"x" : -1,//-camera.caseWidth,
				"y" : 0
			},
			"top" : {
				"x" : 0,
				"y" : -1//camera.caseHeight
			},
			"bot" : {
				"x" : 0,
				"y" : 0
			} 
		}

		this.img = imageManager.get('playgroundTileset');
	}

	Mob.prototype.refresh = function (levelManager) {
		this.flux = fluxMovement ;
		var flux = this.flux.getMainFlux();
		if (flux != undefined) {
			// debug.error(fluxMovement.getMainFlux());
			// debug.loopMLog("Mob map", levelManager.map[levelManager.currentMap] [this.index.y] [this.index.x] + " | x : " + this.x + " | y : " + this.y);
			var step = {
				x : this.dirOffset[this.dir].x * levelManager.mobSpeed * gameTime.deltaTime,
				y : this.dirOffset[this.dir].y * levelManager.mobSpeed * gameTime.deltaTime
			};
			this.x += step.x;
			this.y += step.y;

			this.x = this.x || 0;
			this.y = this.y || 0;
			this.index = {
				"x" : Math.floor(this.x / camera.caseWidth) + 1,
				"y" : Math.floor(this.y / camera.caseHeight) + 1
			}

			canvasManager.ctx.drawImage(this.img, 32 * config.sprites[63][0], 32 * config.sprites[63][1], 32, 32, this.x + camera.x, this.y + camera.y, camera.caseWidth, camera.caseHeight);

			if ( [this.index.y + this.collisionOffset[this.dir].y ] < 0 ||
				[this.index.x + this.collisionOffset[this.dir].x ] < 0 ||
				[this.index.x + this.collisionOffset[this.dir].x ] >= levelManager.mapRanged.w ||
				[this.index.y + this.collisionOffset[this.dir].y ] >= levelManager.mapRanged.h) {
				//
				this.dir = this.sens[this.dir];
			} else if ( levelManager.map[levelManager.currentMap] [this.index.y + this.collisionOffset[this.dir].y ] [this.index.x + this.collisionOffset[this.dir].x ] == 0 ) {
				//
				this.dir = this.sens[this.dir];
			}

			// levelManager.map[levelManager.currentMap] [this.index.y + this.collisionOffset[this.dir].y ] [this.index.x + this.collisionOffset[this.dir].x ] = 2;
			for (var i = 0 ; i < flux.spreadIndex.length ; i++) {
				if (flux.spreadIndex[i][0] == this.index.x + this.collisionOffset[this.dir].x && flux.spreadIndex[i][1] == this.index.y + this.collisionOffset[this.dir].y) {
					
					var diffCreation = flux.fluxLenght - flux.spreadIndex.length; // Retourne le nb de blocks du flux encore non-crée (au début d'un niveau)
					
					// --- Casse le flux en deux

					flux.spreadIndex.splice(0, i + 1);
					flux.fluxLenght -= i + 1 + diffCreation;

					// --- Kill le flux & recomence le level.
					//console.log(flux.fluxLenght);
					if ( flux.fluxLenght == 0 ) {
						this.flux.killMainFlux();
					}

					i = flux.spreadIndex.length;

					// ---
				}
			}
		}
	}

	return Mob;
});