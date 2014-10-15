define (["debug", "resources/resourceTypes"],
function (debug, resourceTypes) {
	
	var types = {

	}
	var Resource = function (meta, resource, callback) {
		this.loaded = false;
		this.callback = callback;
		this.meta = meta;
		this.resource = resource;
		var that = this;
		debug.vLog("Resource", "New resource of type : ", resource.type, " from package : ", meta.id, " url : ", resource.url);
		console.log()
		this.content = new resourceTypes[resource.type](meta, resource, function (resource) {
			that.Loaded(resource);
		});

		if (this.meta.autoload) {
			this.Load();
		}
	};

	Resource.prototype.Load = function () {
		debug.vLog("Resource", "Loading resource : ", this.resource.url)
		this.content.Load();
	};

	Resource.prototype.Get = function () {
		if (!this.loaded) return false;
		return this.content;
	};

	Resource.prototype.Loaded = function (resource) {
		this.loaded = true;
		this.callback(resource);
	};

	return Resource;
});