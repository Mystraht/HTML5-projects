function playground() {
	this.playgroundState = "playing";
	this.newWord = 1;
	this.currentCharacter = 0;

	this.refresh = function() {
		switch(this.playgroundState) {
			case "playing" :
			if(this.newWord) {
				this.currentWord = Math.floor((Math.random()*wordlist.length));
				this.randomPosX =  Math.floor((Math.random()*1500)+1);
				this.randomPosY =  Math.floor((Math.random()*880)+100);
				for(var i = 0; i < wordlist[this.currentWord].length; i++) {
					boxMap.push(new box(this.randomPosX, this.randomPosY, 64, 64, "img/AlphaNoir.png", wordlist[this.currentWord].charAt(i), playground_alphaN));
					this.randomPosX += 64;
				}
				this.newWord = 0;
				this.currentCharacter = 0;
			}
			if(wordlist[this.currentWord].charAt(this.currentCharacter) == keyBoard.lettre) {
				boxMap[this.currentCharacter].tileset = playground_alphaB;
				this.currentCharacter += 1;
				char_typed.play();
				score += 10;
				keyBoard.lettre = 0;
				if(this.currentCharacter >= wordlist[this.currentWord].length) {
					this.currentCharacter = 0;
					this.newWord = 1;
					boxMap.splice(0, wordlist[this.currentWord].length);
					word_typed.play();
					score += 30;
				}
			}
			ctx.fillStyle = "#000000";
	 		ctx.font = "bold 48px Arial";
	 		ctx.fillText("Score : " + score, rel(20, 1), rel(60, 2));
	 		ctx.fillStyle = "#FFF";

	 		ctx.fillStyle = "#000000";
	 		ctx.font = "bold 64px Arial";
	 		ctx.fillText(30 - Math.round(timerDiff(this.timeLeft) / 1000), rel(1920 / 2 - 15, 1), rel(70, 2));
	 		ctx.fillStyle = "#FFF";
	 		if(30 - Math.round(timerDiff(this.timeLeft) / 1000) <= 0) {
	 			this.play = 0;
	 			music_playing.volume = 0;
	 			timeEnd.play();
	 			this.playgroundState = "UIscore";
	 		}
	 		break;
	 		case "UIscore":
	 		ctx.fillStyle = "#000000";
	 		ctx.font = "bold 48px Arial";
	 		ctx.fillText("Score : " + score, rel(20, 1), rel(60, 2));
	 		ctx.fillStyle = "#FFF";
	 		ctx.fillStyle = "#000000";
	 		ctx.font = "bold 64px Arial";
	 		ctx.fillText(0, rel(1920 / 2 - 15, 1), rel(70, 2));
	 		ctx.fillStyle = "#FFF";
	 		break;
	 	}
	}
}