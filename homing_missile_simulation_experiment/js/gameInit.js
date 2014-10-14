define(["player", "missile"], function (player, missile) {
	var gameInit = function () {
		player.setNewCoord(100, 100);
		//new missile(500, 500, 1, player, 1000);
	}
	return new gameInit();
});