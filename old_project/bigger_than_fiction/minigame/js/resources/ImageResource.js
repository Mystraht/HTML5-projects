define (["debug"], function (debug) {
	var ImageResource = function (meta, resource, callback) {
		this.callback = callback;
		this.meta = meta;
		this.resource = resource;
		this.CreateObj();
	};

	ImageResource.prototype.CreateObj = function () {
		this.obj = new Image();
	};

	ImageResource.prototype.Load = function () {
		debug.vLog("ImageResource", "Starting load");
		var that = this;
		this.obj.addEventListener('load', function () {
			that.callback(that);
		})
		this.obj.src = this.meta.baseUrl + this.resource.url;
	};

	return ImageResource;
});