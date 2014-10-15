define(["debug", "gameTime", "scenesManager", "Loader", "GameScene", 
	"requestAnimFrame", "gameState", "config", "canvasManager", "stats", "once"], 
	function(debug, gameTime, scenesManager, Loader, GameScene,
		raf, gameState, config, canvasManager, stats, once) {
	
	var states = {
		UNACTIVE : "Unactive",
		LOADING : "Loading",
		LOADED : "Loaded",
		ACTIVE : "Active",
		PAUSED : "Paused",
		RUNNING : "Running",
		STOPPED : "Stopped"
	};

	var Gameloop = function () {
		this.states = states;
		this.state = states.UNACTIVE;
	};
	var gameloop = new Gameloop();

	// Called once, when the game is initialized
	var Init = function (hud, initCallback, endCallback) {
		scenesManager.Init(initCallback, endCallback);
		debug.log("gameloop", "Init");
		gameTime.Init();
		config.init(hud);
		canvasManager.init(hud.containerDiv);
		gameloop.state = states.ACTIVE;
		scenesManager.LaunchFirstScene();
		hud.containerDiv.append($(stats.domElement));
		stats.begin();
		Loop();
		Resume();
	};

	// When the game is paused
	var Pause = function () {
		debug.log("gameloop", "Pause");
		gameTime.Pause();
		gameloop.state = states.PAUSED;
	};

	// When the game is resumed
	var Resume = function () {
		debug.log("gameloop", "Resume");
		gameTime.Resume();
		gameloop.state = states.RUNNING;

	};

	// When the game is stopped
	var Stop = function () {
		debug.log("gameloop", "Stop");
		gameTime.Stop();
		gameloop.state = states.STOPPED;
	};

	// Main loop
	var Loop = function () {
		// Updates time
		stats.begin();
		gameTime.PreUpdate();
		var scene = scenesManager.scene;
		if (scene.state == states.LOADING) {
			scene.loader._Update();
			scene.loader._Render();
		}
		if (scene.state == states.RUNNING) {


			// Checks inputs, then updates AI, then updates physics, then animates stuff and renders
			scene._PreUpdate();
			scene._Inputs();
			scene._AI();
			scene._Update();
			scene._Animate();
			scene._Render();
			scene._PostUpdate();

			// Updates time
		}
		gameTime.PostUpdate();
		stats.end();
		requestAnimFrame(Loop);
	};

	return {
		Init : Init,
		Pause : Pause,
		Resume : Resume,
		Stop : Stop,
		gameloop : gameloop
	};
});