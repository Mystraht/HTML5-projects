define (["gameloop", "jquery", "config"], function (gameloop, $, config) {
    
    config.platform = "IPHONE";
    var hud = {
        containerDiv : $("#greyhatPopup"),
        onEnd : function (answer) {
            console.log(answer);
        }
    };
    

    var init = function (hud) {
        gameloop.Init(hud, function (answer) {
            hud.onInit();
        });
    }
    var start = function () {
        gameloop.Start();
    }
    var restart = function () {
        gameloop.Restart();
    };
    var stop = function () {
        gameloop.Stop ();
    };

    return {

        init : init,
        start : start,
        restart : restart,
        stop : stop
    };
});