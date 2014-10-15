define (["debug"], function (debug) {
	var SpritesheetResource = function (meta, resource, callback) {
		this.callback = callback;
		this.meta = meta;
		this.resource = resource;
		this.CreateObj();
		this.caseWidth = this.resource.width;
		this.caseHeight = this.resource.height;
	};

	SpritesheetResource.prototype.CreateObj = function () {
		this.obj = new Image();
	};

	SpritesheetResource.prototype.Load = function () {
		debug.vLog("SpritesheetResource", "Starting load");
		var that = this;
		this.obj.addEventListener('load', function () {
			that.OnLoad();
		});
		this.obj.src = this.meta.baseUrl + this.resource.url;
	};

	SpritesheetResource.prototype.OnLoad = function () {
		this.width = this.obj.width;
		this.height = this.obj.height;
		this.ppuX = Math.floor(this.obj.width / this.resource.width);
		this.ppuY = Math.floor(this.obj.height / this.resource.height);
		this.callback(this);
	};

	SpritesheetResource.prototype.GetCoordinates = function (kase) {
		if (kase.x >= this.resource.width || kase.y >= this.resource.height) {
			debug.loopWarn("SpritesheetResource", "Spritesheet ", this.meta.id, " was asked a too large case");
		}

		return {
			x : kase.x * this.ppuX,
			y : kase.y * this.ppuY,
			w : this.ppuX,
			h : this.ppuY
		};
	};
	SpritesheetResource.prototype.GetAnim = function (step, state, dir) {
		var anims = this.resource.anims;
		var animation = anims[state];
		if (dir != false) {
			animation = animation[dir];
		}
		var retAnim = _.clone(animation);
		if (!retAnim.pace) retAnim.pace = anims.pace || 100;
		if (retAnim.specialPace) {
			for (var i in retAnim.specialPace) {
				var sp = retAnim.specialPace[i];
				if (i == step) {
					retAnim.pace = sp;
				}
			}
		}
		if (!retAnim.width) retAnim.width = this.resource.width || 1;

		return retAnim;
	};

	SpritesheetResource.prototype.GetDefaultAnim = function () {
		var defaultState = this.resource.anims.defaultState;
		var defaultDir = false;
		if (this.resource.anims.defaultDir !== undefined) defaultDir = this.resource.anims.defaultDir;
		return {
			state : defaultState,
			dir : defaultDir
		};
	};

	return SpritesheetResource;
});