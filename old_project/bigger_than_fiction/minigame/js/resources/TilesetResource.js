define (["debug"], function (debug) {
	var TilesetResource = function (meta, resource, callback) {
		this.callback = callback;
		this.meta = meta;
		this.resource = resource;
		this.CreateObj();
	};

	TilesetResource.prototype.CreateObj = function () {
		this.obj = new Image();
	};

	TilesetResource.prototype.Load = function () {
		debug.vLog("TilesetResource", "Starting load");
		var that = this;
		this.obj.addEventListener('load', function () {
			that.OnLoad();
		});
		this.obj.src = this.meta.baseUrl + this.resource.url;
	};

	TilesetResource.prototype.OnLoad = function () {

		this.ppuX = Math.floor(this.obj.width / this.resource.width);
		this.ppuY = Math.floor(this.obj.height / this.resource.height);
		this.callback(this);
	};

	TilesetResource.GetCoordinates = function (kase) {
		if (kase.x >= this.resource.width || kase.y >= this.resource.height) {
			debug.loopWarn("TilesetResource", "Spritesheet ", this.meta.id, " was asked a too large case");
		}

		return {
			x : kase.x * this.ppuX,
			y : kase.y * this.ppuY,
			w : this.ppuX,
			h : this.ppuY
		};
	};

	return TilesetResource;
});