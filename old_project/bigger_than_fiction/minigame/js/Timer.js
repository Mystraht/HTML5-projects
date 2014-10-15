define(["gameTime"], 
function(gameTime){


	var timerInit = function () {
		return gameTime.currentTime;
	}

	var timerDiff = function(timer) {
		return gameTime.currentTime - timer ;
	}

	return {
		timerInit : timerInit,
		timerDiff : timerDiff
	};
});