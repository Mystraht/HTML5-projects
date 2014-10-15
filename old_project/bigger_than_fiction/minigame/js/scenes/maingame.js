define (["debug", "GameScene", "config", "hudLinker", "jquery", "levelManager", "../../data/maps/exports/levels",
	"canvasManager", "ImageManager", "objectPlacement", 
	"fluxMovement", "Timer", "arrowSwitch", "converMap", "gameState", "Loader", "gameManager","mobManager", "gameTime", "pageVisibility"],
function (debug, GameScene, config, hudLinker, $, levelManager, levels,
	canvasManager, ImageManager, objPlacement, 
	fluxMovement, Timer, arrowSwitch, converMap, gameState, Loader, gameManager, mobManager, gameTime, pageVisibility) {

	var maingameLoader = new Loader({
		name : "Loader"
	});

	maingameLoader.Init = function () {
		this.initCallback();


	}

	maingameLoader.StartProcessing = function () {

		this.AddProcess();
		var that = this;
		debug.log("Maingame", "Processing...");
		levelManager.ReloadMap(function () {
			debug.log("Minigame", "Initialized !");
			that.ProcessFinished();
		}); // Push la map actuel
	};
	maingameLoader.StartLoading = function () {

		this.ResourceLoaded();
	}
	var maingame = new GameScene({
		name : "maingame",
		loader : maingameLoader
	});

	maingame.Init = function () {
		this.firstPlay = true;
		var that = this;
		var hud = $('<div />');
		hud.css ({
			'position' : 'absolute',
			'left' : 0,
			'top' : 0,
			'width' : "100%",
			'height' : "100px"
		});
		hud.attr({
			'id' : 'hud'
		});
		canvasManager.gui.append(hud);


		// --- Bouton START :

		var startButton = $('<img src="minigame/img/play.png" />');
		startButton.css ({
			'position' : 'absolute',
			'right' : "50px",
			'top' : 20,
			'height' : "30px"
		});
		startButton.attr({
			'id' : 'startButton'
		})
		pageVisibility.bind("hidden", function () {
			that.Pause();
		});
		pageVisibility.bind("visible", function () {
			that.Restart();
		})

		canvasManager.gui.append(startButton);
		startButton.bind('click', function (event) {
			that.Restart();
		});

		// --- Bouton REFRESH :

		var refreshButton = $('<img src="minigame/img/refresh.png" />');
		refreshButton.css ({
			'position' : 'absolute',
			'right' : 20,
			'top' : 20,
			'height' : "30px"
		});
		refreshButton.attr({
			'id' : 'refresh'
		})

		canvasManager.gui.append(refreshButton);

		refreshButton.bind('click', function (event) {
			that.Restart();
		});



		gameManager.Init(

		function () {
			that.Win();
		},
		function () {
			that.Lose();
		},
		function () {
			that._Pause();
		},
		function () {
			that._Resume();
		}
		);
		window.addEventListener('keydown', function (event) {
			if (event.keyCode == 82) {
				that.Lose();
			}
		});
		window.addEventListener('keydown', function (event) {
			if (event.keyCode == 13) {
				that.Win();
			}
		});
	};

	maingame.StartProcessing = function () {
		this.AddProcess();
		var that = this;
		debug.log("Maingame", "Processing...");
		levelManager.ReloadMap(function () {
			debug.log("Minigame", "Initialized !");
			that.ProcessFinished();
		}); // Push la map actuel

	};
	maingame.Restart = function () {
		var that = this;
		levelManager.ReloadMap(function () {
			that._Resume();
			$("#startButton").css('display', 'none');
		});
	}

	maingame.Update = function () {

	};

	maingame.Resume = function () {
		if (this.firstPlay) {
			gameManager.Pause();
			this.firstPlay = false;
		}
	}

	maingame.Animate = function () {

	};
	maingame.Render = function () {
		canvasManager.ctx.fillStyle = "#FFF";
		canvasManager.ctx.fillRect(0, 0, canvasManager.width, canvasManager.height); // cleanage du canvas
		canvasManager.ctx.fillStyle = "#000";

		levelManager.updateMap(levelManager.currentMap);
		levelManager.boxRefresh(); // Permet l'affichage de la map
		objPlacement.refresh(); // Gestion de l'affichage des objets qui doivent être placé
		fluxMovement.refresh(); // Refresh l'affichage du flux de test
		arrowSwitch.refresh();
		mobManager.refresh();
	};

	maingame.Win = function () {
		var that = this;
		gameManager.firstPlay = true;
		console.warn("Maingame", "Win");
		var timerScore = 1 / gameManager.getBonusScoreTimer() * Math.pow(10, 7) / 2.5;
		var levelScore = gameManager.getScore();
		var finalScore = levelScore + timerScore;
		alert("Vous avez gagné. Score final : " + parseInt(finalScore + - 200) + "\nScore niveau : " +  parseInt(levelScore - 200) + "\nScore bonus temps : " + parseFloat(timerScore) );
		gameManager.resetScore();
		levelManager.NextMap(function () {
			//that._Resume();
			canvasManager.mouse.down = false;
			//that._Pause();
		});
	};

	maingame.Lose = function () {
		var that = this;
		console.warn("Maingame", "Lose");
		levelManager.ReloadMap(function () {
			that.state = that.states.RUNNING;
		});
	};


	return maingame;
});