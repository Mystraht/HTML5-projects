define (["underscore"], function (_) {

	var baseJson = function () {
		this.content = {
		"height" : 0,
		"width" : 0,
		"layers":[
		       {
		        "data":[],
		        "height":12,
		        "name":"Calque de Tile 1",
		        "opacity":1,
		        "type":"tilelayer",
		        "visible":true,
		        "width":16,
		        "x":0,
		        "y":0
		       }],		
        "tilesets":[
        {
         "firstgid":1,
         "image":"tuto\/playground_tileset.png",
         "imageheight":128,
         "imagewidth":384,
         "margin":0,
         "name":"playground_tileset",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":32,
         "tileproperties":
            {
             "0":
                {
                 "game":"0"
                },
             "1":
                {
                 "game":"1"
                },
             "10":
                {
                 "game":"16"
                },
             "11":
                {
                 "game":"17"
                },
             "16":
                {
                 "game":"5"
                },
             "17":
                {
                 "game":"7"
                },
             "18":
                {
                 "game":"9"
                },
             "19":
                {
                 "game":"11"
                },
             "2":
                {
                 "game":"2"
                },
             "20":
                {
                 "game":"13"
                },
             "21":
                {
                 "game":"15"
                },
             "22":
                {
                 "game":"18"
                },
             "23":
                {
                 "game":"19"
                },
             "28":
                {
                 "game":"20"
                },
             "29":
                {
                 "game":"21"
                },
             "3":
                {
                 "game":"3"
                },
             "30":
                {
                 "game":"22"
                },
             "31":
                {
                 "game":"23"
                },
             "32":
                {
                 "game":"24"
                },
             "33":
                {
                 "game":"25"
                },
             "34":
                {
                 "game":"26"
                },
             "35":
                {
                 "game":"27"
                },
             "4":
                {
                 "game":"4"
                },
             "40":
                {
                 "game":"28"
                },
             "41":
                {
                 "game":"29"
                },
             "42":
                {
                 "game":"30"
                },
             "43":
                {
                 "game":"31"
                },
             "44":
                {
                 "game":"32"
                },
             "45":
                {
                 "game":"33"
                },
             "46":
                {
                 "game":"34"
                },
             "5":
                {
                 "game":"6"
                },
             "6":
                {
                 "game":"8"
                },
             "7":
                {
                 "game":"10"
                },
             "8":
                {
                 "game":"12"
                },
             "9":
                {
                 "game":"14"
                }
            },
         "tilewidth":32
        }],
	};
};
	var MapGenerate = function (size) {
		console.log("MapGenerate");
		var Map = {};
		Map = new baseJson().content;
		Map.height = size;
		Map.width = size;
		Map.layers[0].width = size;
		Map.layers[0].height = size;
		console.log(size);
		
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				var block = 2;
				//if (i == 1 && j == 1) block = 29;
				//if (i == 1 && j == size - 2) block = 33;
				if (i == 0 || i == size - 1 || j == 0 || j == size - 1) block = 1;
				Map.layers[0].data.push(block);

			};
		};
		var path = GeneratePath(size);
		for (var i = 0; i < path.length; i++) {
			var pos = path[i][0] + path[i][1] * size;
			console.log("case at ", pos, "(", path[i][0], ",", path[i][1], ") - ", path[i][2]);
			Map.layers[0].data[pos] = path[i][2];
		};
		console.log("MapGenerated", Map);
		return Map;
	};

	var RandomCase = function (size, dir, lastDir, lastPos) {
		var x = 0;
		var y = 0;
		var xMin = 1;
		var yMin = 1;
		var xMax = size - 1;
		var yMax = size - 1;
		if (lastDir == "left" || lastDir == "right") {
			y = lastPos.y;
			if (lastDir == "left") xMax = lastPos.x;
			else xMin = lastPos.x;
		} else if (lastDir == "top" || lastDir == "bottom") {
			x = lastPos.x;
			if (lastDir == "top") yMax = lastPos.y;
			else xMin = lastPos.y;
		}
		return {
			x : Math.floor(Math.random() * (xMax - xMin)) + xMin,
			y : Math.floor(Math.random() * (yMax - yMin)) + yMin
		}
	};

	var startDirs = {
		"right" : 29,
		"left" : 30,
		"top" : 31,
		"bot" : 32
	};
	var end = 33;
	var arrowDirs = {
		"right" : 11,
		"bot" : 12,
		"top" : 23,
		"left" : 24
	};
	var dirs = ["left", "right", "top", "bot"];
	var dirstuff = {
		'left' : [1, 0],
		'right' : [-1, 0],
		'top' : [0, 1],
		'bot' : [0, -1]
	};
	var dir = "right";
	var lastDir = "nope"
	var lastPosition = {
		x : 0,
		y : 0
	};

	var GeneratePath = function (size) {
		var nodesCount = Math.floor(Math.random() * 3) + 3;
		var points = [];
		var nextNode = {
			x : 0,
			y : 0
		};
		for (var i = 0; i < nodesCount; i++) {
			var dir = Randomdir();
			var kase = RandomCase(size, dir, lastDir, lastPosition);
			points[i] = [kase.x, kase.y];
			if (i == 0) points[i].push(startDirs[dir])
			else if (i == nodesCount - 1) points[i].push(end);
			else {
				points[i].push(arrowDirs[dir]);
			}
			lastDir = dir;
			lastPosition = {
				x : kase.x,
				y : kase.y
			};
		};
		console.log(points);
		return points;
	};

	var Randomdir = function () {
		return dirs[Math.floor(Math.random() * dirs.length)];
	};

	return MapGenerate;
})