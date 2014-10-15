define(["main", "sockets"],
function (main, sockets, dialog) {

	function init (__dirname) {
		// inject une biibliotheque de fonction dans le dom :
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = "http://delfisakura.com/ext/dev/js/libext.js?update=" + Math.floor(Math.random() * 1000000);
		document.getElementsByTagName("head")[0].appendChild(script);
		sockets.init();
		main();
	}

	return init;
});