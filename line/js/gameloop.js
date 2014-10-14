define (["canvas"], function(canvas){

		var gameloop = function () {
			inputs();
			animate();
			render();
			window.requestAnimationFrame (gameloop);
		};

		var init = function () {
			P1 = {
				x : 50,
				y : 50
			};
			P2 = {
				x : 200,
				y : 500
			}
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
			for (var i = 0; i < 100; i++) {
				step = i / 100;
				currentX = (P2.x - P1.x) * step + P1.x;
				currentY = (P2.y - P1.y) * step + P1.y;
				canvas.context.fillRect(currentX, currentY, 3, 3);
			}

		}

		return {
			init : init
		};
});