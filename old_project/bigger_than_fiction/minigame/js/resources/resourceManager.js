define (["debug", "jquery", "resources/ResourcePackage", "config"], 
function (debug, $, ResourcePackage, config) {
	var ResourceManager = function () {
		this.packages = {};
	};

	ResourceManager.prototype.AddPackage = function (package, addCallback, monoCallback, callback) {
		var that = this;
		debug.vLog("ResourceManager", "Adding Package : ", package.id);
		var onLoaded = function (package) {
			that.PackageLoaded(package, callback);
		};
		var onElementLoaded = function (element, package) {
			that.ElementLoaded (element, package, monoCallback);
		};
		var onElementAdded = function (element, package) {
			that.ElementAdded(element, package, addCallback);
		}

		this.packages[package.id] = new ResourcePackage(package, onElementAdded, onElementLoaded, onLoaded);

		debug.mLog("ResourceManager", "Added Package : ", package.id);
	};

	ResourceManager.prototype.PackageLoaded = function (package, callback) {
		debug.mLog("ResourceManager", "Package Loaded : ", package.id);
		callback(package);

	};

	ResourceManager.prototype.ElementLoaded = function (element, package, monoCallback) {
		debug.vLog("ResourceManager", "Loaded package element ", element.meta.id, " from package ", package.id);
		monoCallback(element, package);
	};

	ResourceManager.prototype.ElementAdded = function (element, package, addCallback) {
		addCallback(element, package);
	};

	ResourceManager.prototype.Get = function (package, id) {
		if (this.packages[package] == undefined) return false;
		return this.packages[package].Get(id);
	}

	return new ResourceManager();
});