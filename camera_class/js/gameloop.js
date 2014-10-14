define (["canvas", "graphics", "camera"], function(canvas, graphics, camera){

		var gameloop = function () {
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
			canvas.context.fillStyle = "#0000FF";
			graphics.fillRect(50, 50, 10, 10)
			graphics.fillRect(-20, 50, 10, 10)
			graphics.fillRect(70, 100, 10, 10)
		}

		return {
			init : init
		};
});