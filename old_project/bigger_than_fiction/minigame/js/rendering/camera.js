define (["config"], function (config) {
	var Camera = function () {
		this.width = config.screen.cameraWidth;
		this.height = config.screen.cameraHeight;
		this.screenWidth = config.screen.width;
		this.screenHeight = config.screen.height;
		this.ppuX = this.screenWidth / this.width;
		this.ppuY = this.screenHeight / this.height;
	};

	Camera.prototype.ConvertCoords = function (coords) {
		return {
			x : Math.round((coords.x * ppuX)),
			y : Math.round(coords.y * ppuY),
			w : Math.round(coords.w * ppuX),
			h : Math.round(coords.h * ppuY)
		};
	};

	return new Camera();
});