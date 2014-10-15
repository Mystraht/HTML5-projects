define(["inGame", "requestAnimFrame", "inRoom", "inNews"],
function (inGame, requestAnimFrame, inRoom, inNews) {
	var loop = function () {
		inGame.refresh();
		inRoom.refresh();
		//inNews.refresh();
		requestAnimFrame(loop);
	}

	return loop ;
});