define (["debug", "../data/scenesList"], function (debug, scenes) {

	var ScenesManager = function () {
		this.scene = scenes.DEFAULT;
		this.launchingScene = false;

	};

	ScenesManager.prototype.ChangeScene = function (scene) {
		debug.mLog("ScenesManager", "Changin active scene : ", scene);
		this.scene = scenes[scene];
	};

	ScenesManager.prototype.LaunchScene = function (scene) {
		debug.mLog("ScenesManager", "Launching Scene : ", scene);
		var that = this;
		scenes[scene]._SetSceneManager(this);
		scenes[scene]._Init(function () {
			if (!scenes[scene].autostart) {
				that.ChangeScene (scene);
				scenes[scene]._Switched(that);
			}
		});
		console.log("Autostart", scenes[scene].autostart, scenes[scene]);
		if (scenes[scene].autostart) {
			this.ChangeScene(scene);
			scenes[scene]._Switched(this);
		}
	};

	ScenesManager.prototype.LaunchFirstScene = function () {
		this.LaunchScene(scenes.firstScene);
	};

	ScenesManager.prototype.Init = function (initCb, endCb) {
		this.initCallback = initCb;
		this.endCallback = endCb;
		scenes["loader"].initCallback = initCb;
	};

	return new ScenesManager();
});