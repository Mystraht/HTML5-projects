function button(x, y, w, h, imagePath) { // Button object, It manages button effect & co.

	// Variable déclaration
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.imageNormal = imagePath;
	this.imagePointed = imagePath;
	this.imagePressed = imagePath;

	this.imgButton = new Image();
	this.imgButton.src = imagePath;
	this.imagePointed = new Image();
	this.imagePointed.src = imagePath;
	this.imagePressed = new Image();
	this.imagePressed.src = imagePath;
	this.mouseState = 0;
	this.timePressedState = 0;
	this.isPointed = 0;
	this.pressed_Delay = 3000;
	this.timePressed = timerInit();
	this.timePressed -= this.pressed_Delay;
	this.soundPath_pressed = 0;
	this.soundPath_pointed = 0;
	this.functionConnectedActive = 0;
	// ---


	this.addPointedImage = function(image) {
		this.imagePointed.src = image;
	}

	this.addPressedImage = function(image) {
		this.imagePressed.src = image;
	}

	this.addSoundOnPressed = function(path) {
		this.soundPath_pressed = path;
	}

	this.addSoundOnPointed = function(path) {
		this.soundPath_pointed = path
	}
	this.connect = function(exectCode) // This method connect button to function to execute when button is clicked.
	{
		this.functionConnectedActive = 1;
		this.functionConnected = exectCode;
	}

	this.refresh = function() {
		this.x = eval(x);
		this.y = eval(y);
		this.w = eval(w);
		this.h = eval(h);

		if ( (mouse.button) && (collideRect(this.x, this.y, this.w, this.h)) ) {
			this.timePressed = timerInit();
		}

		if( (collideRect(this.x, this.y, this.w, this.h)) && (timerDiff(this.timePressed) <= this.pressed_Delay) || (timerDiff(this.timePressed) <= this.pressed_Delay) && (this.timePressedState == 1) ) {
			ctx.drawImage(this.imagePressed, this.x, this.y, this.w, this.h);
			if( (!this.timePressedState) && (this.soundPath_pressed != 0) ){
				this.soundPath_pressed.play();
			}
			if ((!this.timePressedState) && (this.functionConnectedActive)) {
					eval(this.functionConnected);
			}
			this.timePressedState = 1;
		}else if( (collideRect(this.x, this.y, this.w, this.h)) && (timerDiff(this.timePressed) > this.pressed_Delay) ){
			ctx.drawImage(this.imagePointed, this.x, this.y, this.w, this.h);
			if( (this.soundPath_pointed != 0) && (this.isPointed == 0) ) {
				this.soundPath_pointed.play();
			}
			this.isPointed = 1;
			this.timePressedState = 0;
		}else{
			ctx.drawImage(this.imgButton, this.x, this.y, this.w, this.h);
			this.timePressedState = 0;
			this.isPointed = 0;
		}
	}
}

function createButton() { // create all box objects.
	buttonMap = new Array();

	playButton = new button("playGround.width / 2 - 0.256222547584 * playGround.width / 2", "playGround.height * 40 / 100", "0.256222547584 * playGround.width", "0.09765625 * playGround.height", "img/Bouton_Jouer_1.png");
	playButton.addPointedImage("img/Bouton_Jouer_2.png");
	playButton.addPressedImage("img/Bouton_Jouer_3.png");
	playButton.addSoundOnPressed(pressedButton);
	playButton.addSoundOnPointed(pointedButton);
	playButton.connect("playButtonFonction()");
	buttonMap.push(playButton);

	multiButton = new button("playGround.width / 2 - 0.256222547584 * playGround.width / 2", "playGround.height * 55 / 100", "0.256222547584 * playGround.width", "0.09765625 * playGround.height", "img/Bouton_Multi_1.png");
	multiButton.addPointedImage("img/Bouton_Multi_2.png");
	multiButton.addPressedImage("img/Bouton_Multi_3.png");
	multiButton.addSoundOnPressed(pressedButton);
	multiButton.addSoundOnPointed(pointedButton);
	buttonMap.push(multiButton);

	scoreButton = new button("playGround.width / 2 - 0.256222547584 * playGround.width / 2", "playGround.height * 70 / 100", "0.256222547584 * playGround.width", "0.09765625 * playGround.height", "img/Bouton_Scores_1.png");
	scoreButton.addPointedImage("img/Bouton_Scores_2");
	scoreButton.addPressedImage("img/Bouton_Scores_3");
	scoreButton.addSoundOnPressed(pressedButton);
	scoreButton.addSoundOnPointed(pointedButton);
	buttonMap.push(scoreButton);

	creditButton = new button("playGround.width / 2 - 0.256222547584 * playGround.width / 2", "playGround.height * 85 / 100", "0.256222547584 * playGround.width", "0.09765625 * playGround.height", "img/Bouton_Credits_1.png");
	creditButton.addPointedImage("img/Bouton_Credits_2");
	creditButton.addPressedImage("img/Bouton_Credits_3");
	creditButton.addSoundOnPressed(pressedButton);
	creditButton.addSoundOnPointed(pointedButton);
	buttonMap.push(creditButton);

	muteButton = new button("playGround.width * 94 / 100", "playGround.height * 90 / 100", "0.09765625 * playGround.height", "0.09765625 * playGround.height", "img/mute_button.png")
	muteButton.connect("muteButtonFunction()");
	buttonMap.push(muteButton);
}

function GUIrefresh() { // Handling & drawing all box object on canvas 
	for(var i = 0; i < buttonMap.length; i++){
		buttonMap[i].refresh();
	}
}