define(["jquery", "config"], function (jquery, c){

		var canvas = function(){
			console.log("Canvas initialised.")
			$('#gameContainer').append('<canvas width="' + c.window_width + '" height="' + c.window_height + '" id="canvasContainer"></canvas>');
			this.canvas = $('#canvasContainer')[0];
			this.context = this.canvas.getContext("2d");
		};

		canvas.prototype.cleanCanvas = function () {
			this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		}

		return new canvas();
});

