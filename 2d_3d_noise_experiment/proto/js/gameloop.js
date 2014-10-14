define (["canvas", "perlin"], function(canvas, noise){

		var gameloop = function () {
			inputs();
			update();
			animate();
			render();
			window.requestAnimationFrame (gameloop);
		};

		var init = function () {
			noise.seed(Math.random());
			seedNum = 0;
			coef = 10;
			gameloop();
		}

		function inputs () {

		}
		
		function update () {

		}

		function animate () {

		}

		function decimalToHexString(number)
		{
		    if (number < 0)
		    {
		    	number = 0xFFFFFFFF + number + 1;
		    }

		    return number.toString(16).toUpperCase();
		}

		function render () {
			canvas.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			seedNum += 0.05;
			for (var x = 0; x < canvas.canvas.width / coef; x++) {
				for (var y = 0; y < canvas.canvas.height / coef ; y++) {
					var value = noise.simplex3(x / 20, y / 20, seedNum);
					value++;
					value *= 127;
					value = Math.floor(value);
					valueDec = value;
					value = decimalToHexString(value);
					// if (value < 1) {
					// 	canvas.context.fillStyle = "#FFFFFF";
					// }
					// if (value > 1) {
					// 	canvas.context.fillStyle = "#FF0000";
					// }
					// if (value > 1.35) {
					// 	canvas.context.fillStyle = "#000000";
					// }
					if (Math.floor(Math.random() * 100000) == 1) {
						console.log(value);
					}
					canvas.context.fillStyle = "#" + value + value + "00";
					if (valueDec > 200) {
						canvas.context.fillStyle = "#FF0000";
					}
					canvas.context.fillRect(x * coef, y * coef, 1 * coef, 1 * coef);
				}
			}
		}

		return {
			init : init
		};
});