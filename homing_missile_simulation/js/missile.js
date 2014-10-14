define(["time", "canvas", "missileManager"], function (time, canvas, missileManager) {
	var missile = function (x, y, dir, target, activateTime) {
		this.x = x;
		this.y = y;
		this.dir = dir;
		this.target = target;
		this.speed = 300;
		this.rotSpeed = 0.1;
		this.takeOffTimer = Date.now();
		this.takeOffTime = 100 + Math.floor ( Math.random() * 250 );
		this.activateTimer = Date.now();
		this.activateTime = activateTime;
		missileManager.add(this);
	}

	missile.prototype.update = function() {
		vec = {
			x : this.x - this.target.x,
			y : this.y - this.target.y
		}
		angle = Math.atan2(vec.y, vec.x);

		if (this.dir > Math.PI) {
			this.dir = -Math.PI;
		}
		if (this.dir < -Math.PI) {
			this.dir = Math.PI;
		}

		if (Date.now() - this.takeOffTimer > this.takeOffTime + this.activateTime) {
			angleDiff = this.dir - angle; // Difference betwen player and missile angle
			if (Math.abs(angleDiff) > this.rotSpeed) {
				if (angleDiff > 0) {
					// positif
					if (Math.abs(angleDiff) > Math.PI) {
						this.dir += this.rotSpeed;
					} else {
						this.dir -= this.rotSpeed;
					}
				} else {
					// negatif
					if (Math.abs(angleDiff) > Math.PI) {
						this.dir -= this.rotSpeed;
					} else {
						this.dir += this.rotSpeed;
					}
				}
			}
		}
		
		if (Date.now() - this.activateTimer > this.activateTime) {
			if ( !isNaN(angle) ) {
				this.x = this.x - this.speed * Math.cos(this.dir) * time.deltaTime;
				this.y = this.y - this.speed * Math.sin(this.dir) * time.deltaTime;
			}
		}

		distToTarget = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
		if (distToTarget < 5) {
			missileManager.del(this);
		}
	}

	missile.prototype.renderer = function () {
		canvas.context.fillStyle = "#0000FF";
		dirText = Math.floor(this.dir * 100) / 100
		//dirTextTarget = Math.floor(angle * 100) / 100
		//canvas.context.fillText("Deltatime : " + time.deltaTime * 1000 , 10, 30)
		//canvas.context.fillText("distToTarget : " + distToTarget , 10, 30)
		//canvas.context.fillText(dirTextTarget, this.target.x + 10, this.target.y)
		// canvas.context.fillText(dirText, this.x + 10, this.y)
		canvas.context.fillRect(this.x, this.y, 5, 5);
	}

	return missile;
});