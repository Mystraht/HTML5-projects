define (["pageVisibility"], function (pageVisibility) {

	var states = {
		PAUSED : "Paused",
		RUNNING : "Running"
	};

	var Gametime = function () {
		this.initTime = false;
		this.resumeTime = false;
		this.pauseTime = false;
		this.stopTime = false;
		this.lastTime = Date.now();
		this.currentTime = false;
		this.deltaTime = false;
		this.timeScale = 1;

		this.state = states.RUNNING;

		var that = this;
		
		pageVisibility.bind("hidden", function () {
			that.Pause();
		});
		pageVisibility.bind("visible", function () {
			that.Resume();
		});
	};

	Gametime.prototype.Init = function () {
		this.initTime = Date.now();
	};

	Gametime.prototype.Resume = function () {
		this.state = states.RUNNING;
		console.log("coucou");
		this.resumeTime = Date.now();
		this.lastTime = Date.now();
		this.PreUpdate();
	};
	Gametime.prototype.Pause = function () {
		this.state = states.PAUSED;
		this.pauseTime = Date.now();
	};
	Gametime.prototype.Stop = function () {
		this.stopTime = Date.now();
	};
	Gametime.prototype.PreUpdate = function () {
		this.currentTime = Date.now();
		this.deltaTime = (this.currentTime - this.lastTime) * this.timeScale;
		if (this.state == states.PAUSED) this.deltaTime = 1;
	};
	Gametime.prototype.PostUpdate = function () {
		this.lastTime = Date.now();
	};

	return new Gametime();
})