define ([], function () {
    // Config require.js for external libs
    var reqGame = require.config({
        context : "hackGame",
        baseUrl: "minigame/js/",
        paths: {
            'jquery'     : '../libs/jquery',
            'debug'      : '../libs/debug',
            'stats'      : '../libs/stats',
            'once'       : '../libs/once',
            'underscore' : '../libs/underscore'
        },
        shim: {
            'jquery' : {
                exports : '$'
            },
            'underscore' : {
                exports : '_'
            }
        }
    });

    return reqGame;
})