define(["canvas"], function (canvas) {
	var player = function (x, y) {
		this.x = x;
		this.y = y;
	}

	player.prototype.setNewCoord = function (x, y) {
		this.x = x;
		this.y = y;
	}

	player.prototype.update = function () {
		this.x = mouse.x;
		this.y = mouse.y;
	}

	player.prototype.renderer = function () {
		canvas.context.fillRect(this.x, this.y, 5, 5);
		//console.log("lol")
	}

	return new player();
});