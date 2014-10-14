define (["canvas", "time"], function(canvas, time){

		var gameloop = function () {
			time.setDeltatime();
			inputs();
			update();
			animate();
			render();
			window.requestAnimationFrame (gameloop);
		};

		var init = function () {
			gameloop();
		}

		function inputs () {

		}

		function update () {

		}
		
		function animate () {

		}

		function render () {
			canvas.cleanCanvas();
		}

		return {
			init : init
		};
});