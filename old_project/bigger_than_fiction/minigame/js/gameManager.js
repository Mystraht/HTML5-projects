define (["jquery", "Timer", "pageVisibility"],
function ($, Timer, pageVisibility) {
	var GameManager = function () {
		this.score = 0;
		this.currentLevelNum = 0;
		this.bonusScoreTimer = Timer.timerInit();
		this.firstPlay = true;

		var that = this; 
	};

	GameManager.prototype.Init = function (win, lose, pause, resume) {
		this.Win = win;
		this.Lose = lose;
		this.Pause = pause;
		this.Resume = resume;
	};

	GameManager.prototype.getScore = function () {
		return parseInt(this.score);
	}

	GameManager.prototype.resetScore = function () {
		this.score = 0 ;
		this.refreshScore() ;
	}

	GameManager.prototype.addScore = function (nb) {
		this.score += nb ;
		this.refreshScore() ;
	}

	GameManager.prototype.getCurrentLevelNum = function () {
		return parseInt(this.currentLevelNum);
	}

	GameManager.prototype.updateCurrentLevelNum = function (newNum) {
		this.currentLevelNum = newNum;
	}

	GameManager.prototype.resetBonusScoreTimer = function () {
		this.bonusScoreTimer = Timer.timerInit();
	}

	GameManager.prototype.getBonusScoreTimer = function () {
		return parseInt(Timer.timerDiff(this.bonusScoreTimer));
	}

	GameManager.prototype.refreshScore = function () {
		$("#hud").html("Score : " +  this.score + " Niveau actuel : " + this.currentLevelNum + " | Clique gauche pour accélérer.");
	}
	return new GameManager();
})