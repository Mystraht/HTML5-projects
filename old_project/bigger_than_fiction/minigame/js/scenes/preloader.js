define (["debug", "Loader", "GameScene"],
function (debug, Loader, GameScene) {
	var preloader = new Loader({
		name : "Preloader"
	});

	preloader.Update = function () {
		debug.loopVLog("Preloader", "update");
	};
	preloader.Render = function () {
		debug.loopVLog("Preloader", "Render");
	};

	preloader.StartLoading = function () {
		debug.vLog("Preloader", "Starting load...");
		this.ResourceLoaded();
	};
	preloader.StartProcessing = function () {
		this.ProcessFinished();
	}

	var preloaderScene = new GameScene({
		loader : preloader,
		name : "Preloading"
	});

	preloaderScene.Resume = function () {
		console.log("Alo");
	};
	preloaderScene.Switched = function (scm) {
		console.log("allo");
		scm.LaunchScene("loader");
	}
	return preloaderScene;
});