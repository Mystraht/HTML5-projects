function collideRect(x, y, w, h) { // simple collide rectangle function.
	if (mouse.x >= x
	 && mouse.x < x + w
	 && mouse.y >= y
	 && mouse.y < y + h) {
		return true;
	} else {
		return false;
	}
}

function rel(param, xy){ // Relative function.
	if(xy == 1) {
		return param / 1920 * playGround.width;
	}
	if(xy == 2) {
		return param / 1080 * playGround.height;
	}
}


function timerDiff(time) { // Returns the time difference (in milliseconds) from a previous call to TimerInit().
	var dateActuel = new Date().valueOf();
	return dateActuel - time;
}

function timerInit() {
	var dateActuel = new Date().valueOf();
	return dateActuel;
}

function transitionEffect() { // transition effect when menu is changing. Set transitionEffect.progress = 1 to make transition.
	//img object inisialisation
	this.transitionImg = document.createElement('img');
	document.body.appendChild(this.transitionImg);
	this.transitionImg.id = 'transitionImg';
	this.transitionImg.src = 'img/noir.png';
	this.transitionImg.style.position = "absolute";
	this.transitionImg.style.top = "0px";
	this.transitionImg.style.left = "0px";
	this.transitionImg.style.opacity = 0;
	this.debug = 0.01;
	this.progress = 0;
	this.timerProgress = timerInit();

	this.refresh = function () {
		this.transitionImg.height = playGround.height;
		this.transitionImg.width = playGround.width;
		if(this.progress == 1){
			this.timerProgress = timerInit();
			this.progress = 2;
		}
		if( (this.progress == 2) && (timerDiff(this.timerProgress) >= 1500) ) {
			this.debug += 0.015;
			this.transitionImg.style.opacity = this.debug;
			if(this.transitionImg.style.opacity >= 1) {
				this.progress = 3;
				this.timerProgress = timerInit();
			}
		}
		if( (this.progress == 3) && (timerDiff(this.timerProgress) >= 1500) ) {
			this.debug -= 0.015;
			this.transitionImg.style.opacity = this.debug;
			if(this.transitionImg.style.opacity <= 0) {
				this.progress = 0;
				this.debug = 0;
			}
		}
	}
}

function muteButtonFunction(){
	muteButton.pressed_Delay = 0;
	if(soundMuted){
		pressedButton.volume = 1;
		music_main_menu.volume = 1;
		pointedButton.volume = 1;
		music_playing.volume = 1;
		muteButton.imgButton.src = "img/mute_button.png";
		muteButton.imagePointed.src = "img/mute_button.png";
		muteButton.imagePressed.src = "img/mute_button.png";
		soundMuted = 0;
	} else {
		pressedButton.volume = 0;
		music_main_menu.volume = 0;
		pointedButton.volume = 0;
		music_playing.volume = 0;
		muteButton.imgButton.src = "img/unmute_button.png";
		muteButton.imagePointed.src = "img/unmute_button.png";
		muteButton.imagePressed.src = "img/unmute_button.png";
		soundMuted = 1;
	}
}

function playButtonFonction(){
	transitionEffect.progress = 1;
	music_main_menu.volume = 0;
	setTimeout(function(){game_state = "playing"}, 3800);
	setTimeout(function(){playground.timeLeft = timerInit()}, 3800);
}


