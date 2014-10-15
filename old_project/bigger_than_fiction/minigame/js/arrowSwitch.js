define(["canvasManager", "ImageManager", 
	"levelManager", "Timer", "fluxMovement", "camera"],
function(canvasManager, ImageManager, 
	levelManager, Timer, fluxMovement, camera){
	var arrowSwitch = function () {
		this.clickTimer = Timer.timerInit();
		this.clicked = 0;
	};

	arrowSwitch.prototype.refresh = function () {
		this.tileset = ImageManager.get('playgroundTileset');
		this.mouseX = canvasManager.mouse.position.x - camera.x;
		this.mouseY = canvasManager.mouse.position.y - camera.y;

		this.x = Math.floor(this.mouseX / camera.caseWidth)
		this.y = Math.floor(this.mouseY / camera.caseHeight);

		//if(this.x > 10) {this.x = 10;}
		//if(this.y > 10) {this.y = 10;}
		
		/*if (canvasManager.mouse.down == true && Timer.timerDiff(this.clickTimer) >= 10 && this.clicked == 0) {
			//canvasManager.mouse.down = false;
			this.clicked = 1;
			switch (levelManager.map[levelManager.currentMap][this.y][this.x]) {
				case 16:
					levelManager.map[levelManager.currentMap][this.y][this.x] = 17;
				break;
				case 17:
					levelManager.map[levelManager.currentMap][this.y][this.x] = 19;
				break;
				case 18:
					levelManager.map[levelManager.currentMap][this.y][this.x] = 16;
				break;
				case 19:
					levelManager.map[levelManager.currentMap][this.y][this.x] = 18;
				break;
			}
			levelManager.updateMap(levelManager.currentMap);
			this.clickTimer = Timer.timerInit();
		} else if (!canvasManager.mouse.down) {
			this.clicked = 0;
		}*/


		// if (canvasManager.mouse.down == true) {
		// 	fluxMovement.fluxList[0].speed = levelManager.flux.speed / 2 ;
		// } else {
		// 	fluxMovement.fluxList[0].speed = levelManager.flux.speed / 2 ;
		// }
	}

	return new arrowSwitch();
});