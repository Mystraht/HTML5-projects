define (["debug"], function (debug) {
	
	var states = {
		UNACTIVE : "Unactive",
		LOADING : "Loading",
		LOADED : "Loaded",
		PROCESSING : "Processing",
		COMPLETED : "Completed"
	};

	var loadersCount = 0;

	var Loader = function (args) {
		this.states = states;
		this.state = states.UNACTIVE;
		this.loaded = 0;
		this.toLoad = 0;
		this.processed = 0;
		this.toProcess = 0;
		this.name = "Unnamed Loader n° " + loadersCount;
		if (args !== undefined) {
			if (args.name) {
				this.name = args.name;
			}
		}
		this.id = loadersCount;
		this.logID = "Loader " + this.id;
		loadersCount++;
	};
	Loader.prototype.Update = function () {

	};
	Loader.prototype.Render = function () {

	};
	Loader.prototype.StartLoading = function () {
		
	}
	Loader.prototype.Load = function (callback) {
		this.callback = callback;
		this.state = states.LOADING;
		debug.vLog(this.logID, "Launching Loader : ", this.name);
		this.StartLoading();
	};

	Loader.prototype.FinishLoad = function () {
		this.state = states.LOADED;
		debug.vLog(this.logID, "Load Finished");
		this.Process();
	};
	Loader.prototype.Process = function () {
		this.state = states.PROCESSING;
		debug.vLog(this.logID, "Launching processing");
		this.StartProcessing();
	};
	Loader.prototype.Complete = function () {
		this.state = states.COMPLETED;
		debug.mLog(this.logID, "Completed Loader");
		this.callback();
	};

	Loader.prototype.ResourceLoaded = function () {
		this.loaded++;
		debug.vLog(this.logID, "Loaded a resource", " (", this.GetPercentage(), "% loaded).");
		if (this.loaded >= this.toLoad) {
			this.FinishLoad();
		}
	};
	Loader.prototype.ProcessFinished = function () {
		this.processed++;
		debug.vLog(this.logID, "Finished a processing", " (", this.GetPercentage(), "% loaded).");
		if (this.processed >= this.toProcess) {
			this.Complete();
		}
	};
	Loader.prototype.AddResources = function (nb) {
		this.toLoad += nb;
		debug.vLog(this.logID, "Adding ", nb, " Resources");
	};
	Loader.prototype.AddResource = function () {
		this.toLoad++;
		debug.vLog(this.logID, "Added a resource");
	};
	Loader.prototype.AddProcess = function () {
		this.toProcess++;
		debug.vLog(this.logID, "Added a process");
	};
	Loader.prototype.AddProcesses = function (nb) {
		this.toProcess += nb;
		debug.vLog(this.logID, "Adding ", nb, " Processes");
	};

	Loader.prototype.GetPercentage = function () {
		return Math.floor(( (50 / (this.toLoad || 1)) * this.loaded ) + ( (50 / (this.toProcess || 1)) * this.processed));
	};

	Loader.prototype._Update = function () {
		this.Update();
	};

	Loader.prototype._Render = function () {
		this.Render();
	};
	Loader.prototype._StartLoading = function () {
		this.StartLoading();
	};
	Loader.prototype._StartProcessing = function () {
		this.StartProcessing();

	};

	return Loader;
});