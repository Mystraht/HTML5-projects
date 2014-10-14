define ([
	"canvas",
	"gameInit",
	"time",
	"missileManager",
	"player",
	"enemy"
], function(
	canvas,
	gameInit,
	time,
	missileManager,
	player,
	enemy
) {

		var gameloop = function () {
			time.setDeltaTime();
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
		
		function update() {
			missileManager.update();
			player.update();
			enemy.update();
		}

		function animate () {

		}

		function render () {
			canvas.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			canvas.context.fillStyle = "#FF0000";
			player.renderer();
			enemy.renderer();
			missileManager.renderer();
			canvas.context.font = "20px Georgia";
		}
		


		return {
			init : init
		};
});
