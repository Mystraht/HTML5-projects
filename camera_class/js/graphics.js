define(["canvas", "camera"], function (canvas, camera) {
	var graphics = function () {

	}

	graphics.prototype.fillRect = function (x, y, width, height, useCamera) {
		useCamera = typeof useCamera !== "undefined" ? useCamera : true;
		params = {
			x : x,
			y : y,
			width : width,
			height : height
		}

		if (useCamera) {
			params = camera.transform(params);
		}

		//Ajout de "Si il est hors de l'écran, dessine le pas"
		canvas.context.fillRect(params.x, params.y, params.width, params.height);
	}

	return new graphics();
});