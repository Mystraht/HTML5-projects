define(["canvas"], function (canvas) {
	var missileManager = function () {
		this.missileList = [];
	}

	missileManager.prototype.add = function(missile) {
		this.missileList.push(missile);
	}

	missileManager.prototype.del = function (missile) {
		for (var i = 0; i < this.missileList.length; i++) {
			if (this.missileList[i] == missile) {
				this.missileList.splice(i, 1);
			}
		};
	}

	missileManager.prototype.update = function() {
		for (var i = 0; i < this.missileList.length; i++) {
			this.missileList[i].update();
		}
	}

	missileManager.prototype.renderer = function () {
		for (var i = 0; i < this.missileList.length; i++) {
			this.missileList[i].renderer();
		};
		canvas.context.fillText("Nombre de projectiles : " + this.missileList.length, 10, 20);
	}



	return new missileManager();
})