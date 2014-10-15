require(["minigame/js/context"], function (minigameCtx) {
	minigameCtx(["iosMain"], function (main) {
		var hud = {
			containerDiv : $("#greyhatIphoneContainer")
		};
		main.init(hud);
	});
});