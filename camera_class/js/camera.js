define([], function () {
	var camera = function () {
		this.x = 0;
		this.y = 0;
		this.zoom = 1;
	}

	camera.prototype.transform = function (params) {
		params.x += this.x;
		params.y += this.y;
		params.width *= this.zoom;
		params.height *= this.zoom;
		return params;
	}

	camera.prototype.setOffset = function (newOffset) {
		this.x = newOffset.x;
		this.y = newOffset.y;
	}

	camera.prototype.setNewZoom = function (zoom) {
		this.zoom = zoom;
	}

	return new camera ();
});