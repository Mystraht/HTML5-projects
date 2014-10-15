define (["scenes/preloader", "scenes/loader", "scenes/maingame", "GameScene"], 
function (preloader, loader, maingame, GameScene) {

	var dflt = new GameScene();

	var scenes = {
		DEFAULT : dflt,
		preloader : preloader,
		loader : loader,
		maingame : maingame,
	};

	scenes.firstScene = "preloader";

	return scenes;
})