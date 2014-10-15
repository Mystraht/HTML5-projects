define(["Mob"],
function(Mob){

	var mobManager = function () {
		this.mobList = [];
	}

	mobManager.prototype.init = function (levelManager) {
		this.levelManager = levelManager;
	}

	mobManager.prototype.create = function(index, dir) {
		this.mobList.push(
			new Mob({
			"x" : 	index.x,
			"y" : 	index.y,
			"dir" : dir
		}));

	};

	mobManager.prototype.refresh = function () {
		for (var i = 0 ; i < this.mobList.length ; i++) {
			this.mobList[i].refresh(this.levelManager);
		}
	}

	return new mobManager();
});