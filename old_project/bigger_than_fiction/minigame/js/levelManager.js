define (["jquery", "debug", "../data/equilibrage", "../data/maps/exports/levels", 
	"camera", "converMap", "config", "box", "ImageManager", "fluxMovement", "objectAction", "mobManager", "Timer", "gameManager", "canvasManager", "gameTime"], 
function ($, debug, equilibrage, levels, 
	camera, converMap, config, box, ImageManager, fluxMovement, objectAction, mobManager, Timer, gameManager, canvasManager, gameTime) {
	
	var LevelManager = function () {
		fluxMovement.init(this);
		objectAction.init(this);
		mobManager.init(this)
		this.mapNameList = levels.levelOrder;
		gameManager.updateCurrentLevelNum( parseInt(levels.startingLevel) );
		this.currentMapName = this.mapNameList[gameManager.getCurrentLevelNum()];
		this.mapLoaded = 0;
		this.currentMap = 0;
		// this.mapRanged = {};
		// this.mapRanged.h = 0;
		// this.mapRanged.w = 0;

		this.mapRanged = {
			w : 0,
			h : 0
		};

		this.map = [];
		this.map[0] = [];

		this.boxMap = [];

		this.Init();


	};


	LevelManager.prototype.boxRefresh = function () { // Drawing all box object on canvas 
		for(var i = 0; i < this.boxMap.length; i++) {
			for(var j = 0; j < this.boxMap[i].length; j++) {
				this.boxMap[i][j].refresh();
			};
		};
	};

	LevelManager.prototype.updateMap = function (mapID) { // Met à jour les box de la this.map
		var boxes = 0;
		this.boxMap = [];
		for(var i = 0; i < this.map[mapID].length; i++) {
			this.boxMap[i] = [];
			for(var j = 0; j < this.map[mapID][i].length; j++) {
				this.boxMap[i][j] = new box(
					j * camera.caseWidth, 
					i * camera.caseHeight, 
					camera.caseWidth, 
					camera.caseHeight, 
					ImageManager.get("box"), 
					this.map[mapID][i][j], 
					boxes,
					this);
				boxes++;
			};
			boxes++;
		};
		
	};

	LevelManager.prototype.NextMap = function (callback) {
		this.ChangeMap(gameManager.getCurrentLevelNum() + 1, callback);
	}
	LevelManager.prototype.ChangeMap = function (map, callback) {
		gameManager.updateCurrentLevelNum(map);
		this.ReloadMap(callback);
	};
	LevelManager.prototype.ReloadMap = function (callback) {
		this.Init();
		this.updateNewMap(this.mapNameList[gameManager.getCurrentLevelNum()], function () {
			callback();
		});
	};

	LevelManager.prototype.updateNewMap = function(mapName, callback) { // Importe une nouvelle this.map
		this.state = 1;
		var that = this;

		converMap.loadMap(mapName, function (json){

			debug.log("Level", "Loading map : ", mapName);
			// --- Resize le jeu en fonction de la taille du niveau
			that.mapRanged.h = json.layers[0].height;
			that.mapRanged.w = json.layers[0].width;
			var incremLower = config.screen.width  / that.mapRanged.w;
			if (config.screen.height / that.mapRanged.h < incremLower) incremLower = config.screen.height / that.mapRanged.h;
			camera.SetSize({
				caseWidth : incremLower,
				caseHeight : incremLower,
				mapWidth : that.mapRanged.w,
				mapHeight : that.mapRanged.h
			});
			// ---


			that.map = new Array();
			that.map[that.currentMap] = new Array();
			var j = 0;
			that.map[that.currentMap][j] = new Array();
			for (var i = 0 ; i < json.layers[0].data.length ; i++) {
				var gameData = 1;
				currentData = json.layers[0].data[i] - 1
				if (json.tilesets[0].tileproperties[currentData] !== undefined) {
					gameData = json.tilesets[0].tileproperties[currentData].game ;
					gameData = parseInt(gameData);
				}

				var fluxDir = {
					0 : "right",
					1 : "left",
					2 : "top",
					3 : "bot"
				};
				if (gameData >= 59 && gameData <= 62) {
					mobManager.create( {
					"x" : that.map[that.currentMap][j].length,
					"y" : j
					}, fluxDir[gameData - 59]);
					gameData = 1;
				}

				that.map[that.currentMap][j].push(gameData);

				if ( i >= json.layers[0].width * (j + 1) - 1 && json.layers[0].data.length - 1 != i) { 
					j++;
					that.map[that.currentMap][j] = new Array();
				}
			}
			that.updateMap(that.currentMap); // Genere la this.map actuel
			that.mapLoaded = 1;
			gameManager.resetBonusScoreTimer();

			// --- Affiche la nouvelle map avant de mettre en pause pour permettre au joueur de la visualiser.
			canvasManager.ctx.fillStyle = "#FFF";
			canvasManager.ctx.fillRect(0, 0, canvasManager.width, canvasManager.height); // cleanage du canvas
			canvasManager.ctx.fillStyle = "#000";
			that.boxRefresh(); // Permet l'affichage de la map
			fluxMovement.refresh(); // Refresh l'affichage du flux de test
			mobManager.refresh();

			// ---
			if (gameManager.firstPlay) {
				gameManager.Pause();
				gameManager.firstPlay = false;
				$("#startButton").css('display', 'inline');
			}
			callback();
		});
	};

	LevelManager.prototype.Init = function () {
		
		gameManager.resetScore();
		this.mapLoaded = 0;
		this.state = 0;
		this.virus = 0;
		this.virusPower = equilibrage.virus.tick * 1000;
		this.blindFoldTimer = Date.now();
		this.blindfoldDuration = equilibrage.blindFold.duration * 1000;
		this.protocolSecurity = 0;
		this.protocolSecurityTimer = Date.now();
		this.protocolSecurityDuration = equilibrage.protocolSecurity.duration * 1000;
		this.bombList = [];
		this.bombDuration = equilibrage.bomb.duration * 1000;
		
		this.rotatingArrow = [];

		this.rotatingArrowTimer = Date.now() - 10000;


		this.rotatingArrowRotateTime = equilibrage.arrows.timer * 1000;
		this.rotatingArrowCoeff = equilibrage.rotatingArrow.coeff;
		this.verticalArrowCoeff = equilibrage.verticalArrow.coeff;
		this.horizontalArrowCoeff = equilibrage.horizontalArrow.coeff;
		
		this.verticalArrowCanRotate = true;
		this.horizontalArrowCanRotate = true;
		this.rotatingArrowCanRotate = true;
		this.arrowMinTime = 300;

		this.teleporterList = [];
		this.teleporterSwapTimer = Date.now() - 100000;
		this.teleporterSwapTime = equilibrage.teleporter.interval * 1000;
		this.mobSpeed = equilibrage.mob.speed / 10;
		
		fluxMovement.fluxList = [];
		mobManager.mobList = [];

		config.flux.lenght = 7;

	};

	return new LevelManager();
});