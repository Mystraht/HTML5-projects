requirejs.config ({
	baseUrl : "minigame/js/",
	paths : {
		"jquery" : "../libs/jquery",
		"debug" : "../libs/debug",
		"stats" : "../libs/stats",
		"once" : "../libs/once",
		"underscore" : "../libs/underscore"
	},
	shim : {
		"jquery" : {
			exports : "$"
		},
		"underscore" : {
			exports : "_"
		}
	},
	urlArgs : "?d=" + Date.now()
});
define (["jquery", "main"], function ($, main) {
	var hud = {
		containerDiv : $('#greyhatIphoneContainer'),
		onEnd : function (answer) {

		},
		onInit : function () {
			main.start();
		}
	};
	main.init(hud);
});