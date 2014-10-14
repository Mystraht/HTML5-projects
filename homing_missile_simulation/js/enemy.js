define(["canvas", "missile", "player"], function (canvas, missile, player) {
	var enemy = function () {
		this.sendMissileTimer = Date.now();
		this.sendMissileRate = 1500;
	}

	enemy.prototype.update = function () {
		if (Date.now() - this.sendMissileTimer > this.sendMissileRate) {
			this.sendMissile();
			this.sendMissileTimer = Date.now();
		}
	}

	enemy.prototype.renderer = function () {
		canvas.context.fillRect(50, 300, 50, 20)
	}

	enemy.prototype.sendMissile = function () {
		for (var i = 0; i < 5; i++) {
			randomAngle = 1.2 + Math.random() * 1.57; 
			new missile(70, 295, randomAngle, player, 150 * i);
		};
		for (var i = 0; i < 5; i++) {
			randomAngle = 1.2 + Math.random() * 1.57;
			randomAngle = -randomAngle;
			new missile(70, 320, randomAngle, player, 150 * i);
		};
	}

	return new enemy ();
})