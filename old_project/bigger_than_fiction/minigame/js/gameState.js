define ([], function () {

	var states = {
		UNACTIVE : "Unactive",
		ACTIVE : "Active",
		PAUSED : "Paused",
		RUNNING : "Running",
		STOPPED : "Stopped"
	};
	var GameState = function () {
		this.states = states;
		this.state = states.UNACTIVE;
	};

	GameState.prototype.Init = function () {
		this.state = states.ACTIVE;
	};
	GameState.prototype.Pause = function () {
		this.state = states.PAUSED;
	};
	GameState.prototype.Resume = function () {
		this.state = states.RUNNING;
	};
	GameState.prototype.Stop = function () {
		this.state = states.STOPPED;
	};

	return new GameState();
})