function box(x, y, w, h, imagePath, boxType, tileset, boxID) { // Box object, principaly used to draw map
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.boxType = boxType;
	this.boxID = boxID;
	this.imgBox = new Image();
	this.tileset = tileset;

	if (typeof imagePath != "undefined") {
		this.imgBox.src = imagePath;
	}

	this.addImage = function(path) {
		this.imgBox.src = path;
	}

	this.refresh = function() {
		if(typeof imagePath != "undefined") {
			if(typeof boxType == "undefined") {
				ctx.drawImage(this.imgBox, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			}
		}

		switch (this.boxType) {
			case "a":
				ctx.drawImage(this.tileset, 64 * 0, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "b":
				ctx.drawImage(this.tileset, 64 * 1, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "c":
				ctx.drawImage(this.tileset, 64 * 2, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "d":
				ctx.drawImage(this.tileset, 64 * 3, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "e":
				ctx.drawImage(this.tileset, 64 * 4, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "f":
				ctx.drawImage(this.tileset, 64 * 5, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "g":
				ctx.drawImage(this.tileset, 64 * 6, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "h":
				ctx.drawImage(this.tileset, 64 * 7, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "i":
				ctx.drawImage(this.tileset, 64 * 8, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "j":
				ctx.drawImage(this.tileset, 64 * 9, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "k":
				ctx.drawImage(this.tileset, 64 * 10, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "l":
				ctx.drawImage(this.tileset, 64 * 11, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "m":
				ctx.drawImage(this.tileset, 64 * 12, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "n":
				ctx.drawImage(this.tileset, 64 * 13, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "o":
				ctx.drawImage(this.tileset, 64 * 14, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "p":
				ctx.drawImage(this.tileset, 64 * 15, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "q":
				ctx.drawImage(this.tileset, 64 * 16, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "r":
				ctx.drawImage(this.tileset, 64 * 17, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "s":
				ctx.drawImage(this.tileset, 64 * 18, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "t":
				ctx.drawImage(this.tileset, 64 * 19, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "u":
				ctx.drawImage(this.tileset, 64 * 20, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "v":
				ctx.drawImage(this.tileset, 64 * 21, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "w":
				ctx.drawImage(this.tileset, 64 * 22, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "x":
				ctx.drawImage(this.tileset, 64 * 23, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "y":
				ctx.drawImage(this.tileset, 64 * 24, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
			case "z":
				ctx.drawImage(this.tileset, 64 * 25, 0, 64, 64, rel(this.x, 1), rel(this.y, 2), rel(this.w, 1), rel(this.h, 2));
			break;
		}
	}
}

function BOXrefresh() { // Handling & drawing all box object on canvas 
	for(var i = 0; i < boxMap.length; i++) {
		boxMap[i].refresh();
	}
}

function createBox() { // create all box objects.
	boxMap = new Array();
	logo_main_menu_obj = new box(330, 54, 1260, 360, "img/BomberLLogo.png");
	
}