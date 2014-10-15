define (["resources/ImageResource", "resources/SoundResource", "resources/JsonResource",
	"resources/SpritesheetResource", "resources/TilesetResource"],
function (ImageResource, SoundResource, JsonResource, SpritesheetResource,
	TilesetResource) {
	var types = {
		IMAGE : ImageResource,
		SPRITESHEET : SpritesheetResource,
		TILESET : TilesetResource,
		SOUND : SoundResource,
		JSON : JsonResource
	};

	return types;
});