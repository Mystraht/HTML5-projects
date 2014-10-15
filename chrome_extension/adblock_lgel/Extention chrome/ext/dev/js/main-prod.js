var url = "http://delfisakura.com/ext/dev/";

var reqMain = require.config({
    urlArgs: "_=" + Math.floor(Math.random() * 1000000),
    context : "main",
	baseUrl: url + "js/",
    paths: {
        'jquery'        : url + '/libs/jquery',
        'underscore'    : url + '/libs/underscore',
        'debug'         : url + '/libs/debug'
    },
    shim: {
        'underscore' : {
            exports : '_'
        },
        'jquery'    : {
            exports: '$'
        }
    }
});


reqMain(["initExt"], function (initExt) {
    initExt(url);
});