define (["debug", "canvasManager"], function (debug, canvasManager) {
	var Drawer = function () {

	};

	Drawer.prototype.DrawImage = function (image, coords) {
		debug.loopVLog("Drawer", "Drawing at : ", coords);
		canvasManager.ctx.drawImage(image, coords.sx, coords.sy, coords.sw, coords.sh, coords.dx, coords.dy, coords.dw, coords.dh);
	};

	Drawer.prototype.ClearScreen = function () {
		canvasManager.ctx.clearRect(0, 0, canvasManager.width, canvasManager.height);
	};

	return new Drawer();
})