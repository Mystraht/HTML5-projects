define(["Timer", "../data/equilibrage", "../data/spritesList", "../data/images", "ImageManager"], 
function(Timer, equilibrage, spritesList, imagesList, ImageManager) {

	var Config = function () {


		// Screen
		// 
		this.platform = "PC";
		this.screen = {
			mode : "ratio_css",
			width : 640,
			height : 640,
			aspectRatio : 1
		};

		this.images = {
			width : 32,
			height : 32
		};
		
		this.maxFPS = 60;
		this.minTimeBetweenFrame = 1000 / this.maxFPS;
		
		this.mapsPath = "minigame/data/maps/exports/";

		this.flux = {
			speed : equilibrage.flux.baseSpeed * 1000,
			lenght : equilibrage.flux.length,
			clickSpeed : equilibrage.flux.clickSpeed * 1000
		};
		// Sprites
		this.sprites = spritesList.list;

		this.arrow = new Array();

		for (var i = 0 ; i < 40 ; i++) {
			this.arrow[i] = "stop";
		}

		this.arrow[16] = "right";
		this.arrow[17] = "bot";
		this.arrow[18] = "top";
		this.arrow[19] = "left";

		this.arrow[37] = "right";
		this.arrow[38] = "bot";
		this.arrow[39] = "top";
		this.arrow[40] = "left";
	};

	Config.prototype.init = function (hud) {
		this.hud = hud;
		ImageManager.pushImages(imagesList);

	};

	return new Config();
});

