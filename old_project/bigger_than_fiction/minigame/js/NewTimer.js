define (["gameTime"], function (gameTime) {
	var Timer = function () {
		this.time = gameTime.currentTime();
	};

	Timer.prototype.diff = function () {
		return gameTime.currentTime - time;
	}

	return Timer;
})