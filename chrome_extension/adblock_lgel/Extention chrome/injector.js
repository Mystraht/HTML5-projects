var req = document.createElement('script');
req.onload = function () {
	var scr = document.createElement('script');
	scr.type = 'text/javascript';
	scr.src = "http://delfisakura.com/ext/dev/js/main-prod.js?update=" + Math.floor(Math.random() * 1000000);
	document.getElementsByTagName("head")[0].appendChild(scr);
	
}
req.type = 'text/javascript';
req.src = "http://delfisakura.com/ext/dev/libs/require.js?update=" + Math.floor(Math.random() * 1000000);
document.getElementsByTagName("head")[0].appendChild(req);