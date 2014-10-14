requirejs.config ({
	baseurl : "js/",
	paths : {
		"perlin" : "../libs/perlin",
		"jquery" : "../libs/jquery/jquery.min",
		"soundjs" : "../libs/soundjs-0.5.2.min",
		"underscore" : "../libs/underscore-min"
	},
	shim : {
		"perlin" :  {
			exports : "noise"
		},
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