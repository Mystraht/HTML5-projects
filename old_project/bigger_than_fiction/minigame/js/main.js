define (["gameloop", "jquery", "stats"], function (gameloop, $, stats) {

    var hud = {
        containerDiv : $("#greyhatIphoneContainer"),
        onEnd : function (answer) {
            console.log(answer);
        }
    };


    var init = function (hud) {
        gameloop.Init(hud, function (answer) {
            hud.onInit();
        });
    };
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