define(["levelManager", "levelManager", "canvasManager", "ImageManager", "camera"],
function(levelManager, levelManager, canvasManager, ImageManager, camera){
	var objPlacement = function () {
		this.objIdOnHand = -1;
	}

	objPlacement.prototype.refresh = function() {
		this.tileset = ImageManager.get('playgroundTileset');
		this.mouseX = canvasManager.mouse.position.x - camera.x;
		this.mouseY = canvasManager.mouse.position.y - camera.y;

		this.x = Math.floor(this.mouseX / camera.caseWidth)
		this.y = Math.floor(this.mouseY / camera.caseHeight);

		// if(this.x > 10) {this.x = 20;}
		// if(this.y > 10) {this.y = 10;}

		if (this.objIdOnHand != -1) {
			switch (levelManager.map[levelManager.currentMap][this.y][this.x]) {
			case 1:
				canvasManager.ctx.drawImage(this.tileset, 32 * this.objIdOnHand,  32 * 1, 32, 32, this.x * camera.caseWidth, this.y * camera.caseHeight, camera.caseWidth, camera.caseHeight); // Case grisé normal
			break;
			case 2:
				canvasManager.ctx.drawImage(this.tileset, 32 * this.objIdOnHand,  32 * 2, 32, 32, this.x * camera.caseWidth, this.y * camera.caseHeight, camera.caseWidth, camera.caseHeight); // Case grisé normal
			break;
			case 3:
				canvasManager.ctx.drawImage(this.tileset, 32 * this.objIdOnHand,  32 * 2, 32, 32, this.x * camera.caseWidth, this.y * camera.caseHeight, camera.caseWidth, camera.caseHeight); // Case grisé normal
			break;
			}

			if (canvasManager.mouse.down == true && levelManager.map[levelManager.currentMap][this.y][this.x] == 1) {
				levelManager.map[levelManager.currentMap][this.y][this.x] = this.objIdOnHand;
				levelManager.updateMap(levelManager.currentMap);
			}
		}
	}

	return new objPlacement();
});