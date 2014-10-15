define(["debug", "config", "jquery"], function (debug, config, $) {

	var CanvasManager = function() {

		this.mouse = {
			down : false,
			dragging : false,
			position : {
				x : 0,
				y : 0
			}
		};

		switch (config.screen.mode) {
			case "ratio_css" :
				this.aspectRatio = config.screen.aspectRatio;
				this.width = config.screen.width;
				this.height = config.screen.height;
			break;
		}
		debug.log("Config", config);
		console.log(this.width);
		this.cssWidth = this.width;
		this.cssHeight = this.height;
		debug.log("Canvas Manager", this.aspectRatio, config.screen);

	};

	CanvasManager.prototype.cleanCanvas = function () {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	CanvasManager.prototype.init = function(container)
	{
		this.container = container;
		this.canvas = $('<canvas />');
		var that = this;
		this.canvas.bind('mousedown', function (event) {
			that.onMouseDown(event);
		});
		this.canvas.bind('mouseup', function (event) {
			that.onMouseUp(event);
		});
		this.canvas.bind('mousemove', function (event) {
			that.onMouseMove(event);
		});
		this.canvas.bind('mouseout', function (event) {
			that.onMouseOut(event);
		})
		this.canvas.bind('touchstart', function (event) {
			that.onMouseDown(event);
		});
		this.canvas.bind('touchend', function (event) {
			that.onMouseUp(event);
		});
		this.gui = $('<div />');
		this.ctx = this.canvas[0].getContext('2d');
		this.canvas.css({
			'position' : "relative",
			'width' : this.cssWidth + 'px',
			'height' : this.cssHeight + 'px',
			'border' : '1px solid black'
		});
		this.canvas.attr({
			'width' : this.width,
			'height' : this.height
		});
		this.canvas.addClass('greyhatGameCanvas');
		this.gui.addClass('greyhatGameGui');
		var that = this;
		$(window).resize(function (event) {
			var size = {
				x : that.container.width(),
				y : that.container.height()
			};
			that.onresize(size);
		});
		var size = {
			x : this.container.width(),
			y : this.container.height()
		};
		console.log(this.container, size.x, size.y);
		this.onresize(size);
		this.canvas.appendTo(this.gui);
		this.gui.appendTo(this.container);
	};

	CanvasManager.prototype.onMouseMove = function (event) {
		var event = event || window.event;
			var cursor = {x:0, y:0};
			if (event.pageX || event.pageY) {
			    cursor.x = event.pageX;
			    cursor.y = event.pageY;
			}
			else {
			    cursor.x = event.clientX +
			    (document.documentElement.scrollLeft ||
			     document.body.scrollLeft) -
			     document.documentElement.clientLeft;
			     cursor.y = event.clientY +
			    (document.documentElement.scrollTop ||
			     document.body.scrollTop) -
			     document.documentElement.clientTop;
			}
			cursor.x -= this.canvas.offset().left;
			cursor.y -= this.canvas.offset().top;
			cursor.x *= this.width / this.cssWidth;
			cursor.y *= this.height / this.cssHeight;
			cursor.x = cursor.x | 0;
			cursor.y = cursor.y | 0;
			if (cursor.x < 0) cursor.x = 0;
			if (cursor.y < 0) cursor.y = 0;
			this.mouse.position = cursor;
			if (this.mouse.down) this.mouse.dragging = true;

	};

	CanvasManager.prototype.onMouseDown = function (event) {
		this.mouse.down = true;
	};

	CanvasManager.prototype.onMouseUp = function (event) {
		this.mouse.down = false;
	};
	CanvasManager.prototype.onMouseOut = function (event) {
		this.mouse.down = false;
	}

	CanvasManager.prototype.onresize = function (size) {
		debug.log("CanvasManager", "reisze", size.x, size.y);
		var sizeRatio = size.x / size.y;
		var coeff = 50;
		if (config.platform == "IPHONE") coeff = 0;
		console.log(config.platform);
		var width = size.x - (coeff * this.aspectRatio);
		var height = size.y - coeff;
		if (sizeRatio > this.aspectRatio) {
			width = Math.floor(this.aspectRatio * height);
			this.cssWidth = width;
			this.cssHeight = height;
		} else {

			height = Math.floor(width / this.aspectRatio);
			this.cssWidth = width;
			this.cssHeight = height;
		}
		this.canvas.css ({
			'width' : this.cssWidth + 'px',
			'height' : this.cssHeight + 'px',
			'backgroundImage' : config.canvasBackgroundImage,
			'position' : 'relative'
		});
		var left = size.x / 2;
		left -= (this.cssWidth / 2);
		var top = size.y / 2;
		top -= (this.cssHeight / 2);
		this.gui.css ({
			'width' : this.cssWidth + 'px',
			'height' : this.cssHeight + 'px',
			'marginLeft' : left,
			'marginTop' : top
		});
	};

	return new CanvasManager();
});