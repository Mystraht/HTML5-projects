define([], function () {
	var time = function () {
		this.lastTime = 0;
		this.currentTime = Date.now();
		this.deltaTime = 0;
	}

	time.prototype.setDeltaTime = function () {
		this.lastTime = this.currentTime;
		this.currentTime = Date.now();
		this.deltaTime = (this.currentTime - this.lastTime) / 1000;
	}

	return new time();
});