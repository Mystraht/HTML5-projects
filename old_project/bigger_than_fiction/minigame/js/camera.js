define ([], function () {
	var Camera = function () {
		this.caseWidth = 50;
		this.caseHeight = 50;
		this.mapWidth = 0;
		this.mapHeight = 0;
		this.x = 0;
		this.y = 0;
	};

	Camera.prototype.xToCanvas = function (x) {

	};

	Camera.prototype.SetSize = function (size) {
		this.caseWidth = size.caseWidth;
		this.caseHeight = size.caseHeight;
		this.mapWidth = size.mapWidth;
		this.mapHeight = size.mapHeight;
	};

	Camera.prototype.SetPosition = function (pos) {
		this.x = pos.x;
		this.y = pos.y;
	};

	return new Camera();
});