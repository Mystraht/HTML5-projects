define (["../data/mainTileset"], function (mainTileset) {
	var resources = {};

	resources.preloading = {

	};

	resources.loading = {
		id : "loading",
		autoload : true,
		baseUrl : "../img/loading/",
		resources : [
			{
				id : "mainTileset",
				url : "playground_tileset.png",
				type : "TILESET",
				width : 12,
				height : 7,
				cases : mainTileset
			}
		]
	};

	resources.maingame = {

	};

	return resources;
});