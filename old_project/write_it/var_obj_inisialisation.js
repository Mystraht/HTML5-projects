function var_obj_inisialisation() {

	soundMuted = 0;
	score = 0;
	transitionEffect = new transitionEffect();
	playground = new playground();
	pressedButton = new Audio("music/boutonEnfoncer.mp3");
	pointedButton = new Audio("music/boutonPointed.wav");
	music_main_menu = new Audio("music/music_main_menu.mp3");
	music_playing = new Audio ("music/music_playing.mp3")
	char_typed = new Audio ("music/Pickup_Coin11.wav")
    word_typed = new Audio ("music/Pickup_Coin26.wav")
    timeEnd = new Audio ("music/timeEnd.mp3")
	backgroundImg =  new Image();
	backgroundImg.src = "img/wp5.jpg";
	background_pg_Img =  new Image();
	background_pg_Img.src = "img/wp_playground.jpg";
	playground_alphaN = new Image();
	playground_alphaN.src = "img/AlphaNoir.png"
	playground_alphaB = new Image();
	playground_alphaB.src = "img/AlphaBleu.png"

	pressedButton.load();
	pointedButton.load();
	music_main_menu.load();
	music_playing.load();
	game_state = "mainMenu";
	//game_state = "playing";

	wordlistGenerate();
	createButton();
	createBox();
}