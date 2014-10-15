define (["debug"],
function (debug) {

	var visibleEvents = [];
	var hiddenEvents = [];
	var hidden, visibilityChange; 
	if (typeof document.hidden !== "undefined") {
	    hidden = "hidden";
	    visibilityChange = "visibilitychange";
	} else if (typeof document.mozHidden !== "undefined") {
	    hidden = "mozHidden";
	    visibilityChange = "mozvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
	    hidden = "msHidden";
	    visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
	    hidden = "webkitHidden";
	    visibilityChange = "webkitvisibilitychange";
	}

	var PageVisibility = function () {
	  	var that = this;
	    document.addEventListener(visibilityChange, function () {
	    	that.onChange();
	    }, false);
	};
	
	PageVisibility.prototype.onChange = function () {
		debug.log("PageVisibility", "Change", document[hidden]);
	    if (document[hidden]) {
	        this.onHidden();
	    } else {
	        this.onVisible();
	    }
	};

	PageVisibility.prototype.bind = function (evt, fnc) {
		if (evt == "visible") {
			visibleEvents.push(fnc);
		}
		if (evt == "hidden") {
			hiddenEvents.push(fnc);

		}
	}
	PageVisibility.prototype.onVisible = function (){
		for (var i = 0; i < visibleEvents.length; i++) {
			visibleEvents[i]();
			console.log("VISIBLE N° ", i)
		};

	};
	PageVisibility.prototype.onHidden = function (){
		for (var i = 0; i < hiddenEvents.length; i++) {
			hiddenEvents[i]();
		};
	};

	return new PageVisibility();

});