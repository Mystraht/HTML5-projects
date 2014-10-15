define (["debug"], function (debug) {
	var JsonResource = function (meta, content, callback) {
		this.callback = callback;
		this.meta = meta;
		this.content = content;

	};

	JsonResource.prototype.CreateObj = function () {
		this.obj = new Image();
	};

	JsonResource.prototype.Load = function () {
		debug.vLog("JsonResource", "Starting load");
		var that = this;
		this.obj.addEventListener('load', function () {
			that.callback();
		})
		this.obj.src = this.meta.baseUrl + this.content.url;
	};

	return JsonResource;
});