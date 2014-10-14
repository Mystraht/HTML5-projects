 define(["jquery", "config"], function (jquery, c){

 		var canv = function(){
 			console.log("Canvas initialised.")
 			$('#gameContainer').append('<canvas width="' + c.window_width + '" height="' + c.window_height + '" id="canvasContainer" style="border:1px solid #000000;"></canvas>');
 			this.canvas = $('#canvasContainer')[0];
			this.context = this.canvas.getContext("2d");
 		};

 		return new canv();
 });

