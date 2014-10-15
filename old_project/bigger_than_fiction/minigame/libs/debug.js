define([], function(){
	function Debug(){
		this.logLvl = 3;
		this.loopChances = 100;
	}

	Debug.prototype.processTag = function (tag) {
		return "[" + tag + "] : ";
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

	Debug.prototype.vLog = function () {
		if (this.logLvl >= 4) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}
	};
	Debug.prototype.loopVLog = function () {
		if (this.logLvl >= 4 && Math.floor(Math.random() * this.loopChances) == 2) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}
	};

	Debug.prototype.mLog = function () {
		if (this.logLvl >= 3) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}		
	};
	Debug.prototype.loopMLog = function () {
		if (this.logLvl >= 3 && Math.floor (Math.random () * this.loopChances) == 2) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}
	}
	Debug.prototype.log = function(){
		if (this.logLvl >= 2) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}
	}
	Debug.prototype.loopLog = function () {
		if (this.logLvl >= 2 && Math.floor (Math.random () * this.loopChances) == 2) {
			console.log.apply(console, this.processLog.apply(this, arguments));
		}
	};

	Debug.prototype.warn = function(){
		if (this.logLvl >= 1) {
			console.warn.apply(console, this.processLog.apply(this, arguments));
		}
	}
	Debug.prototype.loopWarn = function () {
		if (this.logLvl >= 1 && Math.floor (Math.random () * this.loopChances) == 2) {
			console.warn.apply(console, this.processLog.apply(this, arguments));
		}
	};

	Debug.prototype.error = function(){
		if (this.logLvl >= 0) {
			console.error.apply(console, this.processLog.apply(this, arguments));
		}
	}
	Debug.prototype.loopError = function(){
		if (this.logLvl >= 0 && Math.floor (Math.random () * this.loopChances) == 2) {
			console.error.apply(console, this.processLog.apply(this, arguments));
		}
	}
	return new Debug();
})