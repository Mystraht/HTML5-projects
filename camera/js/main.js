requirejs.config ({
	baseurl : "js/",
	paths : {
		"jquery" : "../libs/jquery/jquery.min",
		"soundjs" : "../libs/soundjs-0.5.2.min",
		"underscore" : "../libs/underscore-min"
	},
	shim : {
		"jquery" : {
			exports : "$"
		},
		"soundjs" : {
			exports : "createjs.Sound"
		},
		"underscore" : {
			exports : "_"
		}
	},
	urlArgs : "d=" + Date.now()
});


define(["gameloop"], function(gameloop){
	gameloop.init();
});