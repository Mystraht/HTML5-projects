function animation(x, y, w, h, ligne, collone, sizePixelw, sizePixelh, rate, path) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.ligne = ligne;
	this.collone = collone;
	this.sizePixelw = sizePixelw;
	this.sizePixelh = sizePixelh;
	this.path = path;
	this.collonneActuel = 0;
	this.image = new Image();
	this.image.src = path;
	this.rate = rate;
	this.timerRate = timerInit();

	this.refresh = function(newX, newY) {
		if(typeof newX != "undefined") {
			this.x = newX;
		}
		if(typeof newY != "undefined") {
			this.y = newY;
		}
		if(timerDiff(this.timerRate) >= this.rate) {
			if(this.collone != this.collonneActuel) {
				this.collonneActuel++;
			}else{
				this.collonneActuel = 0;
			}
			this.timerRate = timerInit();
		}
		ctx.drawImage(this.image, this.collonneActuel * this.sizePixelw, this.sizePixelh * this.ligne, this.sizePixelw, this.sizePixelh, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
	}
}