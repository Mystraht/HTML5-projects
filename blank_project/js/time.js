define([], function () {
	var time = function () {
		this.lastTime = 0;
		this.currentTime = Date.now();
		this.deltatime = 0;
		this.firstFrame = true;
	}

	time.prototype.setDeltatime = function () {
		if (this.firstFrame) {
			this.currentTime = Date.now();
			this.firstFrame = false;
		}
		this.lastTime = this.currentTime;
		this.currentTime = Date.now();
		this.deltatime = (this.currentTime - this.lastTime) / 1000;
	}

	return new time();
});