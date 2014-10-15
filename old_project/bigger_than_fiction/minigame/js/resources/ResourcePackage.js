define (["debug", "resources/Resource"],
function (debug, Resource) {
	
	var ResourcePackage = function (package, addCallback, monoCallback, callback) {
		this.id = package.id;
		this.resources = {};
		this.loaded = 0;
		this.toLoad = 0;
		this.callback = callback;
		this.monoCallback = monoCallback;
		this.addCallback = addCallback;
		this.autoload = true;

		this.meta = {
			autoload : package.autoload,
			baseUrl : package.baseUrl,
			id : package.id
		};

		this.Fill(package);

		debug.vLog("ResourcePackage", "New package : ", this.id,  " - Autoload : ", this.meta.autoload, " - baseUrl : ", this.meta.baseUrl);
	};

	ResourcePackage.prototype.Get = function (id) {
		if (this.resources[id] == undefined) return false;
		return this.resources[id].Get();
	}

	ResourcePackage.prototype.Fill = function (package) {
		for (var i = 0; i < package.resources.length; i++) {
			this.toLoad++;
			this.addCallback(package.resources[i], this);
			var that = this;
			this.resources[package.resources[i].id] = new Resource(this.meta, package.resources[i], function (resource) {
				that.LoadResource(resource);
			});
		};
		debug.vLog("ResourcePackage", "Package filled with ", this.toLoad, " resources.");
	};

	ResourcePackage.prototype.LoadResource = function (resource) {
		this.loaded++;
		debug.vLog("ResourcePackage", "Resource n° ", this.loaded, "/", this.toLoad, " of ", this.id, " loaded.");
		if (typeof this.monoCallback == "function") {
			this.monoCallback(resource, this);
		}
		if (this.loaded >= this.toLoad) {
			this.callback(this);
		}
	};

	return ResourcePackage;
});