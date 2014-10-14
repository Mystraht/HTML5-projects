 define(["jquery", "config"], function (jquery, c){

	var canv = function(){
		$('#gameContainer').append('<canvas width="' + c.WINDOW_WIDTH + '" height="' + c.WINDOW_HEIGHT + '" id="canvasContainer" style="border:1px solid #000000;"></canvas>');
		this.canvas = $('#canvasContainer')[0];
		this.context = this.canvas.getContext("2d");
		console.log("Canvas initialised.");
	};

	return new canv();
 });

