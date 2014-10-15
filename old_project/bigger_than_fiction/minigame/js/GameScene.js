define (["debug", "gameTime", "pageVisibility"], function (debug, gameTime, pageVisibility) {

	var states = {
		UNACTIVE : "Unactive",
		LOADING : "Loading",
		LOADED : "Loaded",
		RUNNING : "Running",
		PAUSED : "Paused",
		STOPPED : "Stopped",

		WAITING : "Waiting"
	};
	var scenesCount = 0;

	var GameScene = function (args) {
		this.states = states;
		this.state = states.UNACTIVE;
		this.loader = false;
		this.autostart = false;
		this.name = "Unnamed Scene" + scenesCount;
		if (args != undefined) {
			if (args.loader != undefined) {
				this.loader = args.loader;
			}
			if (args.name != undefined) {
				this.name = args.name;
			}
			if (args.autostart != undefined) {
				this.autostart = args.autostart;
			}
		}
		this.id = scenesCount;
		this.logID = "GameScene " + this.id;
		scenesCount++;

		var that = this;
	};

// Overridable functions
	GameScene.prototype.Init = function () {
	};
	GameScene.prototype.Pause = function () {

	};
	GameScene.prototype.Resume = function () {

	};
	GameScene.prototype.Stop = function () {

	};
	GameScene.prototype.PreUpdate = function () {

	};
	GameScene.prototype.PostUpdate = function () {

	};
	GameScene.prototype.Inputs = function () {

	};
	GameScene.prototype.AI = function () {

	};
	GameScene.prototype.Update = function () {

	};
	GameScene.prototype.Animate = function () {

	};
	GameScene.prototype.Render = function () {

	};
	GameScene.prototype.Switched = function () {

	};



	GameScene.prototype._SetSceneManager = function (mngr) {
		this.sceneManager = mngr;
	} ;
	GameScene.prototype._Init = function (callback) {
		this.resumeCallback = callback;
		debug.mLog(this.logID, "Initializing scene ", this.name);
		this.Init();
		this.state = states.ACTIVE;
		this.StartLoading();
		// Launches loader if there is one
		

	};

	GameScene.prototype.StartLoading = function () {
		if (this.loader) {
			debug.vLog(this.logID, "This scene has a loader. Launching load and waiting for end");
			var that = this;
			this.loader.Load(function () {
				debug.vLog(this.logID, "Scene ", this.name, " loading finished !");
				that.EndLoading();
				that._Resume();
			});
			this.state = states.LOADING;
		} else {
			this._Resume();
		}
	};
	GameScene.prototype.EndLoading = function () {
		this.state = states.LOADED;
	};
	GameScene.prototype._Pause = function () {
		debug.mLog(this.logID, "Default Pause");
		gameTime.Pause();
		this.Pause();
		this.state = states.WAITING;
	};
	GameScene.prototype._Resume = function () {
		debug.mLog(this.logID, "Default Resume");
		gameTime.Resume();
		this.resumeCallback();
		this.state = states.RUNNING;
		this.Resume();
	};
	GameScene.prototype._Stop = function () {
		debug.mLog(this.logID, "Default Stop");

		this.Stop();
		this.state = states.STOPPED;
	};
	GameScene.prototype._PreUpdate = function () {

		if (this.state != states.RUNNING) return;
		this.PreUpdate();
	};
	GameScene.prototype._PostUpdate = function () {

		if (this.state != states.RUNNING) return;
		this.PostUpdate();
	};
	GameScene.prototype._Inputs = function () {

		if (this.state != states.RUNNING) return;
		this.Inputs();
	};
	GameScene.prototype._AI = function () {
		if (this.state != states.RUNNING) return;
		this.AI();
	};
	GameScene.prototype._Update = function () {

		if (this.state == states.LOADING) {
			this.loader.Update();
			return;
		}
		if (this.state != states.RUNNING) return;
		this.Update();
	};
	GameScene.prototype._Animate = function () {
		if (this.state != states.RUNNING) return;
		this.Animate();
	};
	GameScene.prototype._Render = function () {
		if (this.state == states.LOADING) {
			this.loader.Render();
			return;
		};

		if (this.state != states.RUNNING) return;
		this.Render();
	};
	GameScene.prototype._Switched = function (scm) {
		console.log("switched");
		this.Switched(scm);
	};

	return GameScene;
})