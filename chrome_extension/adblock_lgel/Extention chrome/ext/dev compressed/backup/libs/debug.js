define([], function(){
	function Debug(){
		this.logs = true;
		this.warns = true;
		this.errors = true;
		this.tagEcart = 6;
		this.showTime = false;
		this.tagLength = 5;
		this.timeLength = 9;

		this.ecart = this.tagEcart + this.tagLength;
		if (this.showTime) this.ecart += this.timeLength;
	}

	Debug.prototype.processTime = function () {
		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var str = "";
		if (hour < 10) {
			str += "0";
		}
		str += hour + ":";
		if (minutes < 10) {
			str += "0"
		}
		str += minutes + ":";
		if (seconds < 10) {
			str += "0"
		}
		str += seconds;

		return str;
	}
	Debug.prototype.processTag = function (tag) {
		var start = "";
		if (this.showTime) start += this.processTime();
		start += " [" + tag + "]";
			for (var i = start.length; i < this.ecart; i++) {
				start += " ";
			}
		start += " : ";
		return start;
	}

	Debug.prototype.processLog = function () {
		var tag = "[UNTAGGED] : ";
		if (arguments.length > 1) {
			tag = this.processTag(arguments[0]);
		}
		var log = [tag];
		for (var i = 0; i < arguments.length; i++) {
			if (arguments.length > 1 && i == 0) {
				continue;
			} else {
				log.push(arguments[i]);
			}
		};
		return log;
	}

	Debug.prototype.log = function(){
		if (this.logs) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}
	}

	Debug.prototype.warn = function(){
		if (this.warns) {
			console.warn.apply(console, this.processLog.apply(this, arguments));
		}
	}

	Debug.prototype.error = function(){
		if (this.errors) {
			console.error.apply(console, this.processLog.apply(this, arguments));
		}
	}
	return new Debug();
})