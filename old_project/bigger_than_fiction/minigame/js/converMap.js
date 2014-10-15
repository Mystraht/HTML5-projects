define(["debug", "jquery", "config", "MapGenerate"], 
function(debug, $, config, MapGenerate) {

	var currentSize = 6;
	var converMap = function () {

	}

	converMap.prototype.loadMap = function (map, callback) {
		$.getJSON(config.mapsPath + map + ".json", function(json) {			
			callback(json);
		});
		/*
		currentSize++;
		(function () {
			setTimeout(function () {
			callback(MapGenerate(currentSize));
		}, 10);
		})(currentSize);
		*/
	}

	return new converMap();
});