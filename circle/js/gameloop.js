define (["canvas"], function(canvas){

		var gameloop = function () {
			inputs();
			animate();
			render();
			window.requestAnimationFrame (gameloop);
		};

		var init = function () {
			o = {
				x : 150,
				y : 150
			};
			r = 50;
			step = 2;
			gameloop();
		}

		function inputs () {

		}
		
		function animate () {

		}

		function render () {
			canvas.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			canvas.context.moveTo(50, 50);
			canvas.context.fillStyle = "#FF0000";
			canvas.context.fillRect(o.x, o.y, 3, 3)
			for (var i = 0; i < 100; i++) {
				// angle = 0;
				// angle = 2 * Math.PI * angle / 360;
				currentX = o.x + r * Math.cos(i) * 2;
				currentY = o.y + r * Math.sin(i);
				canvas.context.fillRect(currentX, currentY, 3, 3)
			};
		}

		return {
			init : init
		};
});