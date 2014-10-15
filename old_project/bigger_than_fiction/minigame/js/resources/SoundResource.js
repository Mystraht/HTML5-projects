define (["debug"], function (debug) {
	var SoundResource = function (meta, content, callback) {
		this.callback = callback;
		this.meta = meta;
		this.content = content;

	};

	SoundResource.prototype.CreateObj = function () {
		this.obj = new Image();
	};

	SoundResource.prototype.Load = function () {
		debug.vLog("SoundResource", "Starting load");
		var that = this;
		this.obj.addEventListener('load', function () {
			that.callback();
		})
		this.obj.src = this.meta.baseUrl + this.content.url;
	};

	return SoundResource;
})