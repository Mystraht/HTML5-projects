define (["canvas"], function(canvas){

		var gameloop = function () {
			inputs();
			animate();
			render();
			window.requestAnimationFrame (gameloop);
		};

		var init = function () {
			document.addEventListener("click", function () {
				P2[1] = Math.floor( Math.random() * 400  + 100);
			})
			P0 = [150, 700];
			P1 = [150, 0];
			P2 = [200, 200];
			P3 = [1000, 700];
			console.log(P2[1]);
			gameloop();
		}

		function inputs () {

		}
		
		function animate () {

		}

		function render () {
			canvas.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			canvas.context.fillStyle = "#FF0000";
			canvas.context.beginPath();
			for (var i = 0 ; i <= 100 ; i++) {
				t = i / 100;
				nextPointX = Math.pow((1 - t), 3) * P0[0] + 3 * Math.pow((1 - t), 2) * t * P1[0] + 3 * (1 - t) * Math.pow(t, 2) * P2[0] + Math.pow(t, 3) * P3[0];
				nextPointY = Math.pow((1 - t), 3) * P0[1] + 3 * Math.pow((1 - t), 2) * t * P1[1] + 3 * (1 - t) * Math.pow(t, 2) * P2[1] + Math.pow(t, 3) * P3[1];
				canvas.context.lineTo(nextPointX, nextPointY);
			}
			canvas.context.stroke();
		}
		
		return {
			init : init
		};
});
