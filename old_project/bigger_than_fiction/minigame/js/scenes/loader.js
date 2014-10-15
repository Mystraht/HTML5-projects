define (["debug", "Loader", "GameScene", "canvasManager"], 
function (debug, Loader, GameScene, canvasManager) {
	var loader = new Loader({
		name : "Loader"
	});

	loader.Init = function () {
		this.initCallback();
	}
	loader.Update = function () {
		var that = this;
		if (canvasManager.mouse.down) {
			that.ResourceLoaded();
		}
	};
	loader.Render = function () {

	};

	loader.StartProcessing = function () {

		this.ProcessFinished();
	};
	
	loader.StartLoading = function () {

		var that = this;
		debug.log("Cns", canvasManager);
		that.ResourceLoaded();
	};

	var loaderScene = new GameScene({
		loader : loader,
		name : "Loading",
		autostart : true
	});

	loaderScene.Resume = function () {
		console.log("Allo");
		this.sceneManager.LaunchScene("maingame");
	};

	loaderScene.Switched = function () {
		

	}

	return loaderScene;
})